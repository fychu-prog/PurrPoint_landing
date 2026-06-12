(function () {
  var DEFAULT_LANG = 'zh-TW';
  var lang = new URLSearchParams(window.location.search).get('lang') || DEFAULT_LANG;

  // Default language is baked into the HTML — no fetch needed
  if (lang === DEFAULT_LANG) return;

  function getVal(obj, path) {
    return path.split('.').reduce(function (acc, k) {
      return acc != null ? acc[k] : undefined;
    }, obj);
  }

  function apply(t) {
    window.__t = t;
    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getVal(t, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    // innerHTML (for content with tags like <strong>, <br>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getVal(t, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });
    // placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = getVal(t, el.getAttribute('data-i18n-placeholder'));
      if (val !== undefined) el.placeholder = val;
    });
    // aria-label attribute
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = getVal(t, el.getAttribute('data-i18n-aria'));
      if (val !== undefined) el.setAttribute('aria-label', val);
    });
    // page <title>
    if (t.meta && t.meta.title) document.title = t.meta.title;
    // meta description
    if (t.meta && t.meta.description) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
    }
    // html lang attribute
    var langMap = { 'en': 'en', 'ja': 'ja', 'ko': 'ko' };
    document.documentElement.lang = langMap[lang] || 'zh-Hant';
  }

  fetch('translations/' + lang + '.json')
    .then(function (r) {
      if (!r.ok) throw new Error('Not found');
      return r.json();
    })
    .then(apply)
    .catch(function (e) {
      console.warn('[i18n] Failed to load language:', lang, e);
    });
})();
