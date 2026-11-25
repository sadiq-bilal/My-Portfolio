export const siteConfig = {
  // Set to true to show the freelance section (the digital products work can go here).
  showFreelance: false,

  // 'coming-soon' | 'open' | 'unavailable'
  availability: 'coming-soon',

  // Public EmailJS values from .env. Without them the form opens the visitor's mail app.
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
}