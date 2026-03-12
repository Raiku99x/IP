// Simple in-memory rate limiter
// Resets on server restart (fine for Vercel serverless — each instance has its own memory)
const rateLimitMap = new Map();

const RATE_LIMIT = 20;        // max requests per window
const WINDOW_MS = 60 * 1000; // 1 minute window

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // First request or window expired — reset
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

// Clean up old entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.windowStart > WINDOW_MS * 2) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Only allow requests from your own domain
  const origin = req.headers['origin'] || '';
  const allowedOrigins = [
    'https://slytherinclassroomstudy-practice-pa.vercel.app',
    'http://localhost:3000',
  ];
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Rate limit by IP
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please slow down.' });
  }

  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  // Sanity cap — prevent huge prompt abuse
  if (prompt.length > 2000) {
    return res.status(400).json({ error: 'Prompt too long' });
  }

  // No API key — return fallback signal so client uses explanation field
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(503).json({ error: 'AI explanations not available right now.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text = (data.content || [])
      .map(b => b.type === 'text' ? b.text : '')
      .join('')
      .trim();

    return res.status(200).json({ text });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
