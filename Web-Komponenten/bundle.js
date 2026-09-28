/* @ds-bundle: {"format":4,"namespace":"Copilotenschule","components":[{"name":"Button"},{"name":"StripeKick"},{"name":"StripeRule"},{"name":"Eyebrow"},{"name":"RaceNumber"},{"name":"Tag"},{"name":"NavBar"},{"name":"Hero"},{"name":"CourseCard"},{"name":"StatTile"},{"name":"Testimonial"},{"name":"Accordion"},{"name":"TextField"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.slice.call(arguments).filter(Boolean).join(' '); }

  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var rest = Object.assign({}, p); delete rest.variant; delete rest.size; delete rest.arrow; delete rest.className; delete rest.children; delete rest.href;
    var inner = [h('span', { key: 't', className: 'cs-btn__label' }, p.children), p.arrow ? h('span', { key: 'a', className: 'cs-btn__arrow', 'aria-hidden': 'true' }, '→') : null];
    var cls = cx('cs-btn', 'cs-btn--' + variant, 'cs-btn--' + size, p.className);
    if (p.href) return h('a', Object.assign({ href: p.href, className: cls }, rest), inner);
    return h('button', Object.assign({ type: 'button', className: cls }, rest), inner);
  }

  /* Streifenmotiv, geometrisch aus den Logo-Maßen: Diagonale 78 breit, Balken 22 stark, Abstand 11, Steigung 0.6 (59 Grad). */
  function StripeKick(p) {
    var tone = p.tone || 'auto', extend = p.extend || 0, H = 449, slope = 0.6, diag = 78, bar = 22, step = 33, shift = 92, ends = [921, 1149, 1373], ch = 12;
    var paths = [0, 1, 2].map(function (i) {
      var yt = i * step, xl = function (y) { return i * shift + (H - y) * slope; };
      var xe = ends[i] + extend;
      var pts = [[xl(H), H], [xl(H) + diag, H], [xl(yt + bar) + diag, yt + bar], [xe + ch, yt + bar], [xe, yt], [xl(yt), yt]];
      return h('path', { key: i, className: 'cs-stripe cs-stripe--' + (i + 1), d: 'M' + pts.map(function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join(' L') + ' Z' });
    });
    var W = ends[2] + extend + ch + 4;
    return h('svg', { className: cx('cs-kick', 'cs-kick--' + tone, p.className), viewBox: '-4 -4 ' + (W + 4) + ' ' + (H + 8), preserveAspectRatio: p.align === 'right' ? 'xMaxYMax meet' : 'xMinYMax meet', role: 'presentation', 'aria-hidden': 'true', style: p.style, width: p.width, height: p.height }, paths);
  }

  function StripeRule(p) {
    return h('div', { className: cx('cs-rule', 'cs-rule--' + (p.tone || 'auto'), p.short ? 'cs-rule--short' : null, p.className), role: 'presentation', 'aria-hidden': 'true' },
      h('span', null), h('span', null), h('span', null));
  }

  function Eyebrow(p) {
    return h('p', { className: cx('cs-eyebrow', p.tone === 'inverse' ? 'cs-eyebrow--inverse' : null, p.className) },
      h('span', { className: 'cs-eyebrow__mark', 'aria-hidden': 'true' }), p.children);
  }

  function RaceNumber(p) {
    var size = p.size || 72;
    return h('span', { className: cx('cs-racenum', 'cs-racenum--' + (p.tone || 'plate'), p.className), style: { width: size, height: size, fontSize: Math.round(size * 0.5) }, 'aria-label': p.label || undefined }, p.children);
  }

  function Tag(p) {
    return h('span', { className: cx('cs-tag', 'cs-tag--' + (p.tone || 'default'), p.className) }, p.children);
  }

  function NavBar(p) {
    var tone = p.tone || 'light';
    return h('header', { className: cx('cs-nav', 'cs-nav--' + tone, p.className) },
      h('a', { className: 'cs-nav__brand', href: p.homeHref || '/' }, p.logoSrc ? h('img', { src: p.logoSrc, alt: 'Copilotenschule', height: p.logoHeight || 44 }) : h('span', { className: 'cs-nav__wordmark' }, 'Copilotenschule')),
      h('nav', { className: 'cs-nav__links', 'aria-label': 'Hauptnavigation' }, (p.links || []).map(function (l, i) {
        return h('a', { key: i, href: l.href || '#', className: cx('cs-nav__link', l.active ? 'is-active' : null), 'aria-current': l.active ? 'page' : undefined }, l.label);
      })),
      p.cta ? h(Button, { size: 'sm', variant: 'primary', href: p.cta.href }, p.cta.label) : null);
  }

  function Hero(p) {
    var tone = p.tone || 'brand';
    return h('section', { className: cx('cs-hero', 'cs-hero--' + tone, p.className) },
      h('div', { className: 'cs-hero__inner' },
        p.eyebrow ? h(Eyebrow, { tone: tone === 'brand' ? 'inverse' : undefined }, p.eyebrow) : null,
        h('h1', { className: 'cs-hero__title' }, p.title),
        p.lead ? h('p', { className: 'cs-hero__lead' }, p.lead) : null,
        p.actions ? h('div', { className: 'cs-hero__actions' }, p.actions) : null),
      h(StripeKick, { className: 'cs-hero__kick', tone: tone === 'brand' ? 'dark' : 'light', extend: 900, align: 'left' }));
  }

  function CourseCard(p) {
    return h('article', { className: cx('cs-card', p.featured ? 'cs-card--featured' : null, p.className) },
      h('div', { className: 'cs-card__head' },
        p.number != null ? h(RaceNumber, { size: 56, tone: p.featured ? 'red' : 'blue', label: 'Modul ' + p.number }, p.number) : null,
        p.eyebrow ? h(Eyebrow, null, p.eyebrow) : null),
      h('h3', { className: 'cs-card__title' }, p.href ? h('a', { href: p.href }, p.title) : p.title),
      p.text ? h('p', { className: 'cs-card__text' }, p.text) : null,
      p.meta && p.meta.length ? h('dl', { className: 'cs-card__meta' }, p.meta.map(function (m, i) {
        return h('div', { key: i }, h('dt', null, m.label), h('dd', null, m.value));
      })) : null,
      p.tags && p.tags.length ? h('div', { className: 'cs-card__tags' }, p.tags.map(function (t, i) { return h(Tag, { key: i }, t); })) : null,
      p.cta ? h('div', { className: 'cs-card__foot' }, h(Button, { variant: p.featured ? 'primary' : 'outline', size: 'sm', arrow: true, href: p.cta.href }, p.cta.label)) : null);
  }

  function StatTile(p) {
    return h('div', { className: cx('cs-stat', p.tone === 'brand' ? 'cs-stat--brand' : null, p.className) },
      h('div', { className: 'cs-stat__value' }, p.value),
      h('div', { className: 'cs-stat__label' }, p.label),
      p.note ? h('div', { className: 'cs-stat__note' }, p.note) : null);
  }

  function Testimonial(p) {
    return h('figure', { className: cx('cs-quote', p.className) },
      h(StripeRule, { short: true }),
      h('blockquote', { className: 'cs-quote__text' }, p.quote),
      h('figcaption', { className: 'cs-quote__by' }, h('strong', null, p.name), (p.role || p.company) ? h('span', null, [p.role, p.company].filter(Boolean).join(', ')) : null));
  }

  function Accordion(p) {
    return h('div', { className: cx('cs-acc', p.className) }, (p.items || []).map(function (it, i) {
      return h('details', { key: i, className: 'cs-acc__item', open: it.open || undefined },
        h('summary', { className: 'cs-acc__q' }, h('span', null, it.question), h('span', { className: 'cs-acc__icon', 'aria-hidden': 'true' })),
        h('div', { className: 'cs-acc__a' }, it.answer));
    }));
  }

  var uid = 0;
  function TextField(p) {
    var idRef = R.useRef(null); if (!idRef.current) idRef.current = p.id || 'cs-field-' + (++uid);
    var id = idRef.current, hintId = id + '-hint', errId = id + '-err';
    var rest = Object.assign({}, p); ['label', 'hint', 'error', 'multiline', 'className', 'id'].forEach(function (k) { delete rest[k]; });
    var describedBy = [p.hint ? hintId : null, p.error ? errId : null].filter(Boolean).join(' ') || undefined;
    var ctrl = h(p.multiline ? 'textarea' : 'input', Object.assign({ id: id, className: 'cs-field__control', 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': describedBy }, rest));
    return h('div', { className: cx('cs-field', p.error ? 'is-error' : null, p.className) },
      h('label', { htmlFor: id, className: 'cs-field__label' }, p.label, p.required ? h('span', { className: 'cs-field__req', 'aria-hidden': 'true' }, ' *') : null),
      ctrl,
      p.hint ? h('p', { id: hintId, className: 'cs-field__hint' }, p.hint) : null,
      p.error ? h('p', { id: errId, className: 'cs-field__error', role: 'alert' }, h('span', { className: 'cs-field__erricon', 'aria-hidden': 'true' }, '!'), p.error) : null);
  }

  var api = { Button: Button, StripeKick: StripeKick, StripeRule: StripeRule, Eyebrow: Eyebrow, RaceNumber: RaceNumber, Tag: Tag, NavBar: NavBar, Hero: Hero, CourseCard: CourseCard, StatTile: StatTile, Testimonial: Testimonial, Accordion: Accordion, TextField: TextField };
  window.Copilotenschule = Object.assign(window.Copilotenschule || {}, api);
})();
