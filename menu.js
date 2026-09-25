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

(function(){
  'use strict';

  var role = document.querySelector('.hero .role');
  if (role) role.textContent = 'Senior academic leader for AI-enabled teaching, student success, and inclusive curriculum.';

  var heroCta = document.querySelector('.hero .btn.solid');
  if (heroCta) {
    heroCta.textContent = 'Hire me to build your academic program, student-success system, or AI strategy.';
    heroCta.setAttribute('href', '#contact');
  }

  var footerTitle = document.querySelector('footer h2');
  if (footerTitle) footerTitle.textContent = 'Hire me to build your academic program, student-success system, or AI strategy.';

  var credentials = document.querySelector('#credentials');
  var creds = credentials && credentials.querySelector('.creds');
  if (!credentials || !creds || creds.dataset.reframed) return;
  creds.dataset.reframed = 'true';

  var tail = Array.prototype.slice.call(creds.children, 2).map(function(el){ return el.outerHTML; }).join('');
  creds.innerHTML = '\n    <div class="rev in featured-credentials">\n      <span class="mono" style="color:var(--ink-soft);display:block;margin-bottom:14px">Featured credentials</span>\n      <ul class="cl">\n        <li><div class="t">National Professional Qualification for Headship</div><div class="s">UCL Institute of Education &middot; in progress, expected May 2027</div></li>\n        <li><div class="t">AI and Academic Integrity</div><div class="s">NPQH implementation project &middot; leadership, policy, and responsible AI</div></li>\n        <li><div class="t">English Language Arts Teaching License, Grades 7&ndash;12</div><div class="s">State of Vermont &middot; valid through June 2029</div></li>\n        <li><div class="t">PGCert, Inclusion and Special Needs (SENCO)</div><div class="s">University of Wolverhampton &middot; 2014&ndash;2015</div></li>\n        <li><div class="t">Experiential Learning Curriculum Design Fellowship</div><div class="s">Center for Teaching and Learning, NYU Shanghai &middot; Fall 2023</div></li>\n      </ul>\n    </div>\n    <div class="rev in full-credentials">\n      <span class="mono" style="color:var(--ink-soft);display:block;margin-bottom:14px">The complete record</span>\n      <details class="full-quals">\n        <summary>View full qualifications</summary>\n        <div class="full-qual-body">\n          <h3>Education</h3>\n          <ul class="cl">\n            <li><div class="t">National Professional Qualification for Headship</div><div class="s">UCL Institute of Education &middot; in progress, expected May 2027</div></li>\n            <li><div class="t">PGCert, Inclusion and Special Needs (SENCO)</div><div class="s">University of Wolverhampton &middot; 2014&ndash;2015</div></li>\n            <li><div class="t">MA, TESOL / Applied Linguistics, with distinction</div><div class="s">University of New South Wales, Sydney &middot; 2002&ndash;2004</div></li>\n            <li><div class="t">BA, Literary and Cultural Studies; Creative Writing and Composition</div><div class="s">University of Vermont &middot; minor in German &middot; 1987&ndash;1992</div></li>\n          </ul>\n          <h3>Licensure and professional development</h3>\n          <ul class="cl">\n            <li><div class="t">School Leadership Licensure Assessment (SLLA 6990)</div><div class="s">ETS &middot; passed, score 164 &middot; Aug 2025</div></li>\n            <li><div class="t">Designated Safeguarding Lead, Level 4</div><div class="s">Caredemy, UK CPD certified &middot; 2025&ndash;2027</div></li>\n            <li><div class="t">Generative AI in Education</div><div class="s">University of Glasgow &middot; 2026</div></li>\n            <li><div class="t">The Age of Sustainable Development (ASD001)</div><div class="s">SDG Academy / EdX &middot; 2019 &middot; Verified Certificate</div></li>\n            <li><div class="t">Diversity and Inclusion in the Workplace</div><div class="s">ESSEC Business School / Coursera &middot; Jun 2023</div></li>\n            <li><div class="t">Compass Education Sustainability Practitioners</div><div class="s">Licensed Tutor</div></li>\n            <li><div class="t">IEPs: Documentation and Implementation for Teachers</div><div class="s">Professional Learning Board &middot; Oct 2022 &middot; 5 hours</div></li>\n            <li><div class="t">Differentiation for Gifted Learners in the Classroom</div><div class="s">Professional Learning Board &middot; Oct 2022 &middot; 5 hours</div></li>\n            <li><div class="t">Cognitive Skills: Understanding Learning Challenges</div><div class="s">Professional Learning Board &middot; Oct 2022 &middot; 5 hours</div></li>\n            <li><div class="t">Certified Distance Education Instructor</div><div class="s">International Distance Education Certification Center &middot; Apr 2018 &middot; 20 hours</div></li>\n            <li><div class="t">Project Management Professional (PMP) Training</div><div class="s">LearnSmart / PMI &middot; Jul 2017 &middot; 35 hours</div></li>\n          </ul>\n        </div>\n      </details>\n    </div>' + tail;

  var extraStyle = document.createElement('style');
  extraStyle.textContent = '\n    .hero .role{max-width:31ch;font-size:clamp(20px,2.25vw,28px);line-height:1.2}\n    .hero .btn.solid{max-width:31ch;text-align:left}\n    footer h2{max-width:22ch}\n    .full-quals{border-top:1.5px solid var(--ink)}\n    .full-quals summary{cursor:pointer;list-style:none;padding:17px 0;border-bottom:1px solid rgba(23,19,15,.2);font-family:"Bricolage Grotesque",sans-serif;font-size:18px;font-weight:700;color:var(--amber-text)}\n    .full-quals summary::-webkit-details-marker{display:none}\n    .full-quals summary::after{content:"+";float:right;font-family:"Sometype Mono",monospace;font-size:20px;font-weight:400}\n    .full-quals[open] summary::after{content:"−"}\n    .full-qual-body{padding-top:10px}\n    .full-qual-body h3{margin:22px 0 8px;font-family:"Bricolage Grotesque",sans-serif;font-size:17px;line-height:1.2}\n    .full-qual-body .cl{border-top:0}\n    .full-qual-body .cl li{padding:11px 0}\n    @media(max-width:820px){.hero .btn.solid{max-width:100%}}\n  ';
  document.head.appendChild(extraStyle);
})();