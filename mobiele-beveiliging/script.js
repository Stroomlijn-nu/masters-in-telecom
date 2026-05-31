var hdr=document.getElementById('hdr');
window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>10);});
var burger=document.getElementById('burger'),mpanel=document.getElementById('mpanel');
burger.addEventListener('click',function(){mpanel.classList.toggle('open');});
document.getElementById('msubbtn').addEventListener('click',function(){document.getElementById('msublist').classList.toggle('open');});
mpanel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mpanel.classList.remove('open');});});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
document.querySelectorAll('.faq-item').forEach(function(item){item.querySelector('.faq-q').addEventListener('click',function(){item.classList.toggle('open');});});
var track=document.getElementById('rvtrack'),dotsWrap=document.getElementById('rvdots'),slides=track.children.length,idx=0;
for(var i=0;i<slides;i++){(function(n){var b=document.createElement('button');if(n===0)b.className='active';b.addEventListener('click',function(){go(n);});dotsWrap.appendChild(b);})(i);}
function go(n){idx=n;track.style.transform='translateX(-'+(n*100)+'%)';var ds=dotsWrap.children;for(var j=0;j<ds.length;j++)ds[j].className=(j===n?'active':'');}
setInterval(function(){go((idx+1)%slides);},6000);