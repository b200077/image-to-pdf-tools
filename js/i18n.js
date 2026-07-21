// 1. 定義全站翻譯字典
const translations = {
  zh: {
    // 通用 / 選單
    nav_home: "首頁",
    btn_lang: "English",
    
    // index.html 專用
    main_title: "🔒 極速本地隱私工具箱",
    main_subtitle: "100% 本地運算、斷網可用",
    
    // video-tool.html 專用
    video_title: "🎥 本地影音轉換與剪輯工具",
    
    // excel-tool.html 專用
    excel_title: "📊 Excel 轉換器 (CSV/JSON)",
  },
  en: {
    // General / Navbar
    nav_home: "Home",
    btn_lang: "繁體中文",
    
    // index.html
    main_title: "🔒 Local Privacy Toolkits",
    main_subtitle: "100% Client-Side Processing & Offline Ready",
    
    // video-tool.html
    video_title: "🎥 Local Video Converter & Trimmer",
    
    // excel-tool.html
    excel_title: "📊 Excel Converter (CSV/JSON)",
  }
};

// 2. 取得目前語言（優先使用 localStorage，次之根據瀏覽器預設）
let currentLang = localStorage.getItem('app_lang') || 
                  (navigator.language.startsWith('en') ? 'en' : 'zh');

// 3. 更新 UI 文字的函式
function updateUI() {
  // 搜尋所有帶有 data-i18n 屬性的 HTML 標籤
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // 更新切換按鈕的顯示文字
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = translations[currentLang].btn_lang;

  // 儲存語言設定
  localStorage.setItem('app_lang', currentLang);
}

// 4. 切換語言
function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  updateUI();
}

// 5. 當 DOM 載入完畢後自動執行一次
document.addEventListener('DOMContentLoaded', updateUI);