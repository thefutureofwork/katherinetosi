(function(){
  'use strict';
  var rail = document.querySelector('.rail');
  var nav = rail && rail.querySelector('nav');
  if (!rail || !nav) return;

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-label', 'Open navigation');
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML = '<span></span><span></span><span></span>';

  var style = document.createElement('style');
  style.textContent = '\n    .menu-toggle{display:none;background:transparent;border:1.5px solid var(--ink);width:42px;height:36px;padding:7px;cursor:pointer;flex:0 0 auto}\n    .menu-toggle span{display:block;height:2px;background:var(--ink);margin:4px 0;transition:transform .2s ease,opacity .2s ease}\n    .rail.mobile-open nav{display:flex;position:absolute;top:54px;left:0;right:0;flex-direction:column;gap:0;padding:10px 20px 14px;background:rgba(220,208,182,.98);border-bottom:1px solid rgba(23,19,15,.16)}\n    .rail.mobile-open nav a{padding:9px 0}\n    @media(max-width:780px){.menu-toggle{display:block}.rail-in{position:relative}.rail .tag{margin-left:auto}.rail.mobile-open .menu-toggle span:nth-child(1){transform:translateY(6px) rotate(45deg)}.rail.mobile-open .menu-toggle span:nth-child(2){opacity:0}.rail.mobile-open .menu-toggle span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}}\n  ';
  document.head.appendChild(style);
  rail.querySelector('.rail-in').insertBefore(button, nav);

  function close(){
    rail.classList.remove('mobile-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
  }
  button.addEventListener('click', function(){
    var open = rail.classList.toggle('mobile-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.addEventListener('click', close);
  window.addEventListener('resize', function(){ if (window.innerWidth > 780) close(); });
})();
