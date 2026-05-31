(function(){try{
  var slug="mobiele-beveiliging";
  var SK='lp_access_'+slug;
  var map={access_token:'lp_pw_',allowlist_access_token:'lp_al_',pin_access_token:'lp_pin_',paywall_access_token:'lp_paid_'};
  var u=new URL(location.href);var found=null;var changed=false;
  Object.keys(map).forEach(function(p){var v=u.searchParams.get(p);if(v){found=v;try{localStorage.setItem(map[p]+slug,v);}catch(e){}u.searchParams.delete(p);changed=true;}});
  if(found){try{sessionStorage.setItem(SK,found);}catch(e){}}
  else{try{if(!sessionStorage.getItem(SK)){var t=localStorage.getItem('lp_pw_'+slug)||localStorage.getItem('lp_al_'+slug)||localStorage.getItem('lp_pin_'+slug)||localStorage.getItem('lp_paid_'+slug);if(t)sessionStorage.setItem(SK,t);}}catch(e){}}
  if(changed){try{history.replaceState(null,'',u.toString());}catch(e){}}

  // Auto-attach gate token to:
  //   1. sheet-rows writes (PATCH/POST/PUT/DELETE)
  //   2. LLM proxy calls (POST/GET) — /api/landing-pages/public/<slug>/llm/...
  //   3. landing-page LLM config probes (GET) — same prefix
  // So AI-generated pages don't have to know about the X-Landing-Page-Token header.
  function getTok(){try{return sessionStorage.getItem(SK)||localStorage.getItem('lp_pw_'+slug)||localStorage.getItem('lp_al_'+slug)||localStorage.getItem('lp_pin_'+slug)||localStorage.getItem('lp_paid_'+slug);}catch(e){return null;}}
  function needsToken(url,method){if(!url)return false;var s=String(url);var m=(method||'GET').toUpperCase();var isSheetWrite=(m==='POST'||m==='PATCH'||m==='PUT'||m==='DELETE')&&/\/sheet-rows(\/|$|\?)/.test(s);var isLlm=/\/api\/landing-pages\/public\/[^/]+\/(llm|llm-config)(\/|$|\?)/.test(s);return isSheetWrite||isLlm;}
  if(window.fetch){var _f=window.fetch;window.fetch=function(input,init){try{var url=typeof input==='string'?input:(input&&input.url)||'';var method=(init&&init.method)||(input&&input.method)||'GET';if(needsToken(url,method)){var tok=getTok();if(tok){init=init||{};var h=new Headers(init.headers||(typeof input!=='string'?input.headers:undefined)||{});if(!h.has('X-Landing-Page-Token'))h.set('X-Landing-Page-Token',tok);init.headers=h;}}}catch(e){}return _f.call(this,input,init);};}
  if(window.XMLHttpRequest){var _o=XMLHttpRequest.prototype.open;var _s=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(m,u){this.__lpM=m;this.__lpU=u;return _o.apply(this,arguments);};XMLHttpRequest.prototype.send=function(){try{if(needsToken(this.__lpU,this.__lpM)){var tok=getTok();if(tok)this.setRequestHeader('X-Landing-Page-Token',tok);}}catch(e){}return _s.apply(this,arguments);};}
}catch(e){}})();

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