'use strict';

/* ======================================================
   DATOS — EFECTOS
   ====================================================== */
const EFFECTS = [
  { id: 'normal',  label: 'Normal',  icon: '○',  pill: '○ Normal',       neon: null },
  { id: 'burning', label: 'Lava',    icon: '🔥', pill: '🔥 Burning Lava', neon: null },
  { id: 'neon',    label: 'Neón',    icon: '💜', pill: '💜 Neón',          neon: null },
  { id: 'glitch',  label: 'Glitch',  icon: '⚡', pill: '⚡ Glitch',        neon: null },
  { id: 'frost',   label: 'Hielo',   icon: '❄️', pill: '❄️ Frost',         neon: null },
  { id: 'gold',    label: 'Oro',     icon: '✨', pill: '✨ Oro',            neon: null },
];

/* ======================================================
   DATOS — LOGOS (SVG inline)
   ====================================================== */
const LOGOS = [
  {
    id: 'youtube', name: 'YouTube',
    neon: 'rgba(255,0,0,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#FF0000" rx="44"/>
      <rect x="30" y="66" width="140" height="68" rx="15" fill="white"/>
      <polygon points="82,80 82,137 144,108" fill="#FF0000"/>
    </svg>`
  },
  {
    id: 'instagram', name: 'Instagram',
    neon: 'rgba(221,42,123,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%"   stop-color="#F58529"/>
          <stop offset="50%"  stop-color="#DD2A7B"/>
          <stop offset="100%" stop-color="#8134AF"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#ig)" rx="44"/>
      <rect x="44" y="44" width="112" height="112" rx="28" fill="none" stroke="white" stroke-width="12"/>
      <circle cx="100" cy="100" r="27" fill="none" stroke="white" stroke-width="12"/>
      <circle cx="143" cy="57" r="9" fill="white"/>
    </svg>`
  },
  {
    id: 'tiktok', name: 'TikTok',
    neon: 'rgba(0,242,234,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#010101" rx="44"/>
      <!-- Shadow cyan -->
      <ellipse cx="74" cy="147" rx="24" ry="20" fill="#00F2EA"/>
      <rect x="93"  y="44" width="12" height="104" fill="#00F2EA"/>
      <path d="M105,44 C122,42 140,50 144,70 C148,84 142,95 130,97 L105,97" fill="none" stroke="#00F2EA" stroke-width="12" stroke-linecap="round"/>
      <!-- Shadow red -->
      <ellipse cx="80" cy="153" rx="24" ry="20" fill="#FF0050"/>
      <rect x="99"  y="50" width="12" height="104" fill="#FF0050"/>
      <path d="M111,50 C128,48 146,56 150,76 C154,90 148,101 136,103 L111,103" fill="none" stroke="#FF0050" stroke-width="12" stroke-linecap="round"/>
      <!-- White main -->
      <ellipse cx="77" cy="150" rx="24" ry="20" fill="white"/>
      <rect x="96"  y="47" width="12" height="104" fill="white"/>
      <path d="M108,47 C125,45 143,53 147,73 C151,87 145,98 133,100 L108,100" fill="none" stroke="white" stroke-width="12" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'whatsapp', name: 'WhatsApp',
    neon: 'rgba(37,211,102,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#25D366" rx="44"/>
      <!-- Burbuja de chat -->
      <path d="M100,36 C61,36 30,64 30,99 C30,114 35,128 45,139 L37,164 L64,156 C74,161 86,164 100,164 C139,164 170,136 170,101 C170,66 139,36 100,36 Z" fill="white"/>
      <!-- Teléfono -->
      <path d="M77,70 C74,70 71,73 69,77 L64,87 C62,94 66,102 73,109 C81,117 90,123 100,128 C107,131 114,129 118,125 L124,117 C126,113 125,109 121,107 L115,103 C112,101 110,103 108,106 L106,109 C104,111 101,110 99,108 L91,100 C89,98 88,95 90,93 L93,91 C96,89 97,86 95,83 L90,76 C88,73 85,71 82,70 C81,70 79,70 77,70 Z" fill="#25D366"/>
    </svg>`
  },
  {
    id: 'x', name: 'X (Twitter)',
    neon: 'rgba(255,255,255,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#000000" rx="44"/>
      <line x1="52" y1="52" x2="148" y2="148" stroke="white" stroke-width="24" stroke-linecap="round"/>
      <line x1="148" y1="52" x2="52"  y2="148" stroke="white" stroke-width="24" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'spotify', name: 'Spotify',
    neon: 'rgba(30,215,96,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#191414" rx="44"/>
      <circle cx="100" cy="100" r="66" fill="#1DB954"/>
      <path d="M63,85  Q100,68 137,78" fill="none" stroke="#191414" stroke-width="10" stroke-linecap="round"/>
      <path d="M66,103 Q100,88 134,97"  fill="none" stroke="#191414" stroke-width="9"  stroke-linecap="round"/>
      <path d="M70,120 Q100,107 130,114" fill="none" stroke="#191414" stroke-width="8"  stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'netflix', name: 'Netflix',
    neon: 'rgba(229,9,20,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#221F1F" rx="44"/>
      <rect x="58"  y="40" width="30" height="120" fill="#E50914"/>
      <rect x="112" y="40" width="30" height="120" fill="#E50914"/>
      <polygon points="58,40 88,40 142,160 112,160" fill="#E50914"/>
    </svg>`
  },
  {
    id: 'discord', name: 'Discord',
    neon: 'rgba(88,101,242,0.85)',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#5865F2" rx="44"/>
      <!-- Clyde simplificado -->
      <path d="M148,60 C136,53 122,50 108,49 L106,54 C118,57 130,61 140,67 C126,58 113,55 100,55 C87,55 74,58 60,67 C70,61 82,57 94,54 L92,49 C78,50 64,53 52,60 C40,78 34,98 34,120 C43,131 56,138 70,139 L77,128 C68,125 60,120 53,113 C65,120 79,124 94,126 L97,121 C82,119 68,113 58,105 Q73,112 88,114 Q94,115 100,115 Q106,115 112,114 Q127,112 142,105 C132,113 118,119 103,121 L106,126 C121,124 135,120 147,113 C140,120 132,125 123,128 L130,139 C144,138 157,131 166,120 C166,98 160,78 148,60 Z" fill="white"/>
      <ellipse cx="79"  cy="106" rx="14" ry="15" fill="#5865F2"/>
      <ellipse cx="121" cy="106" rx="14" ry="15" fill="#5865F2"/>
    </svg>`
  },
];

/* ======================================================
   ESTADO
   ====================================================== */
let currentLogoId  = 'youtube';
let currentEffect  = 'normal';

/* ======================================================
   DOM REFS
   ====================================================== */
const previewStage = document.getElementById('previewStage');
const logoFrame    = document.getElementById('logoFrame');
const logoName     = document.getElementById('logoName');
const effectBadge  = document.getElementById('effectBadge');
const effectsRow   = document.getElementById('effectsRow');
const logosGrid    = document.getElementById('logosGrid');
const btnDl        = document.getElementById('btnDl');
const toast        = document.getElementById('toast');

/* ======================================================
   RENDER — BOTONES DE EFECTOS
   ====================================================== */
function renderEffects() {
  effectsRow.innerHTML = '';
  EFFECTS.forEach(fx => {
    const btn = document.createElement('button');
    btn.className = 'fx-btn' + (fx.id === currentEffect ? ' active' : '');
    btn.dataset.fx = fx.id;
    btn.innerHTML = `<span class="fx-icon">${fx.icon}</span><span>${fx.label}</span>`;
    btn.addEventListener('click', () => selectEffect(fx.id));
    effectsRow.appendChild(btn);
  });
}

/* ======================================================
   RENDER — GRID DE LOGOS
   ====================================================== */
function renderLogos() {
  logosGrid.innerHTML = '';
  LOGOS.forEach(logo => {
    const thumb = document.createElement('div');
    thumb.className = 'logo-thumb' + (logo.id === currentLogoId ? ' active' : '');
    thumb.dataset.lid = logo.id;
    thumb.innerHTML = logo.svg + `<span class="logo-thumb-label">${logo.name}</span>`;
    thumb.addEventListener('click', () => selectLogo(logo.id));
    logosGrid.appendChild(thumb);
  });
}

/* ======================================================
   APLICAR LOGO AL PREVIEW
   ====================================================== */
function applyLogo() {
  const logo = LOGOS.find(l => l.id === currentLogoId);
  if (!logo) return;

  // Inyectar SVG
  logoFrame.innerHTML = logo.svg;
  logoName.textContent = logo.name;

  // Color neón dinámico
  previewStage.style.setProperty('--neon', logo.neon || 'rgba(180,0,255,0.85)');

  // Regenerar partículas y clones si el efecto activo lo requiere
  cleanExtras();
  if (currentEffect === 'burning') spawnParticles();
  if (currentEffect === 'glitch')  spawnGlitchClones(logo);
}

/* ======================================================
   APLICAR EFECTO AL PREVIEW
   ====================================================== */
function applyEffect(effectId) {
  // Quitar todas las clases de efecto
  previewStage.className = 'preview-stage';
  if (effectId !== 'normal') {
    previewStage.classList.add('fx-' + effectId);
  }

  // Badge
  const fx = EFFECTS.find(f => f.id === effectId);
  effectBadge.textContent = fx ? fx.pill : '○ Normal';

  // Limpiar extras y volver a crear si aplica
  cleanExtras();
  if (effectId === 'burning') spawnParticles();
  if (effectId === 'glitch') {
    const logo = LOGOS.find(l => l.id === currentLogoId);
    if (logo) spawnGlitchClones(logo);
  }
}

/* ======================================================
   EXTRAS — PARTÍCULAS (burning)
   ====================================================== */
function spawnParticles() {
  const wrap = document.createElement('div');
  wrap.className = 'burn-particles';
  wrap.id = 'burnParticles';

  const cx = 140, cy = 140; // centro del stage (280/2)
  const innerR = 112, outerR = 155;

  for (let i = 0; i < 28; i++) {
    const dot = document.createElement('div');
    dot.className = 'burn-dot';
    const angle = Math.random() * Math.PI * 2;
    const dist  = innerR + Math.random() * (outerR - innerR);
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    const s = 1.5 + Math.random() * 5;
    const op = 0.35 + Math.random() * 0.55;
    dot.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px;opacity:${op}`;
    wrap.appendChild(dot);
  }
  previewStage.appendChild(wrap);
}

/* ======================================================
   EXTRAS — CLONES GLITCH
   ====================================================== */
function spawnGlitchClones(logo) {
  ['glitch-r', 'glitch-b'].forEach(cls => {
    const clone = document.createElement('div');
    clone.className = 'logo-frame glitch-clone ' + cls;
    clone.dataset.extra = 'glitch';
    clone.innerHTML = logo.svg;
    previewStage.appendChild(clone);
  });
}

/* ======================================================
   LIMPIAR EXTRAS
   ====================================================== */
function cleanExtras() {
  document.getElementById('burnParticles')?.remove();
  previewStage.querySelectorAll('[data-extra]').forEach(el => el.remove());
}

/* ======================================================
   SELECCIONAR LOGO
   ====================================================== */
function selectLogo(id) {
  currentLogoId = id;
  logosGrid.querySelectorAll('.logo-thumb').forEach(el => {
    el.classList.toggle('active', el.dataset.lid === id);
  });
  applyLogo();
}

/* ======================================================
   SELECCIONAR EFECTO
   ====================================================== */
function selectEffect(id) {
  currentEffect = id;
  effectsRow.querySelectorAll('.fx-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.fx === id);
  });
  applyEffect(id);
}

/* ======================================================
   DESCARGA SVG
   ====================================================== */
btnDl.addEventListener('click', () => {
  const logo = LOGOS.find(l => l.id === currentLogoId);
  const fx   = EFFECTS.find(f => f.id === currentEffect);
  if (!logo) return;

  const blob = new Blob([logo.svg], { type: 'image/svg+xml' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${logo.id}-${fx?.id || 'normal'}.svg`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`${logo.name} descargado ✓`);
});

/* ======================================================
   TOAST
   ====================================================== */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ======================================================
   TECLADO — flechas para cambiar logo/efecto
   ====================================================== */
document.addEventListener('keydown', e => {
  const idx = LOGOS.findIndex(l => l.id === currentLogoId);
  if (e.key === 'ArrowRight') selectLogo(LOGOS[(idx + 1) % LOGOS.length].id);
  if (e.key === 'ArrowLeft')  selectLogo(LOGOS[(idx - 1 + LOGOS.length) % LOGOS.length].id);

  const eidx = EFFECTS.findIndex(f => f.id === currentEffect);
  if (e.key === 'ArrowUp')   selectEffect(EFFECTS[(eidx - 1 + EFFECTS.length) % EFFECTS.length].id);
  if (e.key === 'ArrowDown') selectEffect(EFFECTS[(eidx + 1) % EFFECTS.length].id);
});

/* ======================================================
   INIT
   ====================================================== */
renderEffects();
renderLogos();
applyLogo();
applyEffect('normal');
