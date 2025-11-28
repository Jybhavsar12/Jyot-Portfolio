export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`
    window.CONFIG = {
      EMAILJS_PUBLIC_KEY: '${process.env.VITE_EMAILJS_PUBLIC_KEY || ''}',
      EMAILJS_SERVICE_ID: '${process.env.VITE_EMAILJS_SERVICE_ID || ''}',
      EMAILJS_TEMPLATE_ID: '${process.env.VITE_EMAILJS_TEMPLATE_ID || ''}'
    };
  `);
}