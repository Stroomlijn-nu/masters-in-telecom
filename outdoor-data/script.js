// ===== STICKY HEADER =====
// Purpose: Voegt schaduw toe aan de header na scrollen
// Triggers: scroll event
var hdr=document.getElementById('hdr');
window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>10);});

// ===== MOBILE MENU TOGGLE =====
// Purpose: Opent en sluit het mobiele menu
// Triggers: klik op burger-knop of een menu-link
var burger=document.getElementById('burger'),mpanel=document.getElementById('mpanel');
burger.addEventListener('click',function(){mpanel.classList.toggle('open');});
document.getElementById('msubbtn').addEventListener('click',function(){document.getElementById('msublist').classList.toggle('open');});
mpanel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mpanel.classList.remove('open');});});

// ===== SCROLL REVEAL =====
// Purpose: Animeert elementen in beeld bij scrollen
// Triggers: IntersectionObserver zodra een element 12% zichtbaar is
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

// ===== FAQ ACCORDION =====
// Purpose: Klapt FAQ-items open en dicht
// Triggers: klik op een FAQ-vraag
document.querySelectorAll('.faq-item').forEach(function(item){item.querySelector('.faq-q').addEventListener('click',function(){item.classList.toggle('open');});});

// ===== REVIEW CAROUSEL =====
// Purpose: Beheert de testimonials-carrousel met dots en auto-play
// Triggers: klik op dots, automatisch elke 6 seconden
var track=document.getElementById('rvtrack'),dotsWrap=document.getElementById('rvdots'),slides=track.children.length,idx=0;
for(var i=0;i<slides;i++){(function(n){var b=document.createElement('button');b.setAttribute('aria-label','Review '+(n+1));if(n===0)b.className='active';b.addEventListener('click',function(){go(n);});dotsWrap.appendChild(b);})(i);}
function go(n){idx=n;track.style.transform='translateX(-'+(n*100)+'%)';var ds=dotsWrap.children;for(var j=0;j<ds.length;j++)ds[j].className=(j===n?'active':'');}
setInterval(function(){go((idx+1)%slides);},6000);

// ===== INFOGRAPHIC IMAGE FALLBACK =====
// Purpose: Verbergt de infographic kaart als het afbeeldingsbestand niet beschikbaar is,
//          zodat er geen kapotte placeholder zichtbaar is.
// Triggers: onerror event op de infographic afbeelding
document.getElementById('infographic-img').addEventListener('error', function(){
  var card = document.querySelector('.infographic-card');
  if(card){ card.style.display='none'; }
  // Verberg ook de sectie-header als de afbeelding ontbreekt
  var hdr = document.querySelector('#opstelling .infographic-header');
  if(hdr){ hdr.style.display='none'; }
});