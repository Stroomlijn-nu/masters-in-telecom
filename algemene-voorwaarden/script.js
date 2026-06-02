window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    ad_storage:            'denied',
    analytics_storage:     'denied',
    ad_user_data:          'denied',
    ad_personalization:    'denied',
    wait_for_update:       500
  });

gtag('js', new Date());
  gtag('config', 'G-STY5S3NRKH', { anonymize_ip: true });

(function() {
  var STORAGE_KEY = 'mit_cookie_consent';
  var EXPIRY_DAYS = 365;
  function setConsent(analytics) {
    gtag('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied' });
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + EXPIRY_DAYS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: analytics, timestamp: Date.now(), expiry: expiry.toISOString() }));
  }
  function hideBanner() { var b = document.getElementById('mit-cookie-banner'); if (b) b.style.display = 'none'; }
  function showBanner() { var b = document.getElementById('mit-cookie-banner'); if (b) b.style.display = 'flex'; }
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      var data = JSON.parse(stored);
      if (data.expiry && new Date(data.expiry) > new Date()) { setConsent(data.analytics); document.addEventListener('DOMContentLoaded', hideBanner); return; }
    } catch(e) {}
  }
  document.addEventListener('DOMContentLoaded', function() {
    showBanner();
    document.getElementById('mit-accept-all').addEventListener('click', function() { setConsent(true); hideBanner(); });
    document.getElementById('mit-accept-essential').addEventListener('click', function() { setConsent(false); hideBanner(); });
  });
})();

// Header scroll
var hdr=document.getElementById('hdr');
window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>10);});
// Mobile menu
var burger=document.getElementById('burger'),mpanel=document.getElementById('mpanel');
burger.addEventListener('click',function(){mpanel.classList.toggle('open');});
document.getElementById('msubbtn').addEventListener('click',function(){document.getElementById('msublist').classList.toggle('open');});
mpanel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mpanel.classList.remove('open');});});