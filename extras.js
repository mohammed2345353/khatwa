/* خُطوة — إضافات: واجهة إنجليزية، ألوان الموقع، تمارين. يعمل فوق app.js بدون تعديل منطق الدروس. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  let ui = LS.get('khatwa-ui', 'ar') === 'en' ? 'en' : 'ar';
  let theme = LS.get('khatwa-theme', 'paper');
  const THEMES = { paper: ['ورقي', 'Paper', '#f3eee3'], ocean: ['محيط', 'Ocean', '#e9f0f4'], forest: ['غابة', 'Forest', '#eceee1'], plum: ['برقوق', 'Plum', '#f0eaf1'], night: ['ليلي', 'Night', '#15130f'] };
  if (!THEMES[theme]) theme = 'paper';

  /* ---------- نصوص الواجهة الثابتة ---------- */
  const T = {
    'مختبر أساسيات البرمجة': 'Programming basics lab',
    'خُطوة': 'Khatwa',
    'خ': 'K',
    '8 مفاهيم · 4 لغات': '8 concepts · 4 languages',
    'المسار التعليمي': 'Learning path',
    'المفهوم البرمجي يبقى،': 'The concept stays,',
    'والصياغة تختلف من لغة للثانية.': 'the syntax changes from language to language.',
    'الكود': 'Code',
    'السطر المضيء هو الخطوة الحالية': 'The highlighted line is the current step',
    'مثال تعليمي': 'Teaching example',
    'شغّل الحركة': 'Play animation',
    'إيقاف': 'Pause',
    'خطوة تالية': 'Next step',
    'السرعة': 'Speed',
    'هادئة': 'Calm',
    'عادية': 'Normal',
    'سريعة': 'Fast',
    'شوف شنو يصير': 'See what happens',
    'المشهد يتحرك مع تنفيذ الكود': 'The scene moves as the code runs',
    'جاهز': 'Ready',
    'قيد الحركة': 'Running',
    'اكتمل المثال': 'Example finished',
    'حوّل الدرس إلى فكرة مشهد': 'Turn the lesson into a scene idea',
    'برومبت مرتب تقدر تنسخه إلى Google Flow': 'A tidy prompt you can copy into Google Flow',
    'جهّز برومبت Flow': 'Prepare Flow prompt',
    'برومبت المشهد': 'Scene prompt',
    'مبني على خطوات الدرس والقيم الحالية': 'Built from the lesson steps and current values',
    'نسخ': 'Copy',
    'الفكرة مشتركة بين لغات كثيرة؛ المثال هنا يوضحها بصياغة Python أو JavaScript أو Java أو C++.': 'The idea is shared across many languages; this example shows it in Python, JavaScript, Java or C++.',
    'تم إنشاء الموقع بواسطة المهندس محمد رشيد حميد ·': 'Site created by Eng. Mohammed Rasheed Hameed ·',
    'مختبر بصري': 'Visual lab',
    /* مشاهد */
    'جرّب اسمك': 'Try your name',
    'تطبيق': 'Apply',
    'كل اسم يرتبط بقيمة ونوع بيانات': 'Every name is tied to a value and a data type',
    'العدد الأول': 'First number',
    'الثاني': 'Second',
    'المقارنة': 'Compare with',
    'التعبير يحوّل قيمتين إلى نتيجة جديدة': 'The expression turns two values into a new result',
    'نجاح': 'Pass',
    'محاولة أخرى': 'Try again',
    'غيّر الدرجة': 'Change the grade',
    'عدد التكرارات (1–6)': 'Repetitions (1–6)',
    'كرّر إلى العدد': 'Repeat up to',
    'جرّب قيمة': 'Try a value',
    'الدالة تستقبل قيمة وترجع نتيجة إلى مكان الاستدعاء': 'The function takes a value and returns a result to where it was called',
    'غيّر القيم والفهرس وجرب': 'Change the values and the index, then try',
    'القيم (4 أعداد)': 'Values (4 numbers)',
    'الفهرس': 'Index',
    'أدخل أربعة أعداد وفهرسًا من 0 إلى 3': 'Enter four numbers and an index from 0 to 3',
    'اننسخ البرومبت — الصقه في Google Flow': 'Prompt copied — paste it into Google Flow'
  };
  const RX = [[/^الخطوة (\d+) من (\d+)$/, (m, a, b) => 'Step ' + a + ' of ' + b]];

  /* ---------- نصوص الدروس بالإنجليزي ---------- */
  const EN = {
    io: { title: 'Input and Output', group: 'Talking to the program', sub: 'A program takes in some information, processes it, then shows a result.', note: 'Most programs deal with data coming in and results going out. In Python we use <b>input()</b> to receive and <b>print()</b> to output.' },
    data: { title: 'Variables and Data Types', group: 'Storing information', sub: 'Names tie data to values so the program can use them.', note: 'A variable is a name for a value kept in memory. Text, numbers and booleans are different types, but storing a value under a name exists in many languages.' },
    operators: { title: 'Operators and Expressions', group: 'Processing information', sub: 'Operators turn values into a result or a decision.', note: 'A program applies arithmetic and comparisons to values. Adding and comparing work the same way even when some symbols or syntax rules differ.' },
    if: { title: 'Decisions: if / else', group: 'Choosing an execution path', sub: 'A condition decides which road the program takes.', note: 'A condition is an expression that is true or false. The program runs the <b>if</b> branch when it holds, otherwise it moves to <b>else</b>. Change the grade and try.' },
    for: { title: 'The for Loop', group: 'Repeating instructions', sub: 'A loop walks over items, or runs a fixed number of times.', note: 'A <b>for</b> loop repeats a block of instructions for each item or value. The example visits 1, 2 and 3; the same idea exists in many languages in different forms.' },
    while: { title: 'The while Loop', group: 'Repeating instructions', sub: 'The loop keeps working as long as the condition is true.', note: 'A <b>while</b> loop keeps repeating while its condition is true. Some value in the condition must change, or the loop never stops.' },
    function: { title: 'Functions and Results', group: 'Organising and reusing', sub: 'A function bundles instructions under a name, takes inputs and returns a result.', note: 'A function is a reusable piece. It receives a <b>parameter</b>, runs its steps, and can <b>return</b> a value the rest of the program uses.' },
    list: { title: 'Lists and Arrays', group: 'Grouping data', sub: 'Store several values in one collection and fetch one by its position.', note: 'A list or array stores a group of items under one name. We reach an item by its index; many languages count from zero.' }
  };
  const STEP = {
    'io:ask': () => 'The program asks for a name and waits for the user to type.',
    'io:receive': () => 'A value was entered, so it is stored in the variable name.',
    'io:answer': () => 'The program builds the message and shows it in the output window.',
    'data:name': () => 'The text Ali is stored in a variable called name.',
    'data:score': () => 'The number 92 is stored as a numeric value in score.',
    'data:passed': () => 'The boolean value records pass or fail: true or false.',
    'operators:combine': () => `The values ${labState.operandA} and ${labState.operandB} enter the addition.`,
    'operators:sum': () => `The operation produces a new value: ${labState.operandA + labState.operandB}.`,
    'operators:compare': () => { const s = labState.operandA + labState.operandB; return `The comparison asks: is ${s} greater than ${labState.threshold}? The result is ${s > labState.threshold ? 'True' : 'False'}.`; },
    'if:grade': () => `The grade ${grade} enters the variable grade.`,
    'if:check': () => 'The program checks whether the grade is 50 or more.',
    'if:route': () => 'The if path lights up when the condition is true; otherwise the else path does.',
    'for:begin': () => `The loop starts and prepares ${labState.loopLimit} repetitions.`,
    'for:one': s => `Repetition ${s.i}: i equals ${s.i}.`,
    'for:end': () => `There is no repetition after ${labState.loopLimit}; the loop ends.`,
    'while:set': () => 'The counter starts at 1.',
    'while:test': s => `The condition is true: ${s.n} is less than or equal to ${labState.loopLimit}.`,
    'while:print': s => `Prints ${s.n}, then increases the counter.`,
    'while:stop': s => `At ${s.n} the condition becomes false; the loop stops.`,
    'function:call': () => `The program calls the function and sends ${labState.functionInput} as the input.`,
    'function:process': () => 'Inside the function, the number goes through the × 2 operation.',
    'function:return': () => `The function returns ${labState.functionInput * 2} to the variable answer.`,
    'list:fill': () => 'Four values are placed in a collection called scores.',
    'list:select': () => `The pointer moves to index ${labState.listIndex}, which is item number ${labState.listIndex + 1}.`,
    'list:read': () => `The program reads the selected value: ${labState.listValues[labState.listIndex]}.`
  };
  lessons.forEach(l => { const e = EN[l.id]; if (e) { T[l.title] = e.title; T[l.group] = e.group; T[l.subtitle] = e.sub; } });

  /* ---------- مترجم النصوص ---------- */
  const seen = new WeakMap();
  function trText(s) {
    const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const core = m[2];
    if (!core) return s;
    let out = T[core];
    if (out === undefined) { for (const [re, fn] of RX) { const r = core.match(re); if (r) { out = fn(...r); break; } } }
    return out === undefined ? s : m[1] + out + m[3];
  }
  let sweeping = false;
  function sweep(root) {
    if (sweeping) return;
    sweeping = true;
    try {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(n) {
          const p = n.parentElement;
          if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName) || p.closest('#codeContent,#exercises,.terminal,#promptText')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      let n;
      while ((n = w.nextNode())) {
        const cur = n.nodeValue, e = seen.get(n);
        const orig = e && cur === e.shown ? e.orig : cur;
        const target = ui === 'en' ? trText(orig) : orig;
        if (target !== cur) n.nodeValue = target;
        seen.set(n, { orig, shown: target });
      }
    } finally { sweeping = false; }
  }

  /* ---------- التمارين ---------- */
  const EX = {
    io: [
      { ar: 'إذا كان <code>name = "Sara"</code>، ماذا يطبع <code>print("Hello, " + name)</code>؟', en: 'If <code>name = "Sara"</code>, what does <code>print("Hello, " + name)</code> print?', o: ['Hello, Sara', 'Hello, name', 'Hello,Sara', 'Sara'], a: 0, ea: 'علامة + تلصق النص بقيمة المتغير، مو باسمه.', ee: 'The + joins the text with the variable\'s value, not its name.' },
      { ar: 'أي دالة في Python تستقبل نصاً من المستخدم؟', en: 'Which Python function reads text from the user?', o: ['print()', 'input()', 'len()', 'range()'], a: 1, ea: 'input() تنتظر المستخدم وترجع اللي كتبه.', ee: 'input() waits for the user and returns what was typed.' }
    ],
    data: [
      { ar: 'ما نوع القيمة <code>92</code>؟', en: 'What is the type of <code>92</code>?', o: ['str', 'int', 'bool'], a: 1, ea: 'عدد صحيح بدون علامات اقتباس.', ee: 'A whole number with no quotes.' },
      { ar: 'ما نوع القيمة <code>"92"</code> (بين علامتي اقتباس)؟', en: 'What is the type of <code>"92"</code> (inside quotes)?', o: ['int', 'bool', 'str'], a: 2, ea: 'أي شي بين اقتباس هو نص حتى لو شكله رقم.', ee: 'Anything in quotes is text, even if it looks like a number.' }
    ],
    operators: [
      { ar: 'ما نتيجة <code>7 + 5 &gt; 10</code>؟', en: 'What is the result of <code>7 + 5 &gt; 10</code>?', o: ['True', 'False', '12', 'Error'], a: 0, ea: '7 + 5 = 12 و12 أكبر من 10، فالنتيجة True.', ee: '7 + 5 = 12 and 12 is greater than 10, so the result is True.' },
      { ar: 'ما نتيجة <code>3 * 4 == 12</code>؟', en: 'What is the result of <code>3 * 4 == 12</code>?', o: ['True', 'False'], a: 0, ea: '== يقارن، و3 × 4 يساوي 12 فعلاً.', ee: '== compares, and 3 × 4 really equals 12.' }
    ],
    if: [
      { ar: 'إذا كانت <code>grade = 45</code> والشرط <code>grade &gt;= 50</code>، أي فرع ينفذ؟', en: 'If <code>grade = 45</code> and the condition is <code>grade &gt;= 50</code>, which branch runs?', o: { ar: ['if', 'else', 'الفرعان معاً', 'لا شي'], en: ['if', 'else', 'Both', 'Neither'] }, a: 1, ea: '45 أقل من 50، فالشرط خطأ وينفذ else.', ee: '45 is below 50, so the condition is false and else runs.' },
      { ar: 'إذا كانت <code>grade = 50</code> والشرط <code>grade &gt;= 50</code>، ماذا يطبع؟', en: 'If <code>grade = 50</code> and the condition is <code>grade &gt;= 50</code>, what prints?', o: ['Pass', 'Try again'], a: 0, ea: 'علامة &gt;= تشمل التساوي، فـ50 تنجح.', ee: '&gt;= includes equality, so 50 passes.' }
    ],
    for: [
      { ar: 'كم مرة تنفذ <code>for i in range(1, 4)</code>؟', en: 'How many times does <code>for i in range(1, 4)</code> run?', o: ['2', '3', '4', '5'], a: 1, ea: 'تمر على 1 و2 و3؛ الرقم 4 ما يدخل.', ee: 'It visits 1, 2 and 3; the 4 is not included.' },
      { ar: 'ما آخر قيمة تطبعها <code>for (let i = 1; i &lt;= 3; i++)</code>؟', en: 'What is the last value printed by <code>for (let i = 1; i &lt;= 3; i++)</code>?', o: ['2', '3', '4'], a: 1, ea: 'الشرط &lt;= يشمل 3، وبعدها i تصير 4 فتتوقف.', ee: 'The &lt;= includes 3; then i becomes 4 and the loop stops.' }
    ],
    while: [
      { ar: '<code>count = 1</code> ثم while <code>count &lt;= 3</code> مع <code>count += 1</code>. كم رقماً يطبع؟', en: '<code>count = 1</code>, then while <code>count &lt;= 3</code> with <code>count += 1</code>. How many numbers print?', o: ['2', '3', '4'], a: 1, ea: 'يطبع 1 و2 و3 ثم يتوقف.', ee: 'It prints 1, 2 and 3, then stops.' },
      { ar: 'ماذا يصير لو حذفنا <code>count += 1</code>؟', en: 'What happens if we delete <code>count += 1</code>?', o: { ar: ['تتوقف بعد 3', 'تتكرر للأبد', 'خطأ في الكتابة'], en: ['Stops after 3', 'Repeats forever', 'Syntax error'] }, a: 1, ea: 'القيمة ما تتغير، فالشرط يبقى صحيح دائماً.', ee: 'The value never changes, so the condition stays true forever.' }
    ],
    function: [
      { ar: 'الدالة <code>double(number)</code> ترجع <code>number * 2</code>. ماذا ترجع <code>double(7)</code>؟', en: 'The function <code>double(number)</code> returns <code>number * 2</code>. What does <code>double(7)</code> return?', o: ['7', '14', '27', '2'], a: 1, ea: '7 × 2 = 14.', ee: '7 × 2 = 14.' },
      { ar: 'أي كلمة في Python ترجع نتيجة من الدالة؟', en: 'Which Python keyword sends a result back from a function?', o: ['print', 'return', 'def', 'input'], a: 1, ea: 'return تنهي الدالة وترجع القيمة لمكان الاستدعاء.', ee: 'return ends the function and hands the value back to the caller.' }
    ],
    list: [
      { ar: '<code>scores = [4, 9, 2, 7]</code>. ماذا يعطي <code>scores[3]</code>؟', en: '<code>scores = [4, 9, 2, 7]</code>. What does <code>scores[3]</code> give?', o: ['2', '7', '9', '4'], a: 1, ea: 'العد يبدأ من 0، فالفهرس 3 هو العنصر الرابع: 7.', ee: 'Counting starts at 0, so index 3 is the fourth item: 7.' },
      { ar: 'ما فهرس أول عنصر في القائمة؟', en: 'What is the index of the first item in a list?', o: ['0', '1', '-1', '2'], a: 0, ea: 'أغلب اللغات تبدأ الفهرسة من الصفر.', ee: 'Most languages start indexing at zero.' }
    ]
  };
  const EXTXT = {
    title: ['تمارين الدرس', 'Lesson exercises'],
    sub: ['جرّب نفسك قبل ما تنتقل للدرس الجاي', 'Test yourself before moving on'],
    wrong: ['مو صحيح، جرّب مرة ثانية.', 'Not quite, try again.'],
    right: ['صحيح! ', 'Correct! ']
  };
  const tx = k => EXTXT[k][ui === 'en' ? 1 : 0];
  const loadDone = () => { try { return JSON.parse(LS.get('khatwa-done', '{}')) || {}; } catch (e) { return {}; } };
  const done = loadDone();
  const saveDone = () => LS.set('khatwa-done', JSON.stringify(done));
  const doneCount = id => Object.keys(done[id] || {}).length;

  function renderExercises() {
    const id = current.id, list = EX[id] || [];
    $('exTitle').textContent = tx('title');
    $('exSub').textContent = tx('sub');
    $('exBody').innerHTML = list.map((q, qi) => {
      const opts = Array.isArray(q.o) ? q.o : q.o[ui];
      const solved = !!(done[id] && done[id][qi]);
      return `<div class="ex" data-q="${qi}"><p class="ex-q">${q[ui]}</p><div class="ex-opts">${opts.map((o, oi) => `<button type="button" class="btn ex-opt${solved && oi === q.a ? ' ok' : ''}" data-i="${oi}"${solved ? ' disabled' : ''}>${o}</button>`).join('')}</div><p class="ex-fb${solved ? ' ok' : ''}" role="status">${solved ? '✓ ' + (ui === 'en' ? q.ee : q.ea) : ''}</p></div>`;
    }).join('');
    updateScore();
  }
  function updateScore() {
    const n = (EX[current.id] || []).length;
    $('exScore').textContent = doneCount(current.id) + ' / ' + n;
    markDone();
  }
  function markDone() {
    document.querySelectorAll('.lesson-link').forEach(b => {
      const n = (EX[b.dataset.lesson] || []).length;
      b.classList.toggle('done', n > 0 && doneCount(b.dataset.lesson) >= n);
    });
  }
  $('exBody').addEventListener('click', e => {
    const btn = e.target.closest('.ex-opt');
    if (!btn || btn.disabled) return;
    const box = btn.closest('.ex'), qi = +box.dataset.q, oi = +btn.dataset.i;
    const q = EX[current.id][qi], fb = box.querySelector('.ex-fb');
    if (oi === q.a) {
      btn.classList.add('ok');
      box.querySelectorAll('.ex-opt').forEach(b => { b.disabled = true; });
      fb.className = 'ex-fb ok';
      fb.innerHTML = '✓ ' + tx('right') + (ui === 'en' ? q.ee : q.ea);
      (done[current.id] = done[current.id] || {})[qi] = true;
      saveDone();
      updateScore();
    } else {
      btn.classList.add('bad');
      btn.disabled = true;
      fb.className = 'ex-fb bad';
      fb.textContent = '✗ ' + tx('wrong');
    }
  });

  /* ---------- ربط مع app.js ---------- */
  let exLesson = null;
  const baseRender = render, baseNav = renderNav;
  function after() {
    if (ui === 'en') {
      const L = EN[current.id];
      if (L) $('conceptNote').innerHTML = L.note;
      const steps = getSteps(), st = steps[Math.min(stepIndex, steps.length - 1)];
      const fn = STEP[current.id + ':' + st.scene];
      if (fn) $('stepExplanation').textContent = fn(st);
    }
    sweep(document.body);
    if (exLesson !== current.id) { exLesson = current.id; renderExercises(); }
  }
  render = function () { baseRender.apply(this, arguments); after(); };
  renderNav = function () { baseNav.apply(this, arguments); sweep($('lessonNav')); markDone(); };

  /* توست: يترجم لما يتغير نصه */
  ['toast', 'playBtn', 'runState'].forEach(id => new MutationObserver(() => { if (ui === 'en') sweep($(id)); }).observe($(id), { childList: true, characterData: true, subtree: true }));

  /* ---------- لغة الواجهة ---------- */
  function applyChrome() {
    const root = document.documentElement;
    root.lang = ui; root.dir = ui === 'en' ? 'ltr' : 'rtl';
    $('uiToggle').textContent = ui === 'en' ? 'عربي' : 'EN';
    $('uiToggle').setAttribute('aria-label', ui === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
    document.title = ui === 'en' ? 'Khatwa | Programming Basics Lab' : 'خُطوة | مختبر أساسيات البرمجة';
    $('resetBtn').title = ui === 'en' ? 'Restart lesson' : 'إعادة الدرس';
    $('themes').setAttribute('aria-label', ui === 'en' ? 'Site colours' : 'ألوان الموقع');
    document.querySelectorAll('.swatch').forEach(b => { b.title = THEMES[b.dataset.pick][ui === 'en' ? 1 : 0]; b.setAttribute('aria-label', b.title); });
  }
  function setUI(next) {
    ui = next; LS.set('khatwa-ui', ui);
    applyChrome(); exLesson = null;
    renderNav(); render();
  }
  $('uiToggle').addEventListener('click', () => setUI(ui === 'en' ? 'ar' : 'en'));

  /* ---------- ألوان الموقع ---------- */
  function setTheme(t) {
    theme = THEMES[t] ? t : 'paper'; LS.set('khatwa-theme', theme);
    if (theme === 'paper') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = THEMES[theme][2];
    document.querySelectorAll('.swatch').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.pick === theme)));
  }
  document.querySelectorAll('.swatch').forEach(b => b.addEventListener('click', () => setTheme(b.dataset.pick)));

  setTheme(theme); applyChrome(); exLesson = null; renderNav(); render();
})();
