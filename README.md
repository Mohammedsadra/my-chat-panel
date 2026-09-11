# OpenAI Chat Panel — Vercel + Render

## Vercel
1. این پوشه را در GitHub قرار بده.
2. در Vercel پروژه GitHub را Import کن.
3. Environment Variables:
   - `OPENAI_API_KEY` = کلید جدید API
   - `OPENAI_MODEL` = مدل موردنظر (اختیاری)
4. Deploy.
Vercel از `api/chat.js` به‌عنوان Serverless Function استفاده می‌کند.

## Render
1. همین Repository را در Render به‌صورت Web Service بساز.
2. Build Command: `npm install`
3. Start Command: `npm start`
4. Environment Variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL` (اختیاری)
Render از `server.js` استفاده می‌کند.

## امنیت
کلید API را در GitHub، HTML یا JavaScript مرورگر قرار نده. فقط در Environment Variables سرویس قرار بده.
