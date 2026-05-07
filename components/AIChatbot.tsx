"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      text: "¡Hola! Soy el asistente virtual de IZATE Fisioterapia. ¿En qué te puedo ayudar hoy? Te puedo orientar sobre nuestros servicios o dudas generales.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    
    const newMessages = [
      ...messages,
      { id: Date.now().toString(), role: "user" as const, text: userText },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Clave de API no configurada.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const historyStr = newMessages.map(m => `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.text}`).join('\n');

      const prompt = `Eres un asistente virtual amable y profesional de una clínica de fisioterapia premium llamada IZATE Fisioterapia, ubicada en Donostia / San Sebastián.
Historial de conversación:
${historyStr}

Instrucciones:
- Responde siempre de forma educada y concisa.
- Si el usuario describe un dolor, recomiéndale suavemente que pida una cita o consulte nuestro "Pre-evaluador de síntomas" (Evaluación IA) en el menú.
- Advierte amablemente que no eres un médico ni das diagnósticos.
- Mantén el tono premium y la filosofía de "Zaren bezala mugitu" (Muévete tal y como eres).
- Si te preguntan por horarios o ubicación: Estamos en Mad. Jauregiberri Ibilbidea, 4 (Donostia) y abrimos de Lunes a Viernes con cita previa. Teléfono: 613 92 01 74.
- Usa frases cortas y claras.

Tu siguiente respuesta como Asistente:`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      if (response.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            text: response.text ?? "",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          text: "Lo siento, ha ocurrido un error de conexión al intentar responderte. Por favor, contáctanos por teléfono o WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-brand-700 hover:scale-105 transition-all z-50 ${isOpen ? "hidden" : "flex"}`}
        aria-label="Abrir chat de asistencia"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-[calc(100vw-3rem)] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-200 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-brand-600 p-5 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Asistente IZATE</h3>
                  <p className="text-xs text-brand-100 opacity-90">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[15px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-stone-900 text-white rounded-br-sm"
                        : "bg-white text-stone-700 border border-stone-200 shadow-sm rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="markdown-body prose prose-sm prose-stone">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-sm px-5 py-4 shadow-sm flex items-center gap-2 text-stone-500">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm font-medium">Escribiendo...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-stone-100 shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-stone-100 border-none rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-stone-800 placeholder:text-stone-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:hover:bg-brand-600 shadow-sm"
                >
                  <Send size={16} className="-ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
