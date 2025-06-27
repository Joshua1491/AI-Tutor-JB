import { NextRequest } from "next/server";
import { openai } from "@/lib/openai";
import { z } from "zod";

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
});

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { messages } = bodySchema.parse(json);

  const stream = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    messages,
    max_tokens: 512,
    temperature: 0.7,
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const str = chunk.choices[0]?.delta?.content ?? "";
        const payload = encoder.encode(str);
        controller.enqueue(payload);
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
