!function(){
  let toast = null;
  function showCopyToast(){
    if(toast) return;
    toast = document.createElement('div');
    toast.textContent = 'Copy & paste is disabled.';
    toast.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1a1208;border:1px solid var(--gold-dim);color:var(--gold);font-family:var(--font-m);font-size:11px;letter-spacing:.06em;padding:10px 20px;border-radius:3px;z-index:999999;box-shadow:0 4px 20px rgba(0,0,0,.5);pointer-events:none;';
    document.body.appendChild(toast);
    setTimeout(()=>{toast&&toast.remove();toast=null;},2500);
  }
  ["copy","cut","paste"].forEach(e=>{
    document.addEventListener(e,ev=>{
      const t=document.activeElement?.tagName;
      if(t!=="INPUT" && document.activeElement?.id!=="custom-in"){
        ev.preventDefault(); showCopyToast();
      }
    },true);
  });
  document.addEventListener("contextmenu",e=>e.preventDefault(),true);
}();

  document.addEventListener('contextmenu', e => e.preventDefault(), true);

  const noop = () => {};
  try {
    ['log','warn','error','info','debug','table','dir'].forEach(m => {
      Object.defineProperty(console, m, { get: () => noop, set: () => {} });
    });
  } catch(_) {}

  let devOpen = false;
  setInterval(() => {
    const threshold = 160;
    const widthOpen  = window.outerWidth  - window.innerWidth  > threshold;
    const heightOpen = window.outerHeight - window.innerHeight > threshold;
    if ((widthOpen || heightOpen) && !devOpen) {
      devOpen = true;
    } else if (!(widthOpen || heightOpen)) {
      devOpen = false;
    }
  }, 1000);
})();

/* ===== SVG ICONS ===== */
const SVG_LAB=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4c0-1 .7-1.5 1.5-1.5S9 3 9 4v1H6V4z"/><path d="M9 4h9.5C19.3 4 20 4.7 20 5.5S19.3 7 18.5 7H9"/><path d="M9 4v14"/><path d="M9 18H5.5C4.7 18 4 18.7 4 19.5S4.7 21 5.5 21H18c1 0 1.5-.7 1.5-1.5V7"/><path d="M9 20.5c0 .3.2.5.5.5"/><path d="M5.5 21c-.8 0-1.5-.7-1.5-1.5V5.5C4 4.7 4.7 4 5.5 4"/><line x1="12" y1="9" x2="17" y2="9"/><line x1="12" y1="12" x2="17" y2="12"/><line x1="12" y1="15" x2="15" y2="15"/></svg>`;
const SVG_SNAKE=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-linecap="round"><path d="M7 8c0-2.2 1.8-4 4-4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4H9c-2.2 0-4 1.8-4 4s1.8 4 4 4h2c1 0 2-.3 2.7-1"/><circle cx="16.5" cy="7" r="1.2" fill="var(--violet)"/></svg>`;
const SVG_FORK=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="8" x2="7" y2="14"/><line x1="12" y1="8" x2="17" y2="14"/><line x1="7" y1="14" x2="7" y2="21"/><line x1="17" y1="14" x2="17" y2="21"/></svg>`;
const SVG_LIST=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-linecap="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4.5" cy="6" r="1.8" fill="var(--amethyst)" stroke="none"/><circle cx="4.5" cy="12" r="1.8" fill="var(--amethyst)" stroke="none"/><circle cx="4.5" cy="18" r="1.8" fill="var(--amethyst)" stroke="none"/></svg>`;
const SVG_DIAMOND=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-linejoin="round"><polygon points="12,2 22,12 12,22 2,12"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`;
const SVG_RINGS=`<svg width="20" height="18" viewBox="0 0 26 18" fill="none" stroke="var(--violet)" stroke-width="1.4"><circle cx="9" cy="9" r="7"/><circle cx="17" cy="9" r="7"/></svg>`;
const SVG_DEFAULT_QUIZ=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="var(--violet)"/></svg>`;
const QUIZ_ICONS={'quiz-pyreview-1':SVG_SNAKE,'quiz-controlflow-1':SVG_FORK,'quiz-lists-1':SVG_LIST,'quiz-tuples-1':SVG_DIAMOND,'quiz-sets-1':SVG_RINGS};


const RANKS=[
  {name:'Newbie II',     icon:'🐣', img:'rank-newbie.png',       exp:0},
  {name:'Newbie I',      icon:'🐣', img:'rank-newbie.png',       exp:200},
  {name:'Coder III',     icon:'💻', img:'rank-coder.png',        exp:500},
  {name:'Coder II',      icon:'💻', img:'rank-coder.png',        exp:1000},
  {name:'Coder I',       icon:'💻', img:'rank-coder.png',        exp:1800},
  {name:'Developer III', icon:'🚀', img:'rank-developer.png',    exp:2800},
  {name:'Developer II',  icon:'🚀', img:'rank-developer.png',    exp:4000},
  {name:'Developer I',   icon:'🚀', img:'rank-developer.png',    exp:5500},
  {name:'Legend IV',     icon:'👑', img:'rank-legend.png',       exp:6500},
  {name:'Legend III',    icon:'👑', img:'rank-legend.png',       exp:9000},
  {name:'Legend II',     icon:'👑', img:'rank-legend.png',       exp:13000},
  {name:'Legend I',      icon:'👑', img:'rank-legend.png',       exp:18000},
  {name:'Sys Architect', icon:'👾', img:'rank-sysarchitect.png', exp:25000},
];

function getRank(exp){
  let rank=RANKS[0];
  for(const r of RANKS){ if(exp>=r.exp) rank=r; }
  return rank;
}

function getNextRank(exp){
  for(const r of RANKS){ if(exp<r.exp) return r; }
  return null;
}

/* ===== CORE STATE ===== */
let DATA=null,QUIZDATA=null,pyodide=null,cm=null,activeProblem=null,activeQuiz=null;
const state={},quizState={};
const quizSettings={};
function getQSettings(id){
  if(!quizSettings[id]) quizSettings[id]={numQ:50,reveal:true,randomize:true};
  return quizSettings[id];
}
let openSettingsId=null;
let quizRevealMode=true;

/* ===== MOBILE STATE ===== */
const isMobile=()=>window.innerWidth<=700;
let mobActiveTab='code';
function showMobNav(show){
  const nav=document.getElementById('mob-editor-nav');
  if(!nav)return;
  nav.style.display=show?'flex':'none';
}

const $=id=>document.getElementById(id);
const gs=id=>{if(!state[id])state[id]={code:'',tcResults:null,submitted:false};return state[id];};

/* ===== DATA LOADING ===== */
async function loadJSON(){
  try{
    const [{data:labRows,error:labErr},{data:quizRows,error:quizErr}]=await Promise.all([
      sbClient.from('labs').select('data').eq('active',true).order('created_at'),
      sbClient.rpc('get_quizzes_safe')
    ]);
    if(labErr)throw new Error(labErr.message);
    if(quizErr)throw new Error(quizErr.message);
    const labs=(labRows||[]).map(r=>r.data);
    const quizzes=quizRows||[];
    DATA={course:{name:'BSCS 1B — Python Practice',instructor:'Self-Study'},labs};
    QUIZDATA={quizzes};
  }catch(e){alert('Could not load content.\n\n'+e.message);}
}

/* ===== PYTHON ===== */
async function initPy(){
  pyodide=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'});
  await pyodide.runPythonAsync('import sys,io,builtins');
}

async function runPy(code,inputLines){
  if(!pyodide)return{ok:false,error:'Python not ready.'};
  if(!code.trim())return{ok:false,error:'The scroll is empty!'};
  try{
    pyodide.globals.set('_il',inputLines);
    await pyodide.runPythonAsync(`
import sys,io,builtins
_lines=list(_il);_idx=0
def _inp(p=""):
  global _idx
  if _idx<len(_lines): v=_lines[_idx];_idx+=1;return str(v)
  return ""
builtins.input=_inp
sys.stdout=io.StringIO();sys.stderr=io.StringIO()
`);
    await pyodide.runPythonAsync(code);
    const raw=pyodide.runPython('sys.stdout.getvalue()');
    const lines=raw.split('\n');
    if(lines.length&&lines[lines.length-1]==='')lines.pop();
    return{ok:true,lines};
  }catch(e){
    const parts=(e.message||String(e)).split('\n').filter(l=>l.trim());
    return{ok:false,error:parts[parts.length-1]||String(e)};
  }
}

/* ===== CODEMIRROR ===== */
function initCM(){
  cm=CodeMirror($('cm-mount'),{
    mode:'python',theme:'sly',lineNumbers:true,
    indentUnit:4,tabSize:4,indentWithTabs:false,
    autoCloseBrackets:true,matchBrackets:true,
    placeholder:'# Scribe your code here\u2026',
    extraKeys:{
      'Tab':c=>{if(c.somethingSelected())c.indentSelection('add');else c.replaceSelection('    ','end','*');},
      'Shift-Tab':c=>c.indentSelection('subtract'),
      'Ctrl-Enter':()=>$('btn-run').click(),
      'Cmd-Enter':()=>$('btn-run').click(),
      // Block copy/paste/cut shortcuts in editor
      'Ctrl-C':()=>false,
      'Ctrl-V':()=>false,
      'Ctrl-X':()=>false,
      'Cmd-C':()=>false,
      'Cmd-V':()=>false,
      'Cmd-X':()=>false,
    }
  });
  cm.on('change',()=>{if(activeProblem)gs(activeProblem.id).code=cm.getValue();hideErr();});

  // Block paste event directly on CodeMirror's textarea
  cm.on('paste', () => false);

  // Also block on the underlying textarea element
  const cmTextarea = $('cm-mount').querySelector('textarea');
  if (cmTextarea) {
    cmTextarea.addEventListener('paste', e => e.preventDefault(), true);
    cmTextarea.addEventListener('copy', e => e.preventDefault(), true);
    cmTextarea.addEventListener('cut',  e => e.preventDefault(), true);
  }
}

/* ===== FULLSCREEN ===== */
function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen().catch(()=>{});
  } else {
    document.exitFullscreen().catch(()=>{});
  }
}
document.addEventListener('fullscreenchange',()=>{
  const fs=!!document.fullscreenElement;
  const enter=$('fs-icon-enter'),exit=$('fs-icon-exit');
  if(enter)enter.style.display=fs?'none':'block';
  if(exit)exit.style.display=fs?'block':'none';
});

function openLbModal(){
  // close dropdown
  document.getElementById('user-dropdown-btn')?.classList.remove('open');
  document.getElementById('user-dropdown-menu')?.classList.remove('open');
  document.getElementById('lb-modal-overlay').style.display='flex';
  loadLbModal();
}

function closeLbModal(){
  document.getElementById('lb-modal-overlay').style.display='none';
}

document.addEventListener('click',e=>{
  const overlay=document.getElementById('lb-modal-overlay');
  if(overlay&&e.target===overlay) closeLbModal();
});

async function loadLbModal(){
  const list=document.getElementById('lb-modal-list');
  list.innerHTML='<div style="font-family:var(--font-m);font-size:10px;color:var(--mist);padding:20px;text-align:center;">Summoning records…</div>';

  const[{data:profiles},{data:labSubs},{data:quizAttempts}]=await Promise.all([
    sbClient.from('profiles').select('id,exp').order('exp',{ascending:false}),
    sbClient.from('lab_submissions').select('user_id,score,passed'),
    sbClient.from('quiz_attempts').select('user_id,score,passed')
  ]);

  if(!profiles||!profiles.length){
    list.innerHTML='<div style="font-family:var(--font-m);font-size:10px;color:var(--mist);padding:20px;text-align:center;">No data yet.</div>';
    return;
  }

  const MEDALS=['🎖️','🥇','🥈','🥉'];
  const ROW_COLORS=['rgba(201,168,76,0.08)','rgba(220,220,220,0.06)','rgba(205,127,50,0.06)','rgba(205,127,50,0.04)'];
  const BORDER_COLORS=['var(--gold-dim)','rgba(180,180,180,0.3)','rgba(205,127,50,0.3)','rgba(205,127,50,0.2)'];

  list.innerHTML=profiles.map((p,i)=>{
    const isMe=currentUser&&p.id===currentUser.id;
    const rank=getRank(p.exp||0);
    const medal=i<4?MEDALS[i]:`<span style="font-size:10px;color:var(--mist);">#${i+1}</span>`;

    // Lab stats for this user
    const userLabs=(labSubs||[]).filter(s=>s.user_id===p.id);
    const labPassed=userLabs.filter(s=>s.passed).length;
    const labScore=userLabs.reduce((a,s)=>a+(s.score||0),0);

    // Quiz stats for this user
    const userQuizzes=(quizAttempts||[]).filter(a=>a.user_id===p.id);
    const quizPassed=userQuizzes.filter(a=>a.passed).length;

    const bg=isMe?'var(--gold-glow)':i<4?ROW_COLORS[i]:'var(--stone)';
    const border=isMe?'var(--gold-dim)':i<4?BORDER_COLORS[i]:'var(--iron)';

return `<div style="display:grid;grid-template-columns:40px 70px 1fr 90px;align-items:center;gap:0;padding:10px 12px;border-radius:3px;border:1px solid ${border};background:${bg};">
      <div style="font-size:16px;text-align:center;">${medal}</div>
      <div style="font-family:var(--font-d);font-size:10px;color:${isMe?'var(--gold)':'var(--parchment)'};letter-spacing:.04em;">
        User#${i+1}
        ${isMe?'<div style="font-family:var(--font-m);font-size:8px;color:var(--gold);letter-spacing:.06em;">(you)</div>':''}
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <img src="${rank.img}" style="width:18px;height:18px;object-fit:contain;filter:drop-shadow(0 0 3px rgba(160,120,40,0.3));">
        <span style="font-family:var(--font-m);font-size:9px;color:var(--mist);letter-spacing:.04em;">${rank.name}</span>
      </div>
      <div style="text-align:right;">
        <div style="font-family:var(--font-d);font-size:12px;font-weight:700;color:var(--gold);">${(p.exp||0).toLocaleString()}</div>
        <div style="font-family:var(--font-m);font-size:8px;color:var(--mist);">Rank EXP</div>
      </div>
    </div>`;
  }).join('');
}

function updateRankDisplay(exp){
  const rank=getRank(exp);
  const next=getNextRank(exp);

  // dropdown
  const rankEl=document.getElementById('user-rank-display');
  if(rankEl)rankEl.textContent=rank.name;
  const expEl=document.getElementById('user-exp-display');
  if(expEl)expEl.textContent=next?`${exp} / ${next.exp} EXP`:`${exp} EXP — MAX`;

  // hero
  const heroIcon=document.getElementById('hero-rank-icon');
  if(heroIcon)heroIcon.innerHTML=`<img src="${rank.img}" alt="${rank.name}" class="hero-rank-img">`;
  const heroName=document.getElementById('hero-rank-name');
  if(heroName)heroName.textContent=rank.name;
  const heroBar=document.getElementById('hero-rank-bar');
  if(heroBar){
    const prev=RANKS.find(r=>r.exp<=exp&&(!next||r.exp<next.exp))||RANKS[0];
    const pct=next?Math.round((exp-rank.exp)/(next.exp-rank.exp)*100):100;
    heroBar.style.width=pct+'%';
  }

  // topbar avatar back to first letter
  const av=document.getElementById('user-avatar');
  if(av&&currentUser){
    const name=currentUser.user_metadata?.full_name||'?';
    av.textContent=name.charAt(0).toUpperCase();
  }

  // overall rank position
  updateOverallPosition();
}

async function updateOverallPosition(){
  const{data:profiles}=await sbClient.from('profiles').select('id,exp').order('exp',{ascending:false});
  if(!profiles)return;
  const pos=profiles.findIndex(p=>p.id===currentUser.id)+1;
  const circle=document.getElementById('hero-rank-circle');
  if(circle)circle.textContent=pos||'?';
}

async function loadUserExp(){
  if(!currentUser)return;
  const{data:profile}=await sbClient.from('profiles').select('exp,rank').eq('id',currentUser.id).single();
  if(!profile){
    await sbClient.from('profiles').upsert({id:currentUser.id,exp:0,rank:'Newbie II'});
    updateRankDisplay(0);
  } else {
    updateRankDisplay(profile.exp||0);
  }
}

/* ===== NAVIGATION ===== */
function showDash(){
  activeProblem=null;activeQuiz=null;
  $('view-dashboard').classList.add('active');
  $('view-editor').classList.remove('active');
  $('view-quiz').classList.remove('active');
  setBc(null,null);renderDash();
  showMobNav(false);
  mobActiveTab='code';
  document.getElementById('mob-exit-btn').style.display='none';
}

function renderDash(){
  if(!DATA)return;
  const c=DATA.course;
  $('dh-name').textContent=c.name.replace(/^BSCS\s*\w+\s*[—–-]+\s*/i,'');
  $('dh-inst').textContent='✦ Instructor: '+c.instructor;
  $('l-course').textContent='BSCS — Python Practice';
  const ll=$('lab-list');ll.innerHTML='';
  DATA.labs.forEach(lab=>ll.appendChild(makeLabCard(lab)));
  renderQuizDash();
}

/* ===== LAB / TOME LOGIC ===== */
function labStats(lab){
  let solved=0,subCount=0,pts=0;
  const maxPts=lab.problems.reduce((a,p)=>a+p.points,0);
  lab.problems.forEach(p=>{
    const s=gs(p.id);if(!s.submitted)return;subCount++;
    if(s.tcResults){const pc=s.tcResults.filter(r=>r.pass).length;pts+=Math.round(pc/s.tcResults.length*p.points);if(pc/s.tcResults.length>=p.passingPercent/100)solved++;}
  });
  return{solved,subCount,pts,maxPts,pct:subCount>0?Math.round(pts/maxPts*100):0};
}

const DM={easy:{cls:'ge',lbl:'Easy'},medium:{cls:'gm',lbl:'Medium'},hard:{cls:'gh',lbl:'Hard'},'very hard':{cls:'gvh',lbl:'Very Hard'},extreme:{cls:'gxt',lbl:'Extreme'}};

function makeLabCard(lab){
  const st=labStats(lab);
  const status=st.subCount===0?'pending':st.pct>=lab.passingPercent?'passed':'failed';
  const stTxt=status==='passed'?'✦ PASSED':status==='failed'?'✗ FAILED':'Pending';
  const rbCls=status==='passed'?'rp':status==='failed'?'rf':'rn';
  const sCls=st.pct>=80?'sg':st.pct>=50?'sy':st.pct>0?'sr':'sd';
  const sDisp=st.subCount>0?st.pct+'%':'—';
  const card=document.createElement('div');
  card.className='tome';
  card.innerHTML=`
    <div class="tome-hd">
      <span class="tome-ico">${SVG_LAB}</span>
      <div class="tome-inf">
        <div class="tome-nm">${lab.title}</div>
        <div class="tome-mt"><span>Due: ${lab.dueDate}</span><span>Passing: ${lab.passingPercent}%</span><span>${st.solved}/${lab.problems.length} solved · ${st.pts}/${st.maxPts} pts</span></div>
      </div>
      <div class="tome-rt">
        <span class="rbadge ${rbCls}">${stTxt}</span>
        <div class="seal ${sCls}">${sDisp}</div>
        <span class="chv">▾</span>
      </div>
    </div>
    <div class="tome-prog"><div class="tome-prog-fill" style="width:${st.subCount>0?st.pct:0}%"></div></div>
    <div class="tome-bd" id="tb-${lab.id}"></div>`;
  const tbody=card.querySelector(`#tb-${lab.id}`);
  lab.problems.forEach(p=>tbody.appendChild(makeSpellRow(p,lab)));
  return card;
}

function makeSpellRow(prob,lab){
  const s=gs(prob.id);
  const passed=s.submitted&&s.tcResults&&s.tcResults.filter(r=>r.pass).length/s.tcResults.length>=prob.passingPercent/100;
  const failed=s.submitted&&!passed;
  const d=DM[prob.difficulty]||{cls:'ge',lbl:prob.difficulty};
  const row=document.createElement('div');
  row.className='spell';
  row.innerHTML=`
    <div class="sp-orb ${passed?'od':failed?'of':'oi'}">${passed?'✦':failed?'✗':'○'}</div>
    <span class="sp-nm">${prob.title}</span>
    <div class="sp-tags">
      <span class="glyph ${d.cls}">${d.lbl}</span>
      <span class="glyph gp">${prob.points}pts</span>
      <span class="glyph gpct">${prob.passingPercent}% pass</span>
    </div>
    <span class="sp-st ${passed?'ssp':failed?'ssf':'ssi'}">${passed?'Passed':failed?'Failed':'Uncast'}</span>
    <button class="sp-cast">Cast →</button>`;
  row.addEventListener('click',()=>openProb(prob,lab));
  return row;
}

function openProb(prob,lab){
  activeProblem=prob;const s=gs(prob.id);
  $('view-dashboard').classList.remove('active');
  $('view-quiz').classList.remove('active');
  $('view-editor').classList.add('active');
  setBc(lab,prob);
  $('ed-fname').textContent=prob.title.toLowerCase().replace(/[^a-z0-9]+/g,'_')+'.py';
  const d=DM[prob.difficulty]||{cls:'ge',lbl:prob.difficulty};
  const de=$('el-diff');de.className='glyph '+d.cls;de.textContent=d.lbl;
  $('el-pts').textContent=prob.points+' pts';
  $('el-title').textContent=prob.title;
  $('el-meta').textContent=`${prob.passingPercent}% to pass · ${lab.title}`;
  $('el-desc').innerHTML=(prob.description||'').split('\n').map(l=>l.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')).join('\n');
  $('el-constraints').innerHTML=(prob.constraints||[]).map(c=>`<li>${c.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code>$1</code>')}</li>`).join('');
  $('el-infmt').innerHTML=(prob.inputFormat||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code>$1</code>')}</li>`).join('');
  $('el-outfmt').innerHTML=(prob.outputFormat||'').split('\n').filter(l=>l.trim()).map(l=>`<li>${l.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code>$1</code>')}</li>`).join('');
  $('el-examples').innerHTML=(prob.testCases||[]).filter(tc=>!tc.hidden).map((tc,i)=>`
    <div class="ex-card"><div class="ex-lbl">Example ${i+1}</div>
    <div class="ex-cols">
      <div><div class="ex-col-h">Input</div><div class="ex-col-v">${tc.inputs.join('\n')}</div></div>
      <div><div class="ex-col-h">Output</div><div class="ex-col-v out">${tc.expected.join('\n')}</div></div>
    </div></div>`).join('');
  setTimeout(()=>{cm.setValue(s.code||'');cm.clearHistory();cm.refresh();},20);
  const firstEx=(prob.testCases||[]).find(tc=>!tc.hidden);
  $('custom-in').value=firstEx?firstEx.inputs.join('\n'):'';
  $('out-text').textContent='— Awaiting cast —';$('out-text').style.color='var(--mist)';
  hideErr();['btn-run','btn-test','btn-submit'].forEach(id=>$(id).disabled=!pyodide);
  renderTrials();renderVerdict();
  if(isMobile()){showMobNav(true);mobTab('code');}
  if(isMobile()) document.getElementById('mob-exit-btn').style.display='block';
  if(s.submitted&&s.tcResults&&s.tcResults.every(r=>r.pass)){
    const pts=prob.points,total=s.tcResults.length;
    showCongrats(pts,total,pts);
  }
}

function setBc(lab,prob){
  const bc=$('breadcrumb');bc.innerHTML='';
  const mk=(t,fn,a=false)=>{const s=document.createElement('span');s.className='bc-i'+(a?' active':'');s.textContent=t;if(fn)s.onclick=fn;return s;};
  const sep=()=>{const s=document.createElement('span');s.className='bc-s';s.textContent='›';return s;};
  bc.appendChild(mk('Hall',showDash,!lab));
  if(lab){bc.appendChild(sep());bc.appendChild(mk(lab.title,prob?showDash:null,!prob));}
  if(prob){bc.appendChild(sep());bc.appendChild(mk(prob.title,null,true));}
}

/* ===== QUIZ DASHBOARD ===== */
function renderQuizDash(){
  const ql=$('quiz-list');ql.innerHTML='';
  if(!QUIZDATA||!QUIZDATA.quizzes||QUIZDATA.quizzes.length===0){
    ql.innerHTML='<div style="font-family:var(--font-m);font-size:11px;color:var(--mist);padding:12px 4px;">No quizzes found.</div>';
    return;
  }
  QUIZDATA.quizzes.forEach(q=>ql.appendChild(makeQuizCard(q)));
}

function makeQuizCard(quiz){
  const qs=quizState[quiz.id]||{};
  const done=qs.submitted;
  const total=quiz.questions.length;
  const pct=done?Math.round(qs.score/total*100):0;
  const typeSet=new Set(quiz.questions.map(q=>q.type));
  const typeLabels={'multiple_choice':'MC','true_false':'T/F','code_output':'Code','fill_blank':'Fill'};
  const typeTags=[...typeSet].map(t=>`<span class="glyph gp">${typeLabels[t]||t}</span>`).join('');
  let badgeCls='quiz-score-badge',badgeTxt='Not attempted';
  if(done){badgeCls='quiz-score-badge '+(pct>=70?'done-pass':'done-fail');badgeTxt=`${qs.score}/${total} · ${pct}%`;}
  const s=getQSettings(quiz.id);
  const card=document.createElement('div');
  card.className='quiz-card';
  card.id='qcard-'+quiz.id;
  const gearBtn=document.createElement('button');
  gearBtn.className='quiz-gear-btn';
  gearBtn.title='Quiz Settings';
  gearBtn.innerHTML='⚙';
  gearBtn.addEventListener('click',e=>{e.stopPropagation();toggleSettings(quiz.id,card,inner,s,total);});
  const inner=document.createElement('div');
  inner.className='qcard-inner';
  const front=document.createElement('div');
  front.className='qcard-front';
  front.innerHTML=`
    <div class="quiz-card-top"><span class="quiz-ico">${QUIZ_ICONS[quiz.id]||SVG_DEFAULT_QUIZ}</span><span class="quiz-card-title">${quiz.title}</span></div>
    <div class="quiz-card-meta"><span id="qmeta-n-${quiz.id}">${s.numQ} questions</span><span>${quiz.topic}</span><span style="display:flex;gap:4px">${typeTags}</span></div>
    <div class="quiz-card-footer">
      <span class="${badgeCls}">${badgeTxt}</span>
      <button class="quiz-start-btn">${done?'Retake →':'Start →'}</button>
    </div>
    <div class="quiz-prog"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>`;
  const back=document.createElement('div');
  back.className='qcard-back';
  back.innerHTML=buildSettingsHTML(quiz.id,s,total);
  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(gearBtn);
  card.appendChild(inner);
  front.querySelector('.quiz-start-btn').addEventListener('click',e=>{e.stopPropagation();openQuiz(quiz);});
  card.addEventListener('click',()=>{if(card.classList.contains('settings-open'))return;openQuiz(quiz);});
  wireSettings(quiz.id,card,inner,back,s,total);
  return card;
}

function buildSettingsHTML(id,s,total){
  const n=s.numQ;
  const randDisabled=n<50;
  return `
    <div class="qs-header">Quiz Settings</div>
    <div class="qs-row">
      <span class="qs-label">No. of questions</span>
      <div class="qs-pills">
        <button class="qs-pill${n===15?' active':''}" data-n="15">15</button>
        <button class="qs-pill${n===30?' active':''}" data-n="30">30</button>
        <button class="qs-pill${n===50?' active':''}" data-n="50">50</button>
      </div>
    </div>
    <div class="qs-row">
      <label class="qs-check${s.reveal?' checked':''}" id="qs-rev-${id}">
        <input type="checkbox" ${s.reveal?'checked':''}>
        <span class="qs-checkmark">✓</span>
        <span class="qs-label">Reveal answer after each</span>
      </label>
    </div>
    <div class="qs-row">
      <label class="qs-check${s.randomize?' checked':''}${randDisabled?' checked':''}" id="qs-rnd-${id}" ${randDisabled?'style="opacity:.55;pointer-events:none;"':''}>
        <input type="checkbox" ${(s.randomize||randDisabled)?'checked':''}>
        <span class="qs-checkmark">✓</span>
        <span class="qs-label">Randomize questions${randDisabled?' <span style="font-size:8px;color:var(--gold-dim)">(auto on)</span>':''}</span>
      </label>
    </div>
    <button class="qs-save" id="qs-save-${id}">Save</button>
  `;
}

function wireSettings(id,card,inner,back,s,total){
  back.querySelectorAll('.qs-pill').forEach(p=>{
    p.addEventListener('click',e=>{
      e.stopPropagation();
      back.querySelectorAll('.qs-pill').forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
      s.numQ=parseInt(p.dataset.n);
      const rndLabel=back.querySelector(`#qs-rnd-${id}`);
      if(s.numQ<50){
        rndLabel.style.opacity='.55';rndLabel.style.pointerEvents='none';
        rndLabel.classList.add('checked');s.randomize=true;
        const span=rndLabel.querySelector('.qs-label');
        span.innerHTML='Randomize questions <span style="font-size:8px;color:var(--gold-dim)">(auto on)</span>';
      }else{
        rndLabel.style.opacity='';rndLabel.style.pointerEvents='';
        const span=rndLabel.querySelector('.qs-label');
        span.innerHTML='Randomize questions';
      }
    });
  });
  const revLabel=back.querySelector(`#qs-rev-${id}`);
  revLabel.addEventListener('mousedown',e=>{
    e.preventDefault();e.stopPropagation();
    s.reveal=!s.reveal;revLabel.classList.toggle('checked',s.reveal);
  });
  const rndLabel=back.querySelector(`#qs-rnd-${id}`);
  rndLabel.addEventListener('mousedown',e=>{
    e.preventDefault();e.stopPropagation();
    if(s.numQ<50)return;
    s.randomize=!s.randomize;rndLabel.classList.toggle('checked',s.randomize);
  });
  back.querySelector(`#qs-save-${id}`).addEventListener('click',e=>{
    e.stopPropagation();
    const metaN=document.getElementById('qmeta-n-'+id);
    if(metaN)metaN.textContent=s.numQ+' questions';
    closeSettings(id,card,inner);
  });
}

function toggleSettings(id,card,inner,s,total){
  if(openSettingsId&&openSettingsId!==id){
    const otherCard=document.getElementById('qcard-'+openSettingsId);
    const otherInner=otherCard?otherCard.querySelector('.qcard-inner'):null;
    if(otherCard&&otherInner)closeSettings(openSettingsId,otherCard,otherInner);
  }
  if(openSettingsId===id){closeSettings(id,card,inner);}
  else{
    openSettingsId=id;
    card.classList.add('settings-open');
    inner.classList.add('flipped');
    card.querySelector('.quiz-gear-btn').classList.add('open');
  }
}

function closeSettings(id,card,inner){
  if(openSettingsId===id)openSettingsId=null;
  card.classList.remove('settings-open');
  inner.classList.remove('flipped');
  const gb=card.querySelector('.quiz-gear-btn');
  if(gb)gb.classList.remove('open');
}

/* ===== ONE-AT-A-TIME QUIZ ===== */
const QT_LABELS={'multiple_choice':'Multiple Choice','true_false':'True or False','code_output':'Code Output','fill_blank':'Fill in the Blank'};
const QT_CLS={'multiple_choice':'qt-mc','true_false':'qt-tf','code_output':'qt-co','fill_blank':'qt-fb'};

let qzIdx=0,qzResults=[];

function openQuiz(quiz){
  activeQuiz=quiz;
  qzIdx=0;qzResults=[];
  quizState[quiz.id]={answers:{},submitted:false};
  const s=getQSettings(quiz.id);
  quizRevealMode=s.reveal;
  let qList=[...quiz.questions];
  if(s.randomize)qList=qList.sort(()=>Math.random()-.5);
  qList=qList.slice(0,Math.min(s.numQ,qList.length));
  activeQuiz._qList=qList;
  $('view-dashboard').classList.remove('active');
  $('view-editor').classList.remove('active');
  $('view-quiz').classList.add('active');
  $('quiz-title-bar').textContent=quiz.title;
  $('quiz-stage').style.display='flex';
  $('quiz-results').className='';
  $('quiz-results').style.display='none';
  const bc=$('breadcrumb');bc.innerHTML='';
  const mk=(t,fn,a)=>{const s=document.createElement('span');s.className='bc-i'+(a?' active':'');s.textContent=t;if(fn)s.onclick=fn;return s;};
  const sep=()=>{const s=document.createElement('span');s.className='bc-s';s.textContent='›';return s;};
  bc.appendChild(mk('Hall',confirmLeaveQuiz,false));
  bc.appendChild(sep());
  bc.appendChild(mk(quiz.title,null,true));
  showQuestion(0);
}

function confirmLeaveQuiz(){
  if(!activeQuiz)return showDash();
  const qs=quizState[activeQuiz.id];
  if(qs&&qs.submitted){showDash();return;}
  if(qzIdx===0&&qzResults.length===0){showDash();return;}
  $('exit-confirm-overlay').style.display='flex';
}
function exitConfirmYes(){$('exit-confirm-overlay').style.display='none';showDash();}
function exitConfirmNo(){$('exit-confirm-overlay').style.display='none';}

function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function showQuestion(idx){
  const quiz=activeQuiz;
  const qList=quiz._qList||quiz.questions;
  const total=qList.length;
  const q=qList[idx];
  const isLast=idx===total-1;
  $('quiz-prog-fill').style.width=((idx)/total*100)+'%';
  $('quiz-progress-text').textContent=`${idx+1} / ${total}`;
  $('quiz-next-btn').className='';
  let qText=q.question,qCode='';
  const cm=q.question.match(/^([\s\S]*?)```([\s\S]*)```([\s\S]*)$/);
  if(cm){qText=(cm[1]+cm[3]).trim();qCode=cm[2].trim();}

  const card=document.createElement('div');
  card.className='q-card entering';

  card.innerHTML=`
    <div class="q-head">
      <div class="q-num">Question ${idx+1} of ${total} <span class="q-type-tag ${QT_CLS[q.type]||'qt-mc'}">${QT_LABELS[q.type]||q.type}</span></div>
      <div class="q-text">${qText}</div>
      ${qCode?`<div class="q-code">${escHtml(qCode)}</div>`:''}
    </div>
    <div class="q-body" id="qqbody"></div>
    <div class="q-feedback" id="qqfb"></div>
    <div class="why-box" id="qqwhy">
      <div class="why-box-inner" id="qqwhy-inner"></div>
    </div>`;

  const slot=$('quiz-q-slot');
  slot.innerHTML='';
  slot.appendChild(card);

  const body=card.querySelector('#qqbody');
  const fb=card.querySelector('#qqfb');

  if(q.type==='multiple_choice'||q.type==='code_output'||q.type==='true_false'){
    const choices=q.type==='true_false'?['True','False']:q.choices;
    const div=document.createElement('div');div.className='choices';
    choices.forEach(ch=>{
      const c=document.createElement('div');
      c.className='choice';c.dataset.val=ch;
      c.innerHTML=`<div class="choice-dot">◆</div><span class="choice-label">${escHtml(String(ch))}</span>`;
      c.addEventListener('click', async ()=>{
        if(c.classList.contains('locked'))return;
        lockAndReveal(q,ch,div,fb,isLast,card);
      });
      div.appendChild(c);
    });
    body.appendChild(div);
  }else if(q.type==='fill_blank'){
    const row=document.createElement('div');row.className='fill-row';
    const inp=document.createElement('input');
    inp.type='text';inp.className='fill-input';inp.placeholder='Type your answer…';inp.autocomplete='off';
    const btn=document.createElement('button');
    btn.className='fill-confirm-btn';btn.textContent='Confirm';btn.disabled=true;
    inp.addEventListener('input',()=>btn.disabled=!inp.value.trim());
    inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&inp.value.trim())btn.click();});
    btn.addEventListener('click', async ()=>{
      if(btn.disabled)return;
      inp.disabled=true;btn.disabled=true;
      await lockAndReveal(q,inp.value.trim(),null,fb,isLast,card,inp);
    });
    row.appendChild(inp);row.appendChild(btn);
    body.appendChild(row);
    setTimeout(()=>inp.focus(),60);
  }
}

async function fetchWhyExplanation(q, isCorrect) {
  const questionText = q.question.replace(/```[\s\S]*?```/g, '[code block]').trim();
  const prompt = `A student is studying Python and just answered a quiz question.

Question: "${questionText}"
Correct answer: "${q.answer}"
The student got it ${isCorrect ? 'correct ✓' : 'wrong ✗'}

Give a clear, concise explanation (2-4 sentences) of WHY the correct answer is "${q.answer}". 
Focus on the key Python concept involved. Be direct and educational.
Do NOT start with "Great job" or any filler praise. Just explain the concept.`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch('/api/why', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error('API error ' + response.status);
    const data = await response.json();
    const text = (data.text || '').trim();
    if (!text) throw new Error('Empty response');
    return { text, source: 'ai' };
  } catch (e) {
    return { text: q.explanation || 'No explanation available.', source: 'fallback' };
  }
}

async function lockAndReveal(q, userAns, choicesDiv, fb, isLast, card, fillInp=null){
  const{data:result}=await sbClient.rpc('check_answer',{
    quiz_id: activeQuiz.id.toString(),
    question_id: q.id.toString(),
    user_answer: userAns
  });
  const correctAns=result?.correct_answer||'';
  const isCorrect=result?.correct||false;

  qzResults.push({qid:q.id,correct:isCorrect,userAns,correctAns});
  quizState[activeQuiz.id].answers[q.id]=userAns;

  if(choicesDiv){
    choicesDiv.querySelectorAll('.choice').forEach(c=>{
      c.classList.add('locked');
      if(quizRevealMode){
        if(c.dataset.val.toLowerCase()===correctAns.toLowerCase())c.classList.add('correct');
        else if(c.dataset.val===userAns&&!isCorrect)c.classList.add('wrong');
      }else{
        if(c.dataset.val===userAns)c.classList.add('selected');
      }
    });
  }
  if(fillInp){
    if(quizRevealMode)fillInp.classList.add(isCorrect?'correct':'wrong');
  }

  if(card&&quizRevealMode){
    card.classList.add(isCorrect?'answered-correct':'answered-wrong');
  }

  if(quizRevealMode){
    fb.className='q-feedback show '+(isCorrect?'ok':'no');

    const whyBtn=document.createElement('button');
    whyBtn.className='why-btn';
    whyBtn.textContent='WHY?';

    fb.innerHTML=isCorrect
      ?`✦ Correct!`
      :`✗ Wrong — correct answer: <span class="fb-ans">${escHtml(correctAns)}</span>`;
    fb.appendChild(whyBtn);

    const whyBox=card.querySelector('#qqwhy');
    const whyInner=card.querySelector('#qqwhy-inner');

    let whyOpen=false;
    let whyLoaded=false;

    whyBtn.addEventListener('click', async ()=>{
      if(whyOpen){
        whyBox.classList.remove('open','wrong-why');
        whyBtn.textContent='WHY?';
        whyBtn.classList.remove('active-ok','active-no');
        whyOpen=false;
        return;
      }
      whyOpen=true;
      whyBtn.textContent='HIDE';
      whyBtn.classList.add(isCorrect?'active-ok':'active-no');
      whyBox.classList.add('open');
      if(!isCorrect) whyBox.classList.add('wrong-why');
      if(whyLoaded) return;
      whyLoaded=true;
      whyInner.innerHTML=`
        <div class="why-shimmer">
          <div class="shimmer-line"></div>
          <div class="shimmer-line"></div>
          <div class="shimmer-line"></div>
          <div class="shimmer-line"></div>
        </div>`;
      const result = await fetchWhyExplanation(q, isCorrect);
      const badge = result.source === 'ai'
        ? `<span class="why-ai-badge">✦ AI</span>`
        : `<span class="why-fallback-badge">📖 Explanation</span>`;
      const labelCls = isCorrect ? 'why-label ok-lbl' : 'why-label no-lbl';
      whyInner.innerHTML=`
        <div class="${labelCls}">Why? ${badge}</div>
        <div>${escHtml(result.text).replace(/\n/g,'<br>')}</div>`;
    });
  }

  const btn=$('quiz-next-btn');
  btn.className='show';
  btn.textContent=isLast?'✦ See Results':'Next →';
  const fresh=btn.cloneNode(true);
  btn.parentNode.replaceChild(fresh,btn);
  fresh.addEventListener('click',()=>{
    if(isLast){finishQuiz();}
    else{advanceQuestion();}
  });
}

function advanceQuestion(){
  qzIdx++;
  const card=$('quiz-q-slot').querySelector('.q-card');
  if(card){
    card.classList.remove('entering');
    card.classList.add('leaving');
    setTimeout(()=>showQuestion(qzIdx),180);
  }else{
    showQuestion(qzIdx);
  }
}

function toggleRevExpand(i){
  const row=document.getElementById('rev-row-'+i);
  const panel=document.getElementById('rev-expand-'+i);
  const chev=document.getElementById('rev-chev-'+i);
  if(!panel)return;
  const isOpen=panel.style.display==='block';
  panel.style.display=isOpen?'none':'block';
  if(chev)chev.classList.toggle('open',!isOpen);
}

async function finishQuiz(){
  const quiz=activeQuiz;
  const qList=quiz._qList||quiz.questions;
  const total=qList.length;
  const correct=qzResults.filter(r=>r.correct).length;
  const pct=Math.round(correct/total*100);
  const pass=pct>=70;

  quizState[quiz.id].submitted=true;
  quizState[quiz.id].score=correct;
  await sbClient.from('quiz_attempts').insert({
    user_id:currentUser.id,
    username:currentUser.user_metadata?.full_name||'unknown',
    quiz_id:quiz.id,
    quiz_title:quiz.title,
    score:correct,
    total:total,
    passed:pass
  });

  // Update EXP
  const expGained=Math.min(correct,10);
  await sbClient.rpc('add_exp', {amount: expGained});
  const{data:profile}=await sbClient.from('profiles').select('exp').eq('id',currentUser.id).single();
  const newRank=getRank(profile?.exp||0).name;
  await sbClient.from('profiles').update({rank:newRank}).eq('id',currentUser.id);
  updateRankDisplay(profile?.exp||0);
  
  $('quiz-prog-fill').style.width='100%';
  $('quiz-progress-text').textContent=`${total} / ${total}`;

  $('quiz-stage').style.display='none';
  const resEl=$('quiz-results');
  resEl.style.display='block';
  resEl.className='show';

  const reviewRows=qzResults.map((r,i)=>{
    const qObj=qList.find(q=>q.id===r.qid);
    const rawQ=qObj?qObj.question:'';
    const qText=rawQ.replace(/```[\s\S]*?```/g,'[code block]').trim();
    const shortQ=qText.length>80?qText.slice(0,80)+'…':qText;
    return `
    <div class="rev-row ${r.correct?'ok':'no'}" id="rev-row-${i}" onclick="toggleRevExpand(${i})">
      <span class="rev-num">${i+1}</span>
      <span class="rev-txt">
        ${r.correct
          ?`<span class="rev-correct">✦ Correct</span>`
          :`<span class="rev-yours">✗ ${escHtml(r.userAns||'—')}</span> · <span class="rev-correct">${escHtml(r.correctAns)}</span>`}
        <span class="rev-hint">(click to expand)</span>
      </span>
      <span class="rev-chevron" id="rev-chev-${i}">›</span>
    </div>
    <div class="rev-expand ${r.correct?'':'no-exp'}" id="rev-expand-${i}" style="display:none">
      <div class="rev-expand-q">${escHtml(shortQ)}</div>
      <div class="rev-expand-divider"></div>
      ${!r.correct?`<div class="rev-expand-row"><span class="rev-expand-lbl">Your answer:</span> <span class="rev-yours">${escHtml(r.userAns||'—')}</span></div>`:''}
      <div class="rev-expand-row"><span class="rev-expand-lbl">Correct answer:</span> <span class="rev-correct">${escHtml(r.correctAns)}</span></div>
    </div>`;
  }).join('');

  $('quiz-res-inner').innerHTML=`
    <div class="res-sigil">${pass?'✦':'✗'}</div>
    <div class="res-title ${pass?'pass':'fail'}">${pass?'Quiz Passed!':'Quiz Failed'}</div>
    <div class="res-score">${correct}/${total}</div>
    <div class="res-sub">${pct}% — ${pass?'The grimoire approves.':'Study more and try again.'}</div>
    <div class="res-breakdown">
      <div class="res-stat"><div class="res-stat-n" style="color:var(--emerald)">${correct}</div><div class="res-stat-l">Correct</div></div>
      <div class="res-stat"><div class="res-stat-n" style="color:var(--crimson)">${total-correct}</div><div class="res-stat-l">Wrong</div></div>
      <div class="res-stat"><div class="res-stat-n" style="color:var(--gold)">${pct}%</div><div class="res-stat-l">Score</div></div>
    </div>
    <div class="res-actions">
      <button class="res-btn res-btn-retry" onclick="openQuiz(activeQuiz)">↺ Retake</button>
      <button class="res-btn res-btn-back" onclick="showDash()">← Back to Hall</button>
    </div>
    <div class="res-review">
      <div class="rev-notice">Review — click any row to expand</div>
      ${reviewRows}
    </div>`;
}

/* ===== EDITOR LOGIC ===== */
function renderTrials(){
  if(!activeProblem)return;
  const p=activeProblem,s=gs(p.id),res=s.tcResults,sub=s.submitted;
  $('trials-list').innerHTML='';
  const visibleTCs=p.testCases.filter(tc=>!tc.hidden);
  const hiddenTCs=p.testCases.filter(tc=>tc.hidden);
  const allVisiblePassed=visibleTCs.length>0&&visibleTCs.every((tc,vi)=>{
    const i=p.testCases.indexOf(tc);
    return res?.[i]?.pass===true;
  });
  let pc=0,total=0;
  p.testCases.forEach((tc,i)=>{
    const isH=tc.hidden===true;
    if(isH&&!sub&&!allVisiblePassed)return;
    total++;
    if(res?.[i]?.pass)pc++;
  });
  p.testCases.forEach((tc,i)=>{
    const isH=tc.hidden===true;
    if(isH&&!sub&&!allVisiblePassed)return;
    const r=res?.[i];
    const card=document.createElement('div');
    let cls='tc-card';
    if(isH&&!sub)cls+=' htc';
    else if(r)cls+=r.pass?' pass':' fail';
    card.className=cls;
    const bt=isH&&!sub?'🔒 Sealed — click Inscribe to run':r?(r.pass?'✦ Pass':'✗ Fail'):'Pending';
    const sub2=isH&&!sub?'Runs when you Inscribe':'Click to examine →';
    card.innerHTML=`<div class="tc-top"><span class="tc-num">${i+1}</span><span class="tc-lbl">${tc.label}</span><span class="tc-badge">${bt}</span></div><div class="tc-sub">${sub2}</div>`;
    if(!(isH&&!sub))card.addEventListener('click',()=>openModal(i));
    $('trials-list').appendChild(card);
  });
  if(allVisiblePassed&&!sub&&hiddenTCs.length>0){
    const hint=document.createElement('div');
    hint.style.cssText='font-family:var(--font-m);font-size:10px;color:var(--gold);text-align:center;padding:10px 8px;border:1px dashed var(--gold-dim);border-radius:3px;background:var(--gold-glow);letter-spacing:.05em;';
    hint.textContent=`✦ ${hiddenTCs.length} sealed trial${hiddenTCs.length>1?'s':''} unlocked — Inscribe to reveal`;
    $('trials-list').appendChild(hint);
  }
  const sc=$('trials-score');
  if(res&&total>0){sc.textContent=`${pc}/${total}`;sc.style.color=pc===total?'var(--emerald)':pc>0?'var(--gold)':'var(--crimson)';}
  else{sc.textContent=`0/${visibleTCs.length}`;sc.style.color='var(--mist)';}
}

function renderVerdict(){
  if(!activeProblem)return;
  const p=activeProblem,s=gs(p.id),va=$('verdict-area');
  if(!s.submitted||!s.tcResults){va.className='';va.style.display='none';return;}
  const pc=s.tcResults.filter(r=>r.pass).length,total=s.tcResults.length;
  const meets=pc/total*100>=p.passingPercent,pts=Math.round(pc/total*p.points);
  va.style.display='block';va.className='show';
  $('vd-text').className='vd-t '+(meets?'ok':'no');
  $('vd-text').textContent=meets?'✦ Inscription Accepted':'✗ Inscription Rejected';
  $('vd-pts').textContent=`${pts}/${p.points} pts — ${pc}/${total} trials passed`;
  $('vd-sub').textContent=meets?'The grimoire accepts your spell.':'Refine your incantation and try again.';
}

async function runVisibleTCs(){
  const p=activeProblem,code=cm.getValue();
  if(!code.trim()){showErr('The scroll is empty!');return null;}
  const s=gs(p.id),prev=s.tcResults?[...s.tcResults]:new Array(p.testCases.length).fill(null),results=[];
  for(let i=0;i<p.testCases.length;i++){
    const tc=p.testCases[i];
    if(tc.hidden){results.push(prev[i]||null);}
    else{const r=await runPy(code,tc.inputs);if(!r.ok)results.push({pass:false,got:'Error: '+r.error});else{const g=r.lines.join('\n').trim();results.push({pass:g===tc.expected.join('\n').trim(),got:g});}}
  }
  gs(p.id).tcResults=results;return results;
}

async function runAllTCs(){
  const p=activeProblem,code=cm.getValue();
  if(!code.trim()){showErr('The scroll is empty!');return null;}
  const results=[];
  for(const tc of p.testCases){const r=await runPy(code,tc.inputs);if(!r.ok)results.push({pass:false,got:'Error: '+r.error});else{const g=r.lines.join('\n').trim();results.push({pass:g===tc.expected.join('\n').trim(),got:g});}}
  gs(p.id).tcResults=results;return results;
}

function openModal(i){
  const tc=activeProblem.testCases[i],s=gs(activeProblem.id),res=s.tcResults?.[i];
  const isH=tc.hidden===true,sub=s.submitted;
  $('modal-title').textContent=tc.label+(isH?' 🔒':'');
  if(isH&&!sub){$('m-inp').textContent='🔒 Sealed — revealed upon inscription';$('m-inp').style.fontStyle='italic';}
  else{$('m-inp').textContent=tc.inputs.join('\n');$('m-inp').style.fontStyle='';$('custom-in').value=tc.inputs.join('\n');}
  const expEl=$('m-exp');
  if(isH&&!sub){expEl.textContent='🔒 Expected output concealed until inscription';expEl.style.fontStyle='italic';expEl.className='m-val none';}
  else{expEl.textContent=tc.expected.join('\n');expEl.style.fontStyle='';expEl.className='m-val exp';}
  const[badge,got]=[$('modal-badge'),$('m-got')];
  if(!res){badge.className='pending';badge.textContent=isH&&!sub?'🔒 Sealed':'Pending';got.className='m-val none';got.textContent=isH&&!sub?'Runs on inscription.':'Not yet cast.';}
  else if(res.pass){badge.className='pass';badge.textContent='✦ Pass';got.className='m-val ok';got.textContent=res.got||'✦ (correct)';}
  else{badge.className='fail';badge.textContent='✗ Fail';got.className='m-val err';got.textContent=res.got||'(no output)';}
  $('modal-overlay').classList.add('open');
}
$('modal-close').addEventListener('click',()=>$('modal-overlay').classList.remove('open'));
$('modal-overlay').addEventListener('click',e=>{if(e.target===$('modal-overlay'))$('modal-overlay').classList.remove('open');});

function hideErr(){$('err-banner').style.display='none';$('err-banner').className='';}
function showErr(m){$('err-banner').style.display='block';$('err-banner').className='show';$('err-text').textContent='⚠ '+m;}
function showCongrats(pts,total,maxPts){
  $('cgr-pts').textContent=`You passed — ${pts} / ${maxPts} pts  ·  All ${total} trials passed`;
  $('cgr-sub').textContent='All trials passed and all runes answered. The grimoire bows to your craft.';
  $('cgr-success-view').style.display='';
  $('cgr-warn-view').style.display='none';
  $('congrats-modal').classList.remove('warn');
  $('congrats-overlay').classList.add('open');
}
$('cgr-btn-hall').addEventListener('click',()=>{
  $('congrats-overlay').classList.remove('open');
  showDash();
});
$('cgr-btn-retake').addEventListener('click',()=>{
  $('cgr-success-view').style.display='none';
  $('cgr-warn-view').style.display='';
  $('congrats-modal').classList.add('warn');
});
$('cgr-btn-cancel').addEventListener('click',()=>{
  $('cgr-success-view').style.display='';
  $('cgr-warn-view').style.display='none';
  $('congrats-modal').classList.remove('warn');
});
$('cgr-btn-confirm-retake').addEventListener('click',()=>{
  $('congrats-overlay').classList.remove('open');
  $('congrats-modal').classList.remove('warn');
  const s=gs(activeProblem.id);
  s.code='';s.tcResults=null;s.submitted=false;
  cm.setValue('');cm.clearHistory();
  const firstEx=(activeProblem.testCases||[]).find(tc=>!tc.hidden);
  $('custom-in').value=firstEx?firstEx.inputs.join('\n'):'';
  $('out-text').textContent='— Awaiting cast —';$('out-text').style.color='var(--mist)';
  hideErr();renderTrials();renderVerdict();
});

function setBusy(b){['btn-run','btn-test','btn-submit'].forEach(id=>$(id).disabled=b);$('btn-run').textContent=b?'⏳ Casting…':'▶ Cast';}
function flash(cls){$('ed-center').classList.add(cls);setTimeout(()=>$('ed-center').classList.remove(cls),350);}

$('btn-run').addEventListener('click',async()=>{
  setBusy(true);hideErr();
  const code=cm.getValue();
  if(!code.trim()){showErr('The scroll is empty!');setBusy(false);return;}
  if(!$('custom-in').value.trim()){
    const firstEx=(activeProblem.testCases||[]).find(tc=>!tc.hidden);
    if(firstEx)$('custom-in').value=firstEx.inputs.join('\n');
  }
  const inp=$('custom-in').value.trim();
  const r=await runPy(code,inp?inp.split('\n'):[]);
  if(r.ok){$('out-text').textContent=r.lines.length?r.lines.join('\n'):'(no output)';$('out-text').style.color=r.lines.length?'var(--emerald)':'var(--gold)';}
  else{$('out-text').textContent='Error: '+r.error;$('out-text').style.color='var(--crimson)';showErr(r.error);}
  setBusy(false);flash('fg');
});
$('btn-test').addEventListener('click',async()=>{
  setBusy(true);hideErr();
  const res=await runVisibleTCs();
  if(res){renderTrials();flash('fg');}
  setBusy(false);
});
$('btn-submit').addEventListener('click',async()=>{
  setBusy(true);hideErr();
  const res=await runAllTCs();
  if(!res){setBusy(false);return;}
  const s=gs(activeProblem.id);
  s.submitted=true;
  renderTrials();renderVerdict();
  setBusy(false);flash('fp');

  // Save to Supabase
  const tcPassed=res.filter(r=>r.pass).length;
  const pts=Math.round(tcPassed/res.length*activeProblem.points);
  const passed=tcPassed/res.length*100>=activeProblem.passingPercent;
  const lab=DATA.labs.find(l=>l.problems.find(p=>p.id===activeProblem.id));
  await sbClient.from('lab_submissions').insert({
    user_id:currentUser.id,
    username:currentUser.user_metadata?.full_name||'unknown',
    problem_id:activeProblem.id,
    problem_title:activeProblem.title,
    lab_title:lab?lab.title:'Unknown',
    score:pts,
    max_score:activeProblem.points,
    passed:passed,
    tc_passed:tcPassed,
    tc_total:res.length
  });

  const expGained=Math.min(pts,10);
  await sbClient.rpc('add_exp', {amount: expGained});
  const{data:profile}=await sbClient.from('profiles').select('exp').eq('id',currentUser.id).single();
  const newRank=getRank(profile?.exp||0).name;
  await sbClient.from('profiles').update({rank:newRank}).eq('id',currentUser.id);
  updateRankDisplay(profile?.exp||0);
  
  const allPassed=res.every(r=>r.pass);
  if(allPassed){
    const total=res.length;
    const pts2=activeProblem.points;
    showCongrats(pts2,total,pts2);
  }
});

/* ===== MOBILE NAV ===== */
function toggleIoPane(pane){
  const row=$('io-row');
  const btnInput=$('io-expand-input');
  const btnOutput=$('io-expand-output');
  if(!row)return;
  const isExpanded = row.classList.contains('expanded-'+pane);
  row.classList.remove('expanded-input','expanded-output');
  if(btnInput){ btnInput.classList.remove('expanded'); btnInput.textContent='⤢'; }
  if(btnOutput){ btnOutput.classList.remove('expanded'); btnOutput.textContent='⤢'; }
  if(!isExpanded){
    row.classList.add('expanded-'+pane);
    const btn = pane==='input' ? btnInput : btnOutput;
    if(btn){ btn.classList.add('expanded'); btn.textContent='⤡'; }
  }
}

function mobTab(tab){
  if(!isMobile())return;
  mobActiveTab=tab;
  const grimoire=document.getElementById('grimoire');
  const trials=document.getElementById('trials-panel');
  const edCenter=$('ed-center');
  grimoire.classList.remove('mob-open');
  trials.classList.remove('mob-open');
  ['code','problem','trials'].forEach(t=>{
    const btn=$('mob-btn-'+t);
    if(!btn)return;
    btn.classList.remove('active','active-violet');
    if(t===tab){
      if(t==='trials') btn.classList.add('active-violet');
      else btn.classList.add('active');
    }
  });
  if(tab==='problem'){
    grimoire.classList.add('mob-open');
    grimoire.scrollTop=0;
  } else if(tab==='trials'){
    trials.classList.add('mob-open');
    trials.scrollTop=0;
  } else {
    if(cm) setTimeout(()=>cm.refresh(),30);
  }
}

window.addEventListener('resize',()=>{
  if($('view-editor').classList.contains('active')){
    if(isMobile()){
      showMobNav(true);
      mobTab(mobActiveTab);
    } else {
      showMobNav(false);
      const grimoire=document.getElementById('grimoire');
      const trials=document.getElementById('trials-panel');
      grimoire.classList.remove('mob-open');
      trials.classList.remove('mob-open');
      grimoire.style.display='';
      trials.style.display='';
      if(cm) setTimeout(()=>cm.refresh(),30);
    }
  }
});

/* ===== INIT ===== */
async function initHeavy(){
  const bar=$('load-bar');
  const txt=$('load-txt');
  const lcourse=$('l-course');

  $('loading-overlay').classList.remove('hidden');

  let stopped=false;
  const CRAWL_DURATION=9000;
  const CRAWL_MAX=80;
  const startTime=performance.now();

  function easedCrawl(){
    if(stopped)return;
    const elapsed=performance.now()-startTime;
    const t=Math.min(elapsed/CRAWL_DURATION,1);
    const eased=1-Math.pow(1-t,3);
    const pct=eased*CRAWL_MAX;
    bar.style.width=pct+'%';
    if(pct<20)txt.textContent='Loading scrolls…';
    else if(pct<45)txt.textContent='Preparing grimoire…';
    else if(pct<65)txt.textContent='Summoning Python runtime…';
    else txt.textContent='Binding spells…';
    if(pct<CRAWL_MAX-0.1)requestAnimationFrame(easedCrawl);
  }
  requestAnimationFrame(easedCrawl);

  lcourse.textContent='BSCS — Python Practice';
  await loadJSON();
  if(DATA){lcourse.textContent='BSCS — Python Practice';}
  initCM();
  await initPy();

  stopped=true;
  ['btn-run','btn-test','btn-submit'].forEach(id=>$(id).disabled=false);
  bar.style.transition='width .6s ease';
  bar.style.width='100%';
  txt.textContent='The dungeon is ready.';
  await loadUserExp();
  setTimeout(()=>{
  $('loading-overlay').classList.add('hidden');
  showDash();
  const wn = document.getElementById('wn-overlay');
  wn.style.display = 'flex';
}, 700);
}

(async()=>{
  onAuthSuccess=initHeavy;
  await initAuth();
})();
