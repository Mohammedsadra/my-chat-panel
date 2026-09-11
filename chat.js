export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-5.6-luna";
  if (!key) return res.status(500).json({ error: "OPENAI_API_KEY is not configured." });

  try {
    const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
    const input = messages
      .filter(m => m && (m.role === "user" || m.role === "assistant"))
      .map(m => ({ role: m.role, content: String(m.content || "") }));

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body: JSON.stringify({ model, input, max_output_tokens: 1000 })
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data?.error?.message || "OpenAI API error." });
    return res.status(200).json({ text: data.output_text || "" });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error." });
  }
}
