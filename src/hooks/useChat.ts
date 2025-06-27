import { useState, useRef } from "react";

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export function useChat(initialMessages: ChatMessage[] = []) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function send(userContent: string) {
    setLoading(true);
    abortRef.current = new AbortController();

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userContent },
    ];
    setMessages(newMessages);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
      signal: abortRef.current.signal,
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let assistant = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistant += decoder.decode(value);
      setMessages([...newMessages, { role: "assistant", content: assistant }]);
    }

    setLoading(false);
  }

  function stop() {
    abortRef.current?.abort();
    setLoading(false);
  }

  return { messages, loading, send, stop };
}
