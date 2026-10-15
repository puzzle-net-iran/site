
/* ═══════════════ جدول فکری + معمای طلسم (۱۰ طلسم، تایمر ۲۰′، چرخش ۱۰′) ═══════════════ */
(function(){
  const grid=$('ptableGrid'), info=$('elInfo'), slots=$('slots'), bar=$('spellbar');
  const nameEl=$('spellName'), riddle=$('riddle');
  const startBtn=$('startBtn'), hintBtn=$('hintBtn'), timerEl=$('timer'), timeLeft=$('timeLeft');
  const hintBox=$('hintBox'), hbText=$('hbText'), hbCount=$('hbCount');
  const colOf={}; DOMAINS.forEach((d,i)=>colOf[d.id]=i+1);

  const TOTAL = 20*60;   // کل مهلت: ۲۰ دقیقه
  const ROT   = 10*60;   // چرخش طلسم: هر ۱۰ دقیقه
  let active=false, started=0, picked=[], hints=0, spellIdx=0, tick=null, solved=false;
  let elByName={};

  // ── ساخت جدول یک‌بار ──
  DOMAINS.forEach((d,i)=>{
    grid.insertAdjacentHTML('beforeend',
      `<div class="pgroup" style="grid-column:${colOf[d.id]};grid-row:1">
         <b style="color:${d.color}">گروه ${fa(i+1)}</b>${d.name}</div>`);
  });
  const perDom={};
  SERVICES.forEach((sv,i)=>{
    perDom[sv.d]=(perDom[sv.d]||0)+1;
    grid.insertAdjacentHTML('beforeend',
      `<button class="el" data-i="${i}" data-name="${sv.s}"
        style="--c:${DMAP[sv.d].color};grid-column:${colOf[sv.d]};grid-row:${perDom[sv.d]+1}">
        <span class="z">${fa(i+1)}</span>
        <span class="sym">${SYM[i]}</span>
        <span class="nm">${sv.s}</span>
        <span class="rune-badge"></span>
      </button>`);
  });
  grid.querySelectorAll('.el').forEach(el=>{ elByName[el.dataset.name]=el; });

  // شش خانه‌ی نشان
  for(let k=0;k<6;k++) slots.insertAdjacentHTML('beforeend','<span class="slot">·</span>');
  const slotEls=[...slots.children];

  // ── انتخاب طلسم بر اساس زمان سپری‌شده (۰ یا ۱ در بازه‌ی ۲۰ دقیقه‌ای) ──
  function spellForElapsed(el){
    // در طول ۲۰ دقیقه دو پنجره‌ی ۱۰ دقیقه‌ای داریم؛ برای تنوع بیشتر،
    // اندیس شروع را با ثانیه‌ی آغاز بازی قاطی می‌کنیم تا هر بار متفاوت شود.
    const step=Math.min(1,Math.floor(el/ROT));
    return (spellBase+step)%SPELLBOOK.length;
  }
  let spellBase=0;

  function markRunes(){
    const sp=SPELLBOOK[spellIdx];
    grid.querySelectorAll('.el').forEach(el=>{
      el.classList.remove('rune'); el.removeAttribute('data-rune');
      el.querySelector('.rune-badge').textContent='';
    });
    sp.keys.forEach((nm,pos)=>{
      const el=elByName[nm]; if(!el) return;
      el.classList.add('rune'); el.setAttribute('data-rune','◆');
      el.querySelector('.rune-badge').textContent='';
    });
    nameEl.textContent = `طلسم فعال: ${sp.w} (${sp.l})`;
  }

  function loadSpell(newIdx,keepPicks){
    const changed = newIdx!==spellIdx;
    spellIdx=newIdx;
    if(changed || !keepPicks){ picked=[]; resetSlots(); }
    markRunes();
    if(!solved){
      riddle.textContent = `${SPELLBOOK[spellIdx].t} — شش عنصر نشان‌دار (◆) را به ترتیب درست انتخاب کن`;
    }
  }

  function resetSlots(){
    slotEls.forEach(s=>{s.textContent='·';s.classList.remove('filled')});
    grid.querySelectorAll('.el.got').forEach(e=>e.classList.remove('got'));
  }

  function fmt(sec){
    sec=Math.max(0,sec);
    const m=Math.floor(sec/60), s=sec%60;
    return fa(String(m).padStart(2,'0')+':'+String(s).padStart(2,'0'));
  }

  function start(){
    active=true; solved=false; started=Date.now(); hints=0;
    // پایه‌ی طلسم را بر اساس لحظه‌ی شروع تصادفی می‌کنیم تا هر جلسه متفاوت باشد
    spellBase=(new Date().getMinutes()+new Date().getSeconds())%SPELLBOOK.length;
    spellIdx=spellBase;
    startBtn.hidden=true; hintBtn.hidden=false; timerEl.hidden=false; resetHints();
    timerEl.classList.remove('warn','crit');
    loadSpell(spellBase,false);
    clearInterval(tick); tick=setInterval(loop,1000); loop();
  }

  function loop(){
    const el=Math.floor((Date.now()-started)/1000);
    const left=TOTAL-el;
    timeLeft.textContent=fmt(left);
    timerEl.classList.toggle('warn', left<=300 && left>60);
    timerEl.classList.toggle('crit', left<=60);
    // چرخش طلسم
    const want=spellForElapsed(el);
    if(want!==spellIdx && !solved){
      loadSpell(want,false); resetHints();
      riddle.textContent=`⏳ طلسم عوض شد! اکنون «${SPELLBOOK[spellIdx].w}» — سرنخ‌های تازه در راه است`;
    }
    if(left<=0) timeUp();
  }

  function timeUp(){
    clearInterval(tick); active=false;
    riddle.textContent='⌛ زمان معما تمام شد. برای تلاش دوباره، «شروع دوباره» را بزن.';
    nameEl.textContent='طلسم بسته شد';
    startBtn.hidden=false; startBtn.textContent='🔁 شروع دوباره';
    hintBtn.hidden=true; timerEl.classList.add('crit'); hintBox.hidden=true;
    grid.querySelectorAll('.el.rune').forEach(el=>{el.classList.remove('rune');el.removeAttribute('data-rune');});
    resetSlots(); picked=[];
  }

  function win(){
    solved=true; active=false; clearInterval(tick);
    const sp=SPELLBOOK[spellIdx];
    riddle.textContent=`✔ طلسم «${sp.w}» کامل شد!`;
    nameEl.textContent=`${sp.w} — آزاد شد`;
    timerEl.classList.remove('crit','warn');
    startBtn.hidden=false; startBtn.textContent='✨ طلسم تازه';
    hintBtn.hidden=true; hintBox.hidden=true;
    const code=makeCode(sp);
    setTimeout(()=>openPrize(sp,code),420);
  }

  // ── انتخاب عناصر ──
  grid.addEventListener('click',e=>{
    const el=e.target.closest('.el'); if(!el) return;
    const i=+el.dataset.i, sv=SERVICES[i], d=DMAP[sv.d];
    const isRune=el.classList.contains('rune');
    info.innerHTML=
      `<h4>${fa(i+1)} · ${SYM[i]} — ${sv.t}</h4>
       <div class="meta" style="color:${d.color}">${d.name}${isRune?' · این عنصر بخشی از طلسم فعال است':''}</div>
       <p>${sv.p}</p>`;

    if(!active || solved) return;
    if(!isRune) return;
    if(el.classList.contains('got')) return;

    const sp=SPELLBOOK[spellIdx];
    const expected=sp.keys[picked.length];
    if(sv.s===expected){
      picked.push(sv.s); el.classList.add('got');
      const slot=slotEls[picked.length-1]; slot.textContent=fa(picked.length); slot.classList.add('filled');
      riddle.textContent = picked.length===6 ? 'در حال گشودن…' : `${fa(picked.length)} از ۶ تکه`;
      if(picked.length===6) win();
    }else{
      bar.classList.add('wrong');
      riddle.textContent='ترتیب اشتباه بود — طلسم خنثی شد. از اول شروع کن.';
      setTimeout(()=>bar.classList.remove('wrong'),480);
      picked=[]; resetSlots();
    }
  });

  function showHint(text, n, total){
    hintBox.hidden=false;
    hbCount.textContent=`سرنخِ جادویی ${fa(n)} از ${fa(total)}`;
    hbText.innerHTML=text.replace(/\*(.+?)\*/g,'<em>$1</em>');
    hintBox.classList.remove('rv');
    hintBox.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
  function resetHints(){
    hints=0; hintBox.hidden=true; hbText.textContent='';
    hintBtn.disabled=false; hintBtn.textContent='🔮 سرنخِ جادویی';
  }
  hintBtn.addEventListener('click',()=>{
    if(!active||solved) return;
    const sp=SPELLBOOK[spellIdx];
    const hs=sp.hints||[];
    if(hints<hs.length){
      showHint(hs[hints], hints+1, hs.length);
      hints++;
      hintBtn.textContent = hints<hs.length ? `🔮 سرنخِ بعدی (${fa(hints+1)} از ${fa(hs.length)})` : '🔮 سرنخ‌ها تمام شد';
      if(hints>=hs.length) hintBtn.disabled=true;
    }
  });

  startBtn.addEventListener('click',start);

  // ── کد یکتای زمان‌محور ──
  function makeCode(sp){
    const d=new Date();
    const p2=n=>String(n).padStart(2,'0');
    // بخش زمانی: HHMMSS + روز، بخش تصادفی: ۴ کاراکتر
    const stamp = p2(d.getHours())+p2(d.getMinutes())+p2(d.getSeconds());
    const day = p2(d.getDate());
    const rnd = Array.from(crypto.getRandomValues(new Uint32Array(2)))
      .map(x=>x.toString(36)).join('').slice(0,5).toUpperCase();
    const jd = d.toLocaleDateString('fa-IR-u-nu-latn').replace(/\//g,'');
    return `PZL-${sp.l.split(' ')[0].slice(0,4).toUpperCase()}-${stamp}${day}-${rnd}`;
  }

  // ── مودال جایزه ──
  function openPrize(sp,code){
    $('prizeSpell').textContent=`${sp.w} · ${sp.l}`;
    $('prizeCode').textContent=code;
    $('prizeTg').href=$('tgBot').href;
    $('prize').classList.add('on');
    if(window.sparkBurst) sparkBurst();
  }
  $('copyCode').addEventListener('click',async e=>{
    try{ await navigator.clipboard.writeText($('prizeCode').textContent); e.target.textContent='کد کپی شد ✓'; }
    catch{ e.target.textContent=$('prizeCode').textContent; }
  });
  $('prizeClose').addEventListener('click',()=>$('prize').classList.remove('on'));
  $('prize').addEventListener('click',e=>{ if(e.target.id==='prize') $('prize').classList.remove('on'); });
})();

/* ═══════════════ ایستراگ: طلسم هنگام کپی یا ذخیره ═══════════════ */
const SPELLS=[
  ['آلوهومورا','ALOHOMORA'],['اکسپکتو پاترونوم','EXPECTO PATRONUM'],['وینگاردیوم لویوسا','WINGARDIUM LEVIOSA'],
  ['لوموس','LUMOS'],['آکسیو','ACCIO'],['رِپارو','REPARO'],['اکسپلیارموس','EXPELLIARMUS'],
  ['پروتگو','PROTEGO'],['آپاراسیوم','APARECIUM'],['ریدیکولوس','RIDDIKULUS'],['نوکس','NOX'],
  ['اِوانِسکو','EVANESCO'],['پریوری اینکانتاتم','PRIORI INCANTATEM'],['فینیته اینکانتاتم','FINITE INCANTATEM']
];
(function(){
  const magic=$('magic'); let n=0,timer=null,last=0;
  function cast(){
    const now=Date.now(); if(now-last<1200) return; last=now; n++;
    const sp=SPELLS[Math.floor(Math.random()*SPELLS.length)];
    $('spellWord').textContent=sp[0]; $('spellLat').textContent=sp[1];
    $('spellSig').textContent = n>=5
      ? `طلسم پازل‌نت · ${fa(n)}مین بار! انگار واقعاً این پروپوزال را دوست داری`
      : 'طلسم پازل‌نت · نسخه‌ی اصلی این سند نزد ماست';
    magic.classList.add('on'); if(window.sparkBurst) sparkBurst();
    clearTimeout(timer); timer=setTimeout(close,6000);
  }
  function close(){ magic.classList.remove('on'); clearTimeout(timer); }
  window.__cast=cast;
  $('spellClose').onclick=close;
  magic.addEventListener('click',e=>{ if(e.target===magic) close(); });
  addEventListener('keydown',e=>{ if(e.key==='Escape'){close(); $('prize').classList.remove('on');} });
})();

/* ═══════════════ ذرات جشن ═══════════════ */
(function(){
  const cv=$('sparks'), ctx=cv.getContext('2d');
  let ps=[],running=false;
  const size=()=>{cv.width=innerWidth;cv.height=innerHeight;};
  addEventListener('resize',size); size();
  window.sparkBurst=function(){
    if(REDUCE) return;
    const cx=innerWidth/2, cy=innerHeight/2;
    for(let i=0;i<95;i++){
      const a=Math.random()*6.283, sp=1.6+Math.random()*5.4;
      ps.push({x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-1.2,l:1,
        c:['#F2C14E','#FFF1C4','#E8455F','#7B5CFF','#2FD9C4'][Math.floor(Math.random()*5)]});
    }
    if(!running) loop();
  };
  function loop(){
    running=true;
    (function step(){
      ctx.clearRect(0,0,cv.width,cv.height);
      ctx.globalCompositeOperation='lighter';
      ps=ps.filter(p=>p.l>0);
      ps.forEach(p=>{ p.x+=p.vx;p.y+=p.vy;p.vy+=.07;p.vx*=.99;p.l-=.011;
        ctx.fillStyle=p.c; ctx.globalAlpha=Math.max(0,p.l);
        ctx.beginPath(); ctx.arc(p.x,p.y,2.3*p.l+.4,0,6.283); ctx.fill(); });
      ctx.globalAlpha=1; ctx.globalCompositeOperation='source-over';
      if(ps.length) requestAnimationFrame(step);
      else { ctx.clearRect(0,0,cv.width,cv.height); running=false; }
    })();
  }
})();

/* ═══════════════ فرم تماس ═══════════════
   ارسال بی‌سرور از طریق FormSubmit. کاربر هرگز وارد ایمیل خودش نمی‌شود.
   ── فعال‌سازی یک‌باره (فقط خودت، یک بار) ──
   ۱) یک بار فرم را پر کن و ارسال بزن.
   ۲) FormSubmit یک ایمیل تأیید به grouppaz@gmail.com می‌فرستد؛ روی دکمه‌ی تأیید داخلش کلیک کن.
   ۳) از آن پس همه‌ی پیام‌ها مستقیم و بی‌صدا به همان جیمیل می‌رسند و دیگر تأییدی لازم نیست.
   اگر خواستی ایمیلت در کد دیده نشود، به formsubmit.co برو، آدرس را ثبت کن،
   کد هش‌شده‌ای می‌گیری؛ فقط FS_ENDPOINT پایین را با آن هش عوض کن. */
(function(){
  const FS_ENDPOINT = 'https://formsubmit.co/ajax/grouppaz@gmail.com';
  const btn=$('f_send'), out=$('formMsg');
  const g=id=>$(id).value.trim();

  async function send(){
    if($('f_hp').value) return;                  // تله‌ی ربات
    if(!g('f_name')||!g('f_org')||!g('f_role')||!g('f_phone')){
      out.className='err'; out.textContent='لطفاً نام، نام مجموعه، سِمَت و شماره تماس را کامل کنید.'; return;
    }
    out.className=''; out.textContent='در حال ارسال…'; btn.style.opacity=.6; btn.disabled=true;

    const payload={
      _subject:'درخواست همکاری جدید — پروپوزال پازل‌نت',
      _template:'table',
      _captcha:'false',
      'نام و نام خانوادگی':g('f_name'),
      'مجموعه / هولدینگ':g('f_org'),
      'سِمَت / حوزه‌ی کاری':g('f_role'),
      'شماره تماس':g('f_phone'),
      'ایمیل':g('f_email')||'—',
      'حوزه‌ی موردنیاز':g('f_need')||'—',
      'شرح نیاز':g('f_msg')||'—',
      'شناسه سند':DOC.code,
      'زمان ثبت':new Date().toLocaleString('fa-IR')
    };

    let ok=false;
    try{
      const r=await fetch(FS_ENDPOINT,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(payload)
      });
      const data=await r.json().catch(()=>({}));
      // FormSubmit با success:"true" پاسخ می‌دهد. حالت "تأیید لازم است" هم موفق شمرده می‌شود
      ok = r.ok && (data.success===true || data.success==='true' ||
                    /activat|confirm/i.test(data.message||''));
    }catch(e){ ok=false; }

    if(ok){
      out.className='ok';
      out.textContent='درخواست شما با موفقیت ثبت شد. کارشناس پازل‌نت به‌زودی برای هماهنگی جلسه تماس می‌گیرد.';
      ['f_name','f_org','f_role','f_phone','f_email','f_msg'].forEach(i=>$(i).value='');
      $('f_need').selectedIndex=0;
    }else{
      // هیچ mailto و هیچ ورود به ایمیل کاربر — فقط ربات تلگرام به‌عنوان مسیر جایگزین
      out.className='err';
      out.innerHTML='ارسال از این مرورگر ممکن نشد. لطفاً از راه تلگرام پیام بدهید: '+
        `<a href="${$('tgBot').href}" target="_blank" rel="noopener" style="color:var(--gold)">ارسال پیام به ربات پازل‌نت</a>`;
    }
    btn.style.opacity=1; btn.disabled=false;
  }

  btn.addEventListener('click',send);
})();

