// ===== HEADER SCROLL SHADOW =====
// Purpose: Adds a subtle shadow to the header when the user scrolls down
var hdr=document.getElementById('hdr');
window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>10);});

// ===== MOBILE BURGER MENU =====
// Purpose: Toggles the mobile navigation panel open/closed
var burger=document.getElementById('burger'),mpanel=document.getElementById('mpanel');
burger.addEventListener('click',function(){mpanel.classList.toggle('open');});
document.getElementById('msubbtn').addEventListener('click',function(){document.getElementById('msublist').classList.toggle('open');});
mpanel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mpanel.classList.remove('open');});});

// ===== SCROLL REVEAL =====
// Purpose: Animates elements into view as the user scrolls down
// Triggers: IntersectionObserver fires when element enters viewport
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

// ===== REVIEW CAROUSEL =====
// Purpose: Rotates testimonial slides and syncs dot navigation
// Triggers: Auto-advances every 6 seconds; also responds to dot clicks
var track=document.getElementById('rvtrack'),dotsWrap=document.getElementById('rvdots'),slides=track.children.length,idx=0;
for(var i=0;i<slides;i++){(function(n){var b=document.createElement('button');b.setAttribute('aria-label','Review '+(n+1));if(n===0)b.className='active';b.addEventListener('click',function(){go(n);});dotsWrap.appendChild(b);})(i);}
function go(n){idx=n;track.style.transform='translateX(-'+(n*100)+'%)';var ds=dotsWrap.children;for(var j=0;j<ds.length;j++)ds[j].className=(j===n?'active':'');}
setInterval(function(){go((idx+1)%slides);},6000);