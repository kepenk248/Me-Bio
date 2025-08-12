// language.js
const translations = {
  en: {
    // Common terms
    "welcome": "Welcome",
    "join-group": "Join Group",
    "verified-account": "Verified Account",
    "continue-chat": "Continue to Chat",
    "download": "Download",
    "not-using": "Not using WhatsApp?",
    "watch-video": "Watch My Video",
    "join-telegram": "Join Telegram",
    "loading": "Loading...",
    "please-wait": "Please wait",
    "seconds": "seconds",
    
    // Page specific
    "telegram-title": "TELEGRAM PRO",
    "telegram-update": "🔥 EVERYDAY UPDATE 🔥",
    "telegram-content": "Stream + Download Viral Videos",
    "telegram-latest": "📽️ Latest Videos & Exclusive Content",
    
    "age-confirm": "Age Confirmation ❗",
    "age-warning": "This video contains mature content, Are you 18+ and want to continue?",
    "cancel": "Cancel",
    "continue": "Continue",
    
    "wait-next-image": "Wait for Next Image",
    "coming-soon": "We will present new images soon. ✨"
  },
  id: {
    // Common terms
    "welcome": "Selamat Datang",
    "join-group": "Gabung Grup",
    "verified-account": "Akun Terverifikasi",
    "continue-chat": "Lanjutkan Chat",
    "download": "Unduh",
    "not-using": "Belum menggunakan WhatsApp?",
    "watch-video": "Tonton Video Saya",
    "join-telegram": "Gabung Telegram",
    "loading": "Memuat...",
    "please-wait": "Harap tunggu",
    "seconds": "detik",
    
    // Page specific
    "telegram-title": "TELEGRAM PRO",
    "telegram-update": "🔥 UPDATE SETIAP HARI 🔥",
    "telegram-content": "Stream + Download Video Viral",
    "telegram-latest": "📽️ Video Terbaru & Konten Eksklusif",
    
    "age-confirm": "Konfirmasi Usia ❗",
    "age-warning": "Video ini berisi konten dewasa, Apakah Anda 18+ dan ingin melanjutkan?",
    "cancel": "Batal",
    "continue": "Lanjut",
    
    "wait-next-image": "Tunggu Gambar Selanjutnya",
    "coming-soon": "Kami akan segera hadirkan gambar terbaru. ✨"
  }
};

function applyTranslations(lang) {
  // Set HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update all title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('title', translations[lang][key]);
    }
  });
  
  // Update all placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = translations[browserLang] ? browserLang : 'en';
  applyTranslations(savedLang || defaultLang);
  
  // Add language switcher functionality
  document.querySelectorAll('.language-switcher').forEach(switcher => {
    switcher.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.dataset.lang;
        applyTranslations(lang);
      }
    });
  });
});