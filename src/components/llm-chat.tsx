"use client";

import { useChat } from "@/hooks/useChat";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function LLMChat() {
  const { messages, loading, send, stop } = useChat([
    { role: "system", content: "You are a helpful tutor." },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="h-64 overflow-y-auto rounded-md border p-4 text-left">
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <p
              key={i}
              className={`mb-2 ${m.role === "user" ? "font-semibold" : ""}`}
            >
              {m.role === "user" ? "You: " : "AI: "}
              {m.content}
            </p>
          ))}
        {loading && <p className="italic text-muted-foreground">Typing…</p>}
      </div>

      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        placeholder="Ask a question…"
      />
      <div className="flex gap-2">
        <Button
          disabled={!input.trim() || loading}
          onClick={() => {
            send(input.trim());
            setInput("");
          }}
        >
          Send
        </Button>
        {loading && (
          <Button variant="outline" onClick={stop}>
            Stop
          </Button>
        )}
      </div>
    </div>
  );
}
