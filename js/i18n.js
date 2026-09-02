/* ============================================================
   i18n ENGINE - التبديل الفوري للغة عبر القاموس المركزي
   - يطبّق بيانات data-i18n على النصوص
   - يعيد رسم الأجزاء الديناميكية (كروت الأفرع، جداول المواد)
   - يحفظ اختيار اللغة ويعيّن اتجاه الصفحة
   ============================================================ */

/* توطين الأرقام والمسميات المختصرة حسب اللغة */
(function () {
  window.LANG = localStorage.getItem('lang') || 'ar';
})();

function currentLang() {
  return window.LANG || 'ar';
}

function switchLanguage(lang) {
  window.LANG = lang === 'en' ? 'en' : 'ar';
  localStorage.setItem('lang', window.LANG);
  applyLanguage();
}

function toggleLanguage() {
  switchLanguage(currentLang() === 'ar' ? 'en' : 'ar');
}

/* تطبيق اللغة على الصفحة كاملة */
function applyLanguage() {
  const lang = currentLang();
  const isAr = lang === 'ar';

  // سمة الصفحة والاتجاه
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // زر اللغة
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = tr('lang.label');

  // النصوص الثابتة
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = tr(key);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const parts = el.getAttribute('data-i18n-attr').split('|');
    if (parts.length === 2) el.setAttribute(parts[0], tr(parts[1]));
  });

  // العناصر الديناميكية حسب الصفحة
  const page = document.body.getAttribute('data-page');
  if (page === 'home') renderDeptCards();
  if (page === 'department') renderDepartment();
  if (page === 'guide') renderGuideComparison();
  if (page === 'robotics') renderRoboticsDynamics();
  if (page === 'union') renderUnionDynamics();
  if (page === 'compare') initCompareSelects();
  if (page === 'quiz') showSavedResult();

  // تحديث عنوان الصفحة
  const titleEl = document.querySelector('title[data-page-title]');
  if (titleEl) document.title = tr(titleEl.dataset.pageTitle);
}

/* ---------- الرئيسية: كروت الأفرع ---------- */
function deptUrl(slug) {
  const inDept = location.pathname.includes('/departments/');
  return (inDept ? '../departments/' : './departments/') + slug + '.html';
}
function renderDeptCards() {
  const grid = document.getElementById('dept-cards');
  if (!grid) return;
  grid.innerHTML = '';
  DEPARTMENTS.forEach((d, idx) => {
    const a = document.createElement('a');
    a.className = 'dept-card animate-in';
    a.href = deptUrl(d.slug);
    a.style.setProperty('--dept-color', d.color);
    a.innerHTML =
      '<div class="dept-card-icon">' + d.icon + '</div>' +
      '<h3>' + d.title[lang()] + '</h3>' +
      '<p>' + d.tagline[lang()] + '</p>' +
      '<span class="dept-card-link">' + tr('card.explore') + ' <span class="dept-card-arrow">&#8592;</span></span>';
    grid.appendChild(a);
  });
  requestAnimationFrame(() => initScrollAnimations());
}

function lang() {
  return currentLang();
}

/* ---------- صفحة الفرع ---------- */
function renderDepartment() {
  const slug = document.body.getAttribute('data-department');
  const d = DEPARTMENTS.find((x) => x.slug === slug);
  if (!d) return;
  const L = lang();

  const headerIcon = document.getElementById('dept-header-icon');
  const headerTitle = document.getElementById('dept-header-title');
  const headerTag = document.getElementById('dept-header-tag');
  if (headerIcon) { headerIcon.innerHTML = d.icon; headerIcon.style.setProperty('--dept-color', d.color); }
  if (headerTitle) headerTitle.textContent = d.title[L];
  if (headerTag) headerTag.textContent = d.tagline[L];
  document.title = d.title[L] + ' | ' + tr('nav.brand');

  const aboutTitle = document.getElementById('dept-about-title');
  const aboutText = document.getElementById('dept-about-text');
  if (aboutTitle) aboutTitle.textContent = tr('dept.whatIs');
  if (aboutText) aboutText.textContent = d.about[L];

  const studyName = document.getElementById('dept-study-name');
  if (studyName) studyName.textContent = d.name[L];

  const careersTitle = document.getElementById('dept-careers-title');
  if (careersTitle) careersTitle.textContent = tr('dept.careers');

  const careersList = document.getElementById('dept-careers-list');
  if (careersList) {
    careersList.innerHTML = '';
    d.careers[L].forEach((c) => {
      const item = document.createElement('div');
      item.className = 'info-list-item';
      item.innerHTML =
        '<div class="info-list-icon">' + c.icon + '</div>' +
        '<div><strong>' + c.title + '</strong>' +
        '<p style="color:var(--text-secondary);font-size:0.875rem">' + c.text + '</p></div>';
      careersList.appendChild(item);
    });
  }

  renderStudyPlan(d, L);
}

/* ---------- جدول الخطة الدراسية 5 سنوات ---------- */
function renderStudyPlan(d, L) {
  const container = document.getElementById('study-plan');
  if (!container) return;
  container.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'study-plan-years';

  d.years.forEach((yr, yi) => {
    const col = document.createElement('div');
    col.className = 'year-column';
    col.style.setProperty('--dept-color', d.color);
    col.innerHTML =
      '<div class="year-header">' + tr('dept.year') + ' ' + (yi + 1) + '</div>' +
      renderSemester(yr[0], tr('dept.semester1'), d.color) +
      renderSemester(yr[1], tr('dept.semester2'), d.color);
    wrap.appendChild(col);
  });

  container.appendChild(wrap);
}

function renderSemester(courses, title, color) {
  let html = '<div class="semester"><div class="semester-title">' + title + '</div><div class="semester-courses">';
  courses.forEach((c) => {
    html += '<div class="course-item">' + cName(c) + '</div>';
  });
  html += '</div></div>';
  return html;
}

/* ---------- دليل الاختيار: بطاقات المقارنة ---------- */
function renderGuideComparison() {
  const grid = document.getElementById('guide-comparison');
  if (!grid) return;
  grid.innerHTML = '';
  DEPARTMENTS.forEach((d) => {
    const card = document.createElement('div');
    card.className = 'comparison-card animate-in';
    card.style.setProperty('--dept-color', d.color);
    const bullets = d.guide[lang()];
    const listHtml = bullets.map((b) => '<li>' + b + '</li>').join('');
    card.innerHTML =
      '<h4>' + d.title[lang()] + '</h4>' +
      '<ul class="comparison-list">' + listHtml + '</ul>' +
      '<a href="' + deptUrl(d.slug) + '" class="dept-card-link">' +
      tr('guide.compare.link') + ' <span class="dept-card-arrow">&#8592;</span></a>';
    grid.appendChild(card);
  });
  requestAnimationFrame(() => initScrollAnimations());
}

/* ---------- الهيئة والروبوتيك: القوائم الديناميكية ---------- */
function renderUnionDynamics() {
  const list = document.getElementById('union-list');
  if (!list) return;
  list.innerHTML = '';
  const items = [
    [tr('union.s1'), tr('union.s1text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>'],
    [tr('union.s2'), tr('union.s2text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>'],
    [tr('union.s3'), tr('union.s3text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'],
    [tr('union.s4'), tr('union.s4text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>']
  ];
  items.forEach((it) => {
    const item = document.createElement('div');
    item.className = 'info-list-item';
    item.innerHTML = '<div class="info-list-icon">' + it[2] + '</div><div><strong>' + it[0] + '</strong><p style="color:var(--text-secondary);font-size:0.875rem">' + it[1] + '</p></div>';
    list.appendChild(item);
  });

  const join = document.getElementById('union-join');
  if (!join) return;
  join.innerHTML = '';
  const joins = [
    ['1', tr('union.j1'), tr('union.j1text')],
    ['2', tr('union.j2'), tr('union.j2text')],
    ['3', tr('union.j3'), tr('union.j3text')]
  ];
  joins.forEach((j) => {
    const item = document.createElement('div');
    item.className = 'info-list-item';
    item.innerHTML = '<div class="info-list-icon">' + j[0] + '</div><div><strong>' + j[1] + '</strong><p style="color:var(--text-secondary);font-size:0.875rem">' + j[2] + '</p></div>';
    join.appendChild(item);
  });
}

function renderRoboticsDynamics() {
  const list = document.getElementById('robotics-list');
  if (!list) return;
  list.innerHTML = '';
  const items = [
    [tr('robotics.p1'), tr('robotics.p1text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><path d="M9 4h6"/><circle cx="8.5" cy="13.5" r="1"/><circle cx="15.5" cy="13.5" r="1"/><path d="M9 16.5h6"/></svg>'],
    [tr('robotics.p2'), tr('robotics.p2text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>'],
    [tr('robotics.p3'), tr('robotics.p3text'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>']
  ];
  items.forEach((it) => {
    const item = document.createElement('div');
    item.className = 'info-list-item';
    item.innerHTML = '<div class="info-list-icon">' + it[2] + '</div><div><strong>' + it[0] + '</strong><p style="color:var(--text-secondary);font-size:0.875rem">' + it[1] + '</p></div>';
    list.appendChild(item);
  });

  const join = document.getElementById('robotics-join');
  if (!join) return;
  join.innerHTML = '';
  const joins = [
    ['1', tr('robotics.j1'), tr('robotics.j1text')],
    ['2', tr('robotics.j2'), tr('robotics.j2text')],
    ['3', tr('robotics.j3'), tr('robotics.j3text')],
    ['4', tr('robotics.j4'), tr('robotics.j4text')]
  ];
  joins.forEach((j) => {
    const item = document.createElement('div');
    item.className = 'info-list-item';
    item.innerHTML = '<div class="info-list-icon">' + j[0] + '</div><div><strong>' + j[1] + '</strong><p style="color:var(--text-secondary);font-size:0.875rem">' + j[2] + '</p></div>';
    join.appendChild(item);
  });

  const projTitle = document.getElementById('robotics-projects-title');
  if (projTitle) projTitle.textContent = tr('robotics.projects');
}

/* تهيئة اللغة عند التحميل */
document.addEventListener('DOMContentLoaded', () => {
  if (window.__i18nInited) return;
  window.__i18nInited = true;
  applyLanguage();
});

/* ============================================================
   QUIZ - اختبار تخصصك
   ============================================================ */
let quizCurrent = 0;
let quizAnswers = []; /* كل عنصر: مصفوفة من الفهارس المختارة [] */

function startQuiz() {
  quizCurrent = 0;
  quizAnswers = [];
  for (let i = 0; i < QUIZ_QUESTIONS.length; i++) quizAnswers.push([]);
  localStorage.removeItem('quiz_result');
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[quizCurrent];
  const L = lang();
  const total = QUIZ_QUESTIONS.length;
  const area = document.getElementById('quiz-question-area');
  const progressBar = document.getElementById('quiz-progress-bar');
  const progressText = document.getElementById('quiz-progress-text');
  const nextBtn = document.getElementById('quiz-next-btn');
  const prevBtn = document.getElementById('quiz-prev-btn');

  progressBar.style.width = ((quizCurrent + 1) / total * 100) + '%';
  progressText.textContent = (quizCurrent + 1) + '/' + total;
  nextBtn.textContent = quizCurrent === total - 1 ? tr('quiz.finish') : tr('quiz.next');
  nextBtn.disabled = quizAnswers[quizCurrent].length === 0;
  prevBtn.style.display = quizCurrent > 0 ? 'inline-flex' : 'none';

  let optionsHtml = '';
  q.options.forEach((opt, i) => {
    const selected = quizAnswers[quizCurrent].includes(i) ? ' quiz-option-selected' : '';
    optionsHtml += '<button class="quiz-option' + selected + '" onclick="toggleQuizOption(' + i + ')">' +
      '<span class="quiz-option-check">' + (quizAnswers[quizCurrent].includes(i) ? '&#10003;' : '') + '</span>' +
      '<span class="quiz-option-text">' + opt[L] + '</span>' +
      '</button>';
  });

  const selectedCount = quizAnswers[quizCurrent].length;
  const hintHtml = '<p class="quiz-hint">' + (L === 'ar' ? 'اختر 1 إلى 3 خيارات' : 'Choose 1 to 3 options') +
    (selectedCount > 0 ? ' — ' + selectedCount + '/3' : '') + '</p>';

  area.innerHTML = '<div class="quiz-question">' +
    '<h3 class="quiz-question-text">' + q[L] + '</h3>' +
    hintHtml +
    '<div class="quiz-options">' + optionsHtml + '</div>' +
    '</div>';
}

function toggleQuizOption(idx) {
  const arr = quizAnswers[quizCurrent];
  const pos = arr.indexOf(idx);
  if (pos > -1) {
    arr.splice(pos, 1);
  } else if (arr.length < 3) {
    arr.push(idx);
  }
  renderQuizQuestion();
}

function prevQuestion() {
  if (quizCurrent > 0) {
    quizCurrent--;
    renderQuizQuestion();
  }
}

function nextQuestion() {
  if (quizAnswers[quizCurrent].length === 0) return;
  if (quizCurrent < QUIZ_QUESTIONS.length - 1) {
    quizCurrent++;
    renderQuizQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById('quiz-questions').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const scores = {};
  DEPARTMENTS.forEach((d) => { scores[d.slug] = 0; });

  let totalSelections = 0;
  quizAnswers.forEach((ansArr, qIdx) => {
    ansArr.forEach((ansIdx) => {
      const dept = QUIZ_QUESTIONS[qIdx].options[ansIdx].dept;
      scores[dept] = (scores[dept] || 0) + 1;
      totalSelections++;
    });
  });

  const maxScore = Math.max(...Object.values(scores));
  const L = lang();
  const sorted = DEPARTMENTS.map((d) => ({ slug: d.slug, name: d.name[L], title: d.title[L], score: scores[d.slug] }))
    .sort((a, b) => b.score - a.score);

  /* حفظ النتيجة في localStorage */
  const resultData = { sorted: sorted.map((s) => ({ slug: s.slug, score: s.score })), totalSelections, topSlug: sorted[0].slug, lang: L, date: Date.now() };
  localStorage.setItem('quiz_result', JSON.stringify(resultData));

  renderQuizResult(sorted, totalSelections, maxScore, L);
}

function renderQuizResult(sorted, totalSelections, maxScore, L) {
  let barsHtml = '';
  sorted.forEach((s, i) => {
    const pct = totalSelections > 0 ? Math.round((s.score / totalSelections) * 100) : 0;
    barsHtml += '<div class="quiz-bar-row">' +
      '<div class="quiz-bar-label">' + s.title + '</div>' +
      '<div class="quiz-bar-track"><div class="quiz-bar-fill" data-pct="' + pct + '" style="width:0%"></div></div>' +
      '<div class="quiz-bar-pct">' + pct + '%</div>' +
      '</div>';
  });

  const topDept = DEPARTMENTS.find((d) => d.slug === sorted[0].slug);

  document.getElementById('quiz-result').innerHTML =
    '<div class="quiz-result-card">' +
      '<div class="quiz-result-badge">' + tr('quiz.resultTitle') + '</div>' +
      '<div class="quiz-result-dept">' + sorted[0].name + '</div>' +
      '<div class="quiz-result-pct">' + (totalSelections > 0 ? Math.round((maxScore / totalSelections) * 100) : 0) + '% ' + tr('quiz.match') + '</div>' +
      '<p class="quiz-result-desc">' + (topDept ? topDept.tagline[L] : '') + '</p>' +
      '<div class="quiz-result-disclaimer">' + tr('quiz.disclaimer') + '</div>' +
      '<div class="quiz-result-bars">' + barsHtml + '</div>' +
      '<div class="quiz-result-actions">' +
        (topDept ? '<a href="' + deptUrl(topDept.slug) + '" class="btn btn-primary">' + tr('quiz.viewDept') + '</a>' : '') +
        '<button class="btn btn-outline" onclick="retakeQuiz()">' + tr('quiz.retake') + '</button>' +
      '</div>' +
    '</div>';

  /* أنيميشن الأعمدة بعد الرسم */
  requestAnimationFrame(() => {
    document.querySelectorAll('.quiz-bar-fill').forEach((bar) => {
      bar.style.width = bar.getAttribute('data-pct') + '%';
    });
  });
}

/* عرض النتيجة المحفوظة */
function showSavedResult() {
  const raw = localStorage.getItem('quiz_result');
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (!data.sorted || !data.topSlug) return false;

    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    const L = lang();
    const sorted = data.sorted.map((s) => {
      const dept = DEPARTMENTS.find((d) => d.slug === s.slug);
      return { slug: s.slug, name: dept ? dept.name[L] : s.slug, title: dept ? dept.title[L] : s.slug, score: s.score };
    });
    const maxScore = sorted[0].score;
    renderQuizResult(sorted, data.totalSelections, maxScore, L);
    return true;
  } catch (e) { return false; }
}

function retakeQuiz() {
  localStorage.removeItem('quiz_result');
  document.getElementById('quiz-start').style.display = 'block';
  document.getElementById('quiz-questions').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
}

/* ============================================================
   COMPARE - مقارنة الأفرع
   ============================================================ */
let compareSelected = { 1: '', 2: '' };

function initCompareSelects() {
  const L = lang();
  [1, 2].forEach((n) => {
    const grid = document.getElementById('compare-grid-' + n);
    if (!grid) return;
    grid.innerHTML = '';
    DEPARTMENTS.forEach((d) => {
      const card = document.createElement('div');
      card.className = 'compare-picker-card' + (compareSelected[n] === d.slug ? ' selected' : '');
      card.setAttribute('data-slug', d.slug);
      card.onclick = function () { selectCompareOption(n, d.slug); };
      card.innerHTML = '<div class="compare-picker-card-icon">' + d.icon + '</div><div class="compare-picker-card-name">' + d.name[L] + '</div>';
      grid.appendChild(card);
    });
  });
}

function selectCompareOption(n, slug) {
  compareSelected[n] = slug;
  initCompareSelects();
  renderComparison();
}

function renderComparison() {
  const slug1 = compareSelected[1];
  const slug2 = compareSelected[2];
  const result = document.getElementById('compare-result');
  if (!result) return;

  if (!slug1 || !slug2) { result.innerHTML = ''; return; }
  if (slug1 === slug2) { result.innerHTML = '<p class="text-center" style="color:var(--text-muted);padding:var(--space-2xl) 0">' + tr('compare.noDiff') + '</p>'; return; }

  const d1 = DEPARTMENTS.find((d) => d.slug === slug1);
  const d2 = DEPARTMENTS.find((d) => d.slug === slug2);
  if (!d1 || !d2) return;
  const L = lang();

  // Common courses
  const allCourses1 = new Set();
  const allCourses2 = new Set();
  d1.years.forEach((yr) => yr.forEach((sem) => sem.forEach((c) => allCourses1.add(c))));
  d2.years.forEach((yr) => yr.forEach((sem) => sem.forEach((c) => allCourses2.add(c))));
  const common = [...allCourses1].filter((c) => allCourses2.has(c));
  const only1 = [...allCourses1].filter((c) => !allCourses2.has(c));
  const only2 = [...allCourses2].filter((c) => !allCourses1.has(c));

  function buildCol(d) {
    const careers = d.careers[L];
    let careersHtml = careers.map((c) =>
      '<div class="compare-career-item">' +
        '<div class="compare-career-icon">' + c.icon + '</div>' +
        '<div><strong>' + c.title + '</strong><br><span style="color:var(--text-muted);font-size:0.75rem">' + c.text + '</span></div>' +
      '</div>'
    ).join('');

    let guideHtml = d.guide[L].map((g) => '<li>' + g + '</li>').join('');

    return '<div class="compare-col">' +
      '<div class="compare-col-header" style="--dept-color:' + d.color + '">' +
        '<div class="compare-col-icon">' + d.icon + '</div>' +
        '<div class="compare-col-name">' + d.name[L] + '</div>' +
        '<div class="compare-col-tagline">' + d.tagline[L] + '</div>' +
      '</div>' +
      '<div class="compare-section"><div class="compare-section-label">' + tr('compare.about') + '</div><p>' + d.about[L] + '</p></div>' +
      '<div class="compare-section"><div class="compare-section-label">' + tr('compare.careers') + '</div>' + careersHtml + '</div>' +
      '<div class="compare-section"><div class="compare-section-label">' + tr('compare.guide') + '</div><ul class="comparison-list">' + guideHtml + '</ul></div>' +
    '</div>';
  }

  let commonHtml = common.length > 0
    ? '<div class="compare-common-list">' + common.map((c) => '<span class="compare-course-tag">' + cName(c) + '</span>').join('') + '</div>'
    : '<p style="color:var(--text-muted)">' + tr('compare.noDiff') + '</p>';

  let diffHtml = '<div class="compare-diff-grid">';
  diffHtml += '<div class="compare-diff-col"><h5>' + d1.title[L] + '</h5><ul>' + only1.slice(0, 8).map((c) => '<li>' + cName(c) + '</li>').join('') + '</ul></div>';
  diffHtml += '<div class="compare-diff-col"><h5>' + d2.title[L] + '</h5><ul>' + only2.slice(0, 8).map((c) => '<li>' + cName(c) + '</li>').join('') + '</ul></div>';
  diffHtml += '</div>';

  result.innerHTML =
    '<div class="compare-grid-2">' +
      buildCol(d1) +
      buildCol(d2) +
    '</div>' +
    '<div class="compare-shared">' +
      '<h4>' + tr('compare.courses') + ' <span class="compare-count">' + common.length + '</span></h4>' +
      commonHtml +
    '</div>' +
    '<div class="compare-unique">' +
      '<h4>' + tr('compare.diff') + '</h4>' +
      diffHtml +
    '</div>';
}