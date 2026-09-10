(function(){
  var css=document.createElement('style');
  css.textContent='.burger{display:none;background:none;border:none;cursor:pointer;padding:6px;flex-direction:column;gap:5px}.burger span{display:block;width:22px;height:2px;background:var(--ink,#17130F);transition:transform .2s,opacity .2s}.burger.active span:nth-child(1){transform:translateY(7px) rotate(45deg)}.burger.active span:nth-child(2){opacity:0}.burger.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}.mob-nav{display:none;position:absolute;top:54px;left:0;right:0;background:rgba(220,208,182,.98);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(23,19,15,.16);flex-direction:column;padding:16px clamp(20px,5vw,64px) 24px;gap:14px;z-index:39}.mob-nav a{text-decoration:none;color:#372E25;font-size:14px;padding:8px 0;border-bottom:1px solid rgba(23,19,15,.1)}.mob-nav a:hover{color:#7A2704}.mob-nav.open{display:flex}@media(max-width:780px){.burger{display:flex}}';
  document.head.appendChild(css);
  var rail=document.querySelector('.rail-in');
  if(!rail)return;
  var tag=rail.querySelector('.tag');
  var btn=document.createElement('button');
  btn.className='burger';
  btn.setAttribute('aria-label','Menu');
  btn.innerHTML='<span></span><span></span><span></span>';
  rail.insertBefore(btn,tag);
  var nav=document.createElement('nav');
  nav.className='mob-nav mono';
  nav.innerHTML='<a href="index.html">Home</a><a href="practice.html">Practice</a><a href="marks.html">Marks</a><a href="evidence.html">Student Work</a><a href="index.html#credentials">Credentials</a><a href="index.html#contact">Contact</a>';
  rail.parentElement.appendChild(nav);
  btn.addEventListener('click',function(){nav.classList.toggle('open');btn.classList.toggle('active')});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.classList.remove('active')})});
})();