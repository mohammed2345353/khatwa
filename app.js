const lessons = [
  {
    id: 'io', title: 'الإدخال والإخراج', group: 'التواصل مع البرنامج', subtitle: 'البرنامج يستقبل معلومة، يعالجها، وبعدها يعرض نتيجة.',
    note: 'أغلب البرامج تتعامل مع بيانات تدخل لها ونتائج تطلع منها. في Python نستخدم <b>input()</b> للاستقبال و<b>print()</b> للإخراج.',
    python: ['<span class="name">name</span> = <span class="fn">input</span>(<span class="str">"Your name: "</span>)', '<span class="fn">print</span>(<span class="str">"Hello, "</span> + <span class="name">name</span>)'],
    js: ['<span class="kw">let</span> <span class="name">name</span> = <span class="fn">prompt</span>(<span class="str">"Your name: "</span>);', '<span class="fn">console.log</span>(<span class="str">"Hello, "</span> + <span class="name">name</span>);'],
    steps: [{line:0,msg:'البرنامج يطلب اسماً وينتظر إدخال المستخدم.',scene:'ask'},{line:0,msg:'دخلت قيمة، فتنحفظ داخل المتغير name.',scene:'receive'},{line:1,msg:'البرنامج يركّب الرسالة ويعرضها في نافذة الإخراج.',scene:'answer'}]
  },
  {
    id: 'data', title: 'المتغيرات وأنواع البيانات', group: 'تخزين المعلومات', subtitle: 'الأسماء تربط البيانات بالقيم حتى يستخدمها البرنامج.',
    note: 'المتغير اسم لقيمة محفوظة في الذاكرة. النص والعدد والقيمة المنطقية أنواع مختلفة، لكن فكرة تخزين قيمة باسم موجودة في لغات كثيرة.',
    python: ['<span class="name">name</span> = <span class="str">"Ali"</span>', '<span class="name">score</span> = <span class="num">92</span>', '<span class="name">passed</span> = <span class="bool">True</span>'],
    js: ['<span class="kw">let</span> <span class="name">name</span> = <span class="str">"Ali"</span>;', '<span class="kw">let</span> <span class="name">score</span> = <span class="num">92</span>;', '<span class="kw">let</span> <span class="name">passed</span> = <span class="bool">true</span>;'],
    steps: [{line:0,msg:'النص Ali يستقر داخل متغير اسمه name.',scene:'name'},{line:1,msg:'العدد 92 ينخزن كقيمة رقمية داخل score.',scene:'score'},{line:2,msg:'القيمة المنطقية تسجل حالة النجاح: صح أو خطأ.',scene:'passed'}]
  },
  {
    id: 'operators', title: 'العمليات والتعابير', group: 'معالجة المعلومات', subtitle: 'العمليات تحول القيم إلى نتيجة أو قرار.',
    note: 'البرنامج يطبق عمليات حسابية ومقارنات على القيم. مبدأ الجمع والمقارنة واحد حتى لو اختلفت بعض الرموز أو قواعد الكتابة.',
    python: ['<span class="name">total</span> = <span class="num" data-value="operandA">6</span> + <span class="num" data-value="operandB">4</span>', '<span class="name">is_large</span> = <span class="name">total</span> &gt; <span class="num" data-value="threshold">8</span>'],
    js: ['<span class="kw">let</span> <span class="name">total</span> = <span class="num" data-value="operandA">6</span> + <span class="num" data-value="operandB">4</span>;', '<span class="kw">let</span> <span class="name">isLarge</span> = <span class="name">total</span> &gt; <span class="num" data-value="threshold">8</span>;'],
    steps: [{line:0,msg:'القيمتان 6 و4 تدخلان إلى عملية الجمع.',scene:'combine'},{line:0,msg:'تنتج العملية قيمة جديدة: 10.',scene:'sum'},{line:1,msg:'المقارنة تسأل: هل 10 أكبر من 8؟ النتيجة True.',scene:'compare'}]
  },
  {
    id: 'if', title: 'القرارات if / else', group: 'اختيار مسار التنفيذ', subtitle: 'الشرط يحدد أي طريق يكمل به البرنامج.',
    note: 'الشرط تعبير نتيجته صح أو خطأ. ينفذ البرنامج فرع <b>if</b> عندما يتحقق الشرط، وإلا ينتقل إلى <b>else</b>. غيّر الدرجة وجرب.',
    python: ['<span class="name">grade</span> = <span class="num" data-grade>82</span>', '<span class="kw">if</span> <span class="name">grade</span> &gt;= <span class="num">50</span>:', '    <span class="fn">print</span>(<span class="str">"Pass"</span>)', '<span class="kw">else</span>:', '    <span class="fn">print</span>(<span class="str">"Try again"</span>)'],
    js: ['<span class="kw">let</span> <span class="name">grade</span> = <span class="num" data-grade>82</span>;', '<span class="kw">if</span> (<span class="name">grade</span> &gt;= <span class="num">50</span>) {', '  <span class="fn">console.log</span>(<span class="str">"Pass"</span>);', '} <span class="kw">else</span> {', '  <span class="fn">console.log</span>(<span class="str">"Try again"</span>);', '}'],
    steps: [{line:0,msg:'تدخل الدرجة إلى متغير grade.',scene:'grade'},{line:1,msg:'البرنامج يفحص إذا الدرجة 50 أو أكثر.',scene:'check'},{line:2,msg:'يتوهج مسار if إذا الشرط صحيح؛ وإلا يتوهج مسار else.',scene:'route',jsLineFalse:4,pythonLineFalse:4}], grade:82
  },
  {
    id: 'for', title: 'التكرار for', group: 'تكرار التعليمات', subtitle: 'الحلقة تمر على عناصر أو عدد محدد من المرات.',
    note: 'حلقة <b>for</b> تعيد تنفيذ مجموعة تعليمات لكل عنصر أو قيمة. المثال يمر على 1 و2 و3؛ نفس الفكرة موجودة بصيغ مختلفة في لغات كثيرة.',
    python: ['<span class="kw">for</span> <span class="name">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num" data-value="loopEndPython">4</span>):', '    <span class="fn">print</span>(<span class="name">i</span>)'],
    js: ['<span class="kw">for</span> (<span class="kw">let</span> <span class="name">i</span> = <span class="num">1</span>; <span class="name">i</span> &lt;= <span class="num" data-value="loopLimit">3</span>; <span class="name">i</span>++) {', '  <span class="fn">console.log</span>(<span class="name">i</span>);', '}'],
    steps: [{line:0,msg:'الحلقة تبدأ وتجهز التكرارات الثلاثة.',scene:'begin'},{line:1,msg:'التكرار الأول: i تساوي 1.',scene:'one',i:1},{line:1,msg:'التكرار الثاني: i تساوي 2.',scene:'one',i:2},{line:1,msg:'التكرار الثالث: i تساوي 3.',scene:'one',i:3},{line:0,msg:'ماكو تكرار رابع؛ الحلقة تنتهي.',scene:'end'}]
  },
  {
    id: 'while', title: 'التكرار while', group: 'تكرار التعليمات', subtitle: 'الحلقة تكرر العمل ما دام الشرط صحيحاً.',
    note: 'في <b>while</b> يستمر التكرار ما دام الشرط صحيحاً. لازم تتغير قيمة مؤثرة بالشرط حتى توصل الحلقة إلى نقطة توقف.',
    python: ['<span class="name">count</span> = <span class="num">1</span>', '<span class="kw">while</span> <span class="name">count</span> &lt;= <span class="num" data-value="loopLimit">3</span>:', '    <span class="fn">print</span>(<span class="name">count</span>)', '    <span class="name">count</span> += <span class="num">1</span>'],
    js: ['<span class="kw">let</span> <span class="name">count</span> = <span class="num">1</span>;', '<span class="kw">while</span> (<span class="name">count</span> &lt;= <span class="num" data-value="loopLimit">3</span>) {', '  <span class="fn">console.log</span>(<span class="name">count</span>);', '  <span class="name">count</span> += <span class="num">1</span>;', '}'],
    steps: [{line:0,msg:'العداد يبدأ من 1.',scene:'set',n:1},{line:1,msg:'الشرط صحيح: 1 أقل من أو يساوي 3.',scene:'test',n:1},{line:2,msg:'يطبع 1، ثم يزيد العداد.',scene:'print',n:1},{line:1,msg:'يرجع يفحص الشرط عند القيمة 2.',scene:'test',n:2},{line:2,msg:'يطبع 2، ثم يزيد العداد.',scene:'print',n:2},{line:1,msg:'الشرط صحيح عند القيمة 3.',scene:'test',n:3},{line:2,msg:'يطبع 3، ثم يصير العداد 4.',scene:'print',n:3},{line:1,msg:'عند 4 يصير الشرط خطأ؛ الحلقة تتوقف.',scene:'stop',n:4}]
  },
  {
    id: 'function', title: 'الدوال والنتائج', group: 'تنظيم وإعادة الاستخدام', subtitle: 'الدالة تجمع تعليمات باسم وتستقبل مدخلات وترجع نتيجة.',
    note: 'الدالة جزء قابل لإعادة الاستخدام. تستقبل <b>parameter</b>، تنفذ خطواتها، وممكن ترجع <b>return</b> قيمة يستفيد منها باقي البرنامج.',
    python: ['<span class="kw">def</span> <span class="fn">double</span>(<span class="name">number</span>):', '    <span class="kw">return</span> <span class="name">number</span> * <span class="num">2</span>', '<span class="name">answer</span> = <span class="fn">double</span>(<span class="num" data-value="functionInput">5</span>)'],
    js: ['<span class="kw">function</span> <span class="fn">double</span>(<span class="name">number</span>) {', '  <span class="kw">return</span> <span class="name">number</span> * <span class="num">2</span>;', '}', '<span class="kw">let</span> <span class="name">answer</span> = <span class="fn">double</span>(<span class="num" data-value="functionInput">5</span>);'],
    steps: [{line:2,jsLine:3,msg:'البرنامج يستدعي الدالة ويرسل لها الرقم 5 كمدخل.',scene:'call'},{line:1,msg:'داخل الدالة، الرقم يمر بعملية الضرب × 2.',scene:'process'},{line:2,jsLine:3,msg:'ترجع الدالة النتيجة 10 إلى المتغير answer.',scene:'return'}]
  },
  {
    id: 'list', title: 'القوائم والمصفوفات', group: 'تجميع البيانات', subtitle: 'خزّن عدة قيم في مجموعة واطلب قيمة باستخدام موقعها.',
    note: 'القائمة أو المصفوفة تخزن مجموعة عناصر تحت اسم واحد. نصل لعنصرها باستخدام index؛ بعض اللغات تبدأ العد من الصفر.',
    python: ['<span class="name">scores</span> = [<span class="num" data-value="list0">4</span>, <span class="num" data-value="list1">9</span>, <span class="num" data-value="list2">2</span>, <span class="num" data-value="list3">7</span>]', '<span class="name">selected</span> = <span class="name">scores</span>[<span class="num" data-value="listIndex">2</span>]', '<span class="fn">print</span>(<span class="name">selected</span>)'],
    js: ['<span class="kw">let</span> <span class="name">scores</span> = [<span class="num" data-value="list0">4</span>, <span class="num" data-value="list1">9</span>, <span class="num" data-value="list2">2</span>, <span class="num" data-value="list3">7</span>];', '<span class="kw">let</span> <span class="name">selected</span> = <span class="name">scores</span>[<span class="num" data-value="listIndex">2</span>];', '<span class="fn">console.log</span>(<span class="name">selected</span>);'],
    steps: [{line:0,msg:'أربع قيم تنحط داخل مجموعة اسمها scores.',scene:'fill'},{line:1,msg:'المؤشر يروح إلى الفهرس 2، وهو العنصر الثالث.',scene:'select'},{line:2,msg:'البرنامج يقرأ القيمة المحددة: 2.',scene:'read'}]
  }
];

let current = lessons[0], stepIndex = 0, language = 'python', timer = null, grade = 82, userName = 'Sara';
const labState = { operandA: 6, operandB: 4, threshold: 8, loopLimit: 3, functionInput: 5, listValues: [4, 9, 2, 7], listIndex: 2 };
function getSteps(){
  if(current.id==='for'){
    return [{line:0,msg:`الحلقة تبدأ وتجهز ${labState.loopLimit} تكرارات.`,scene:'begin'},...Array.from({length:labState.loopLimit},(_,i)=>({line:1,msg:`التكرار ${i+1}: قيمة i تساوي ${i+1}.`,scene:'one',i:i+1})),{line:0,msg:`ماكو تكرار بعد ${labState.loopLimit}؛ الحلقة تنتهي.`,scene:'end'}];
  }
  if(current.id==='while'){
    const steps=[{line:0,msg:'العداد يبدأ من 1.',scene:'set',n:1}];
    for(let n=1;n<=labState.loopLimit;n++){steps.push({line:1,msg:`الشرط صحيح: ${n} أقل من أو يساوي ${labState.loopLimit}.`,scene:'test',n},{line:2,msg:`يطبع ${n}، ثم يزيد العداد.`,scene:'print',n});}
    steps.push({line:1,msg:`عند ${labState.loopLimit+1} يصير الشرط خطأ؛ الحلقة تتوقف.`,scene:'stop',n:labState.loopLimit+1});
    return steps;
  }
  return current.steps;
}
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderNav(){
  $('lessonNav').innerHTML = lessons.map((l,i)=>`<button class="lesson-link ${l.id===current.id?'active':''}" data-lesson="${l.id}" type="button"><span class="lesson-number">${String(i+1).padStart(2,'0')}</span><span>${l.title}</span></button>`).join('');
  document.querySelectorAll('.lesson-link').forEach(button=>button.addEventListener('click',()=>selectLesson(button.dataset.lesson)));
}
function selectLesson(id){stopPlayback();current=lessons.find(item=>item.id===id);stepIndex=0;$('promptCard').hidden=true;renderNav();render()}
function setLanguage(next){language=next;document.querySelectorAll('.lang').forEach(button=>button.classList.toggle('active',button.dataset.lang===language));render()}
function render(){
  const steps=getSteps();if(stepIndex>=steps.length)stepIndex=steps.length-1;const step=steps[stepIndex];$('lessonGroup').textContent=current.group;$('lessonTitle').textContent=current.title;$('lessonSub').textContent=current.subtitle;$('conceptNote').innerHTML=current.note;
  $('filename').textContent=language==='python'?'lesson.py':'lesson.js';
  const isFalseRoute=step.scene==='route'&&grade<50;const activeLine=language==='js'?(step.jsLine??(isFalseRoute?step.jsLineFalse:step.line)):(isFalseRoute?(step.pythonLineFalse??step.line):step.line);
  const values={...labState,list0:labState.listValues[0],list1:labState.listValues[1],list2:labState.listValues[2],list3:labState.listValues[3],loopEndPython:labState.loopLimit+1};const code=current[language].map(line=>line.replace('data-grade>82',`data-grade>${grade}`).replace(/data-value="([A-Za-z0-9]+)">[^<]*/g,(_,key)=>`data-value="${key}">${values[key]}`)).map((line,index)=>`<div class="code-line ${activeLine===index?'current':''}"><span class="line-number">${index+1}</span>${line}</div>`).join('');$('codeContent').innerHTML=code;
  $('progressText').textContent=`${String(lessons.indexOf(current)+1).padStart(2,'0')} / 08`; $('progressBar').style.width=`${(lessons.indexOf(current)+1)/lessons.length*100}%`;
  $('stepExplanation').textContent=step.msg;$('stepCounter').textContent=`الخطوة ${stepIndex+1} من ${steps.length}`;$('stepTrack').innerHTML=steps.map((_,i)=>`<i class="step-pip ${i<stepIndex?'done':''} ${i===stepIndex?'current':''}"></i>`).join('');
  $('runState').textContent=timer?'قيد الحركة':stepIndex===steps.length-1?'اكتمل المثال':'جاهز';$('runState').classList.toggle('running',!!timer);document.body.classList.toggle('is-playing',!!timer);document.body.style.setProperty('--step-speed',`${$('speed').value}ms`);renderScene(step);
}
function node(label,value,accent=''){return `<div class="node ${accent}"><span class="node-label">${label}</span><strong>${value}</strong></div>`}
function arrow(active=true){return `<span class="flow-arrow ${active?'active':''}">›</span>`}
function terminal(lines,label='OUTPUT'){return `<div class="terminal"><div class="terminal-label"><span>${label}</span><span>● ● ●</span></div>${lines}</div>`}
function renderScene(step){
  let inside='';const i=stepIndex;
  if(current.id==='io'){
    const prompt=i===0?'<span class="cursor"></span>':esc(userName);
    const output=i>=2?`&gt; Hello, ${esc(userName)}!`:'&gt; waiting…';
    inside=`<div class="scene-content"><div class="scene-caption">INPUT → PROCESS → OUTPUT</div><div class="scene-explainer">${node('USER',prompt,'blue')}${arrow(i>=1)}<div class="motion-line"></div>${arrow(i>=2)}${node('PROGRAM','name','mint')}</div>${i===0?`<div class="decision-controls" style="margin-top:18px"><label for="nameInput">جرّب اسمك</label><input id="nameInput" class="name-input" value="${esc(userName)}" maxlength="18"><button class="mini-btn" id="nameApply">تطبيق</button></div>`:''}${terminal(output)}</div>`;
  } else if(current.id==='data'){
    const values=[['name','"Ali"','str',i>=0],['score','92','int',i>=1],['passed','True','bool',i>=2]];
    inside=`<div class="scene-content"><div class="scene-caption">VALUES ENTER PROGRAM MEMORY</div><div class="data-rack">${values.map(([name,value,type,on],idx)=>`<div class="data-box ${on&&idx===i?'active':''}"><label>${name}</label><b>${value}</b><span class="type-tag">${type}</span></div>`).join('')}</div><div class="scene-note">كل اسم يرتبط بقيمة ونوع بيانات</div></div>`;
  } else if(current.id==='operators'){
    inside=`<div class="scene-content"><div class="scene-caption">VALUES → OPERATION → RESULT</div><div class="operator-equation"><div class="operand ${i>=1?'moving':''}">${labState.operandA}</div><span class="operator">+</span><div class="operand ${i>=1?'moving':''}">${labState.operandB}</div>${arrow(i>=1)}${i>=1?`<div class="result-orb">${labState.operandA+labState.operandB}</div>`:''}</div>${i>=2?`<span class="compare-badge">${labState.operandA+labState.operandB} &gt; ${labState.threshold}&nbsp;&nbsp; → &nbsp;&nbsp; ${labState.operandA+labState.operandB>labState.threshold?'True':'False'}</span>`:''}<div class="decision-controls operator-controls"><label for="operandA">العدد الأول</label><input id="operandA" type="number" min="0" max="99" value="${labState.operandA}"><label for="operandB">الثاني</label><input id="operandB" type="number" min="0" max="99" value="${labState.operandB}"><label for="threshold">المقارنة</label><input id="threshold" type="number" min="0" max="99" value="${labState.threshold}"></div><div class="scene-note">التعبير يحوّل قيمتين إلى نتيجة جديدة</div></div>`;
  } else if(current.id==='if'){
    const truth=grade>=50, chosen=i>=2;inside=`<div class="scene-content"><div class="scene-caption">ONE CONDITION · TWO POSSIBLE ROUTES</div><div class="decision-wrap"><div class="decision-gate">grade (${grade}) ≥ 50 ?</div><div class="decision-routes ${chosen?'animate':''}"><div class="route ${chosen&&truth?'active':''}"><span class="route-particle"></span><label>TRUE · IF</label>نجاح</div><div class="route ${chosen&&!truth?'active false-route':''}"><span class="route-particle"></span><label>FALSE · ELSE</label>محاولة أخرى</div></div><div class="decision-controls"><label for="gradeInput">غيّر الدرجة</label><input id="gradeInput" type="range" min="0" max="100" value="${grade}"><strong>${grade}</strong></div></div></div>`;
  } else if(current.id==='for'){
    const val=step.i||0, complete=step.scene==='end';const left=val?7+((val-1)/Math.max(1,labState.loopLimit-1))*86:7;
    inside=`<div class="scene-content"><div class="scene-caption">LOOP ITERATIONS · RANGE 1 TO ${labState.loopLimit}</div><div class="loop-visual"><div class="loop-label">FOR EACH VALUE OF i</div><div class="loop-track"><span class="loop-trail"></span><span class="loop-cursor" style="left:${complete?94:left}%"></span>${Array.from({length:labState.loopLimit},(_,idx)=>idx+1).map(n=>`<div class="loop-stop ${val===n?'current':''} ${val>n||complete?'visited':''}">${n}</div>`).join('')}</div><div class="loop-stats"><span class="stat-pill">current i <b>${val||'—'}</b></span><span class="stat-pill">repetitions <b>${val||0} / ${labState.loopLimit}</b></span></div>${terminal(val?Array.from({length:Math.min(val,labState.loopLimit)},(_,n)=>n+1).join('\n&gt; '):'&gt; waiting…')}<div class="decision-controls"><label for="loopLimit">عدد التكرارات (1–6)</label><input id="loopLimit" type="number" min="1" max="6" value="${labState.loopLimit}"></div></div></div>`;
  } else if(current.id==='while'){
    const n=step.n||1, stopped=step.scene==='stop', printed=getSteps().slice(0,i+1).filter(item=>item.scene==='print').map(item=>item.n);
    inside=`<div class="scene-content"><div class="scene-caption">WHILE THE CONDITION IS TRUE</div><div class="while-wheel"><div class="wheel-counter">${n}</div></div><div class="loop-stats"><span class="stat-pill">count <b>${n}</b></span><span class="stat-pill">count ≤ ${labState.loopLimit} <b style="color:${stopped?'var(--amber)':'var(--olive)'}">${stopped?'False':'True'}</b></span></div>${terminal(printed.length?printed.join('\n&gt; '):'&gt; waiting…')}<div class="decision-controls"><label for="loopLimit">كرّر إلى العدد</label><input id="loopLimit" type="number" min="1" max="6" value="${labState.loopLimit}"></div></div>`;
  } else if(current.id==='function'){
    const result=i>=2, doubled=labState.functionInput*2;inside=`<div class="scene-content"><div class="scene-caption">CALL → PROCESS → RETURN</div><div class="function-box"><span class="arg-token">${labState.functionInput}</span><strong>double(number)</strong><span>number × 2</span><span class="return-token">${result?doubled:'return'}</span></div><div class="loop-stats"><span class="stat-pill">argument <b>${labState.functionInput}</b></span>${result?`<span class="stat-pill">answer <b>${doubled}</b></span>`:''}</div><div class="decision-controls"><label for="functionInput">جرّب قيمة</label><input id="functionInput" type="number" min=0 max=99 value="${labState.functionInput}"></div><div class="scene-note">الدالة تستقبل قيمة وترجع نتيجة إلى مكان الاستدعاء</div></div>`;
  } else {
    const chosen=labState.listIndex, active=i>=1?chosen:-1;const values=labState.listValues;inside=`<div class="scene-content"><div class="scene-caption">COLLECTION · INDEX STARTS AT ZERO</div><div class="loop-label">scores[index]</div><div class="array-row">${values.map((n,index)=>`<div class="array-cell ${active===index?'selected':''}"><small>${index}</small><b>${n}</b></div>`).join('')}</div>${i>=1?`<div class="array-pointer">index ${chosen} ↓ selected value = ${values[chosen]}</div>`:'<div class="scene-note">غيّر القيم والفهرس وجرب</div>'}${i>=2?terminal(`&gt; ${values[chosen]}`):''}<div class="decision-controls list-controls"><label for="listValuesInput">القيم (4 أعداد)</label><input id="listValuesInput" value="${values.join(', ')}" aria-label="أدخل أربعة أعداد مفصولة بفواصل"><label for="listIndexInput">الفهرس</label><input id="listIndexInput" type="number" min="0" max="3" value="${chosen}"><button class="mini-btn" id="listApply" type="button">تطبيق</button></div></div>`;
  }
  $('stage').innerHTML=`<div class="scene" data-step="${stepIndex}">${inside}</div>`;
  const gradeInput=$('gradeInput');if(gradeInput)gradeInput.oninput=()=>{grade=Number(gradeInput.value);stepIndex=0;render()};
  const bindNumber=(id,key,min=0,max=99)=>{const input=$(id);if(input)input.onchange=()=>{const value=Number(input.value);if(Number.isFinite(value)){labState[key]=Math.min(max,Math.max(min,value));stepIndex=0;render()}}};
  bindNumber('operandA','operandA',0,99);bindNumber('operandB','operandB',0,99);bindNumber('threshold','threshold',0,99);bindNumber('loopLimit','loopLimit',1,6);bindNumber('functionInput','functionInput',0,99);
  const listApply=$('listApply');if(listApply)listApply.onclick=()=>{const parsed=$('listValuesInput').value.split(',').map(v=>Number(v.trim()));const nextIndex=Number($('listIndexInput').value);if(parsed.length===4&&parsed.every(v=>Number.isFinite(v))&&Number.isInteger(nextIndex)&&nextIndex>=0&&nextIndex<=3){labState.listValues=parsed.map(v=>Math.max(-99,Math.min(999,v)));labState.listIndex=nextIndex;stepIndex=0;render()}else{$('toast').textContent='أدخل أربعة أعداد وفهرسًا من 0 إلى 3';$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2200)}};
  const nameApply=$('nameApply');if(nameApply)nameApply.onclick=()=>{userName=$('nameInput').value.trim()||'Sara';render()};
}
function stopPlayback(){if(timer){clearInterval(timer);timer=null}document.body.classList.remove('is-playing');$('playBtn').innerHTML='▶ <span>شغّل الحركة</span>';}
function nextStep(){const steps=getSteps();if(stepIndex<steps.length-1){stepIndex++;render()}else{$('runState').textContent='اكتمل المثال'}}
function play(){if(timer){stopPlayback();render();return}if(stepIndex>=getSteps().length-1)stepIndex=0;$('playBtn').innerHTML='Ⅱ <span>إيقاف</span>';timer=setInterval(()=>{if(stepIndex>=getSteps().length-1){stopPlayback();render();return}stepIndex++;render()},Number($('speed').value));render()}
function flowDescription(){
  const templates={
    io:`A user types the name “${userName}” into a simple input field. The value travels as a glowing token into a program memory box named name. The program combines it with “Hello,” and reveals “Hello, ${userName}!” in a terminal. Show the sequence input → processing → output.`,
    data:'Animate three values entering separate memory boxes: the text “Ali” into name, the number 92 into score, and the boolean True into passed. Show each value as a distinct data token, then label the types string, integer, and boolean.',
    operators:`Show two number tokens, ${labState.operandA} and ${labState.operandB}, moving into a plus operator. They combine into ${labState.operandA+labState.operandB}. Then compare the result with ${labState.threshold}; resolve to ${labState.operandA+labState.operandB>labState.threshold?'True':'False'}.`,
    if:`Show a decision gate labeled “grade ≥ 50?”. The input value is ${grade}; therefore the condition is ${grade>=50?'true':'false'}. Move a glowing marker only through the ${grade>=50?'TRUE / IF / Pass':'FALSE / ELSE / Try again'} branch; keep the other branch dim.`,
    for:`Visualize a for loop visiting exactly ${labState.loopLimit} tiles from 1 to ${labState.loopLimit}. A glowing marker moves in order and each value appears in a terminal. Stop after ${labState.loopLimit}; do not add ${labState.loopLimit+1}.`,
    while:`Visualize a while loop with condition count ≤ ${labState.loopLimit}. Start at 1, print each count through ${labState.loopLimit}, increment each time, then stop at ${labState.loopLimit+1} when the condition becomes false.`,
    function:`Show a function module named double(number). Send ${labState.functionInput} into it, multiply by 2, then return ${labState.functionInput*2} to a variable named answer.`,
    list:`Show a list with indices 0–3 and values ${labState.listValues.join(', ')}. Move a pointer to index ${labState.listIndex}, select ${labState.listValues[labState.listIndex]}, and pass it to a terminal.`,
  };
  return `Create a polished 8-second 16:9 educational motion-graphics clip explaining the programming concept “${current.title}”.\n\nVisual style: precise 2D motion design, deep navy background, restrained teal and cyan highlights, clean geometric shapes, smooth eased movement, clear spacing, one continuous scene, no camera shake, no watermark.\n\nSequence: ${templates[current.id]}\n\nAccuracy: preserve the described order and exact values. Use only the labels and numbers specified. Keep text short and clean; do not invent code, steps, values, or extra objects. No voiceover or music.`;
}
function showPrompt(){const card=$('promptCard');card.hidden=false;$('promptText').textContent=flowDescription();card.scrollIntoView({behavior:'smooth',block:'nearest'})}
async function copyPrompt(){const text=$('promptText').textContent;try{await navigator.clipboard.writeText(text)}catch(error){const temp=document.createElement('textarea');temp.value=text;temp.style.position='fixed';temp.style.opacity='0';document.body.appendChild(temp);temp.select();document.execCommand('copy');temp.remove()}$('toast').textContent='اننسخ البرومبت — الصقه في Google Flow';$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2200)}

$('playBtn').addEventListener('click',play);$('stepBtn').addEventListener('click',()=>{stopPlayback();nextStep()});$('resetBtn').addEventListener('click',()=>{stopPlayback();stepIndex=0;render()});$('flowBtn').addEventListener('click',showPrompt);$('copyBtn').addEventListener('click',copyPrompt);$('speed').addEventListener('change',()=>{if(timer){stopPlayback();play()}});document.querySelectorAll('.lang').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
renderNav();render();
