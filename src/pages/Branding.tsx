import '../styles/branding.css'
import triptrav from '../assets/triptrav.svg'

const html = `
<div class="wrap">

  <!-- COVER -->
  <header class="cover" id="top">
    <span class="cover-eyebrow">Manual d'Imatge Corporativa · v1.0</span>
    <h1 class="cover-title">Identitat de<br>Marca</h1>
    <p class="cover-sub">Directrius corporatives de WTO i del producte TripTrav · 2025</p>
    <div class="cover-brands">
      <div class="cover-brand-block">
        <span class="cover-brand-role">Empresa</span>
        <div class="cover-brand-name">WTO<span class="gold">.</span></div>
        <div class="cover-brand-desc">Worldwide Tourism Outreach, S.L.</div>
      </div>
      <div class="cover-sep"></div>
      <div class="cover-brand-block">
        <span class="cover-brand-role">Producte</span>
        <div style="display:flex;align-items:center;gap:14px;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.1)"/>
            <g transform="translate(24,24) rotate(-35)">
              <rect x="-12" y="-2.8" width="24" height="5.6" rx="2.8" fill="#F0A500"/>
              <polygon points="-2,-2.8 7,-2.8 13,7 2,7" fill="#fff" opacity="0.9"/>
              <polygon points="-2,2.8 7,2.8 13,-7 2,-7" fill="#fff" opacity="0.9"/>
              <polygon points="-12,-2.8 -12,0 -8,-2.8" fill="#fff" opacity="0.75"/>
              <polygon points="-12,2.8 -12,0 -8,2.8" fill="#fff" opacity="0.75"/>
            </g>
          </svg>
          <div class="cover-brand-name">TripTrav<span class="gold">.</span></div>
        </div>
        <div class="cover-brand-desc">La plataforma social de viatges compartits</div>
      </div>
    </div>
  </header>

  <!-- TOC -->
  <nav class="toc" aria-label="Índex de continguts">
    <div class="toc-header">Índex de continguts</div>
    <a href="#identitat"><span class="toc-n">01</span> Identitat corporativa</a>
    <a href="#logo-wto"><span class="toc-n">02</span> Logo WTO (empresa)</a>
    <a href="#logo-triptrav"><span class="toc-n">03</span> Logo TripTrav (producte)</a>
    <a href="#colors"><span class="toc-n">04</span> Paleta de colors</a>
    <a href="#tipografia"><span class="toc-n">05</span> Tipografia</a>
    <a href="#us"><span class="toc-n">06</span> Ús del logotip</a>
    <a href="#veu"><span class="toc-n">07</span> Veu i to de marca</a>
    <a href="#digital"><span class="toc-n">08</span> Aplicació digital</a>
    <a href="#iconografia"><span class="toc-n">09</span> Iconografia</a>
  </nav>

  <!-- 01 IDENTITAT -->
  <section id="identitat">
    <span class="sec-label">01 — Identitat corporativa</span>
    <h2 class="sec-title">Empresa i producte</h2>
    <p class="sec-body">WTO (Worldwide Tourism Outreach, S.L.) és l'empresa i entitat jurídica. TripTrav és el producte que WTO desenvolupa: l'app mòbil social de viatges compartits. Cada marca té la seva identitat pròpia però comparteixen paleta de colors i sistema tipogràfic per garantir coherència.</p>
    <div class="brand-rel">
      <div class="brand-card">
        <div class="brand-card-role">Empresa · Entitat jurídica</div>
        <div class="brand-card-name">WTO<span class="gold">.</span></div>
        <div class="brand-card-full">Worldwide Tourism Outreach, S.L.</div>
        <div class="brand-card-desc">Apareix en comunicació legal, corporativa, inversors i relacions B2B. No és el nom que l'usuari final veu a l'app.</div>
      </div>
      <div class="brand-arrow">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M6 14h16M16 8l6 6-6 6" stroke="#F0A500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        desenvolupa
      </div>
      <div class="brand-card product">
        <div class="brand-card-role">Producte · App mòbil</div>
        <div class="brand-card-name">TripTrav<span class="gold">.</span></div>
        <div class="brand-card-full">La plataforma social de viatges compartits</div>
        <div class="brand-card-desc">És el nom que l'usuari final coneix, descarrega i usa. Tota la comunicació B2C es fa sota la marca TripTrav.</div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 02 LOGO WTO -->
  <section id="logo-wto">
    <span class="sec-label">02 — Logo WTO</span>
    <h2 class="sec-title">La marca corporativa</h2>
    <p class="sec-body">El logo de WTO és sobri i professional. S'usa en memòries anuals, contractes, presentacions a inversors i comunicació B2B. Es basa en el wordmark tipogràfic amb punt daurat com a signe diferenciador.</p>
    <div class="logo-grid">
      <div class="logo-box v-dark">
        <div class="logo-lockup">
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#fff;">WTO<span style="color:#F0A500;">.</span></div>
            <div class="logo-sub" style="color:rgba(255,255,255,0.4);">Worldwide Tourism Outreach</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(255,255,255,0.3);">Versió principal</div>
      </div>
      <div class="logo-box v-light">
        <div class="logo-lockup">
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#1F4E79;">WTO<span style="color:#F0A500;">.</span></div>
            <div class="logo-sub" style="color:#8A8A8A;">Worldwide Tourism Outreach</div>
          </div>
        </div>
        <div class="logo-caption" style="color:#8A8A8A;">Versió sobre fons clar</div>
      </div>
      <div class="logo-box v-gold">
        <div class="logo-lockup">
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#1F4E79;">WTO<span style="color:#fff;">.</span></div>
            <div class="logo-sub" style="color:rgba(31,78,121,0.55);">Worldwide Tourism Outreach</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(31,78,121,0.5);">Versió sobre or corporatiu</div>
      </div>
      <div class="logo-box v-mono">
        <div class="logo-lockup">
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#fff;">WTO<span style="color:#888;">.</span></div>
            <div class="logo-sub" style="color:rgba(255,255,255,0.3);">Worldwide Tourism Outreach</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(255,255,255,0.25);">Versió monòcroma</div>
      </div>
    </div>
    <div class="info-card">
      <div class="info-card-title">Mida mínima</div>
      <p>Digital: 100px d'amplada · Impressió: 22mm. Per sota d'aquestes mides usar únicament les sigles "WTO" sense el subtítol.</p>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 03 LOGO TRIPTRAV -->
  <section id="logo-triptrav">
    <span class="sec-label">03 — Logo TripTrav</span>
    <h2 class="sec-title">La marca del producte</h2>
    <p class="sec-body">El logo de TripTrav combina el símbol de l'avió vectorial amb el wordmark. L'avió representa mobilitat, aventura i connexió global. S'usa a l'app, xarxes socials, campanyes B2C i tots els punts de contacte amb l'usuari final.</p>
    <div class="logo-grid">
      <div class="logo-box v-dark">
        <div class="logo-lockup">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <g transform="translate(22,22) rotate(-35)">
              <rect x="-12" y="-2.5" width="24" height="5" rx="2.5" fill="#F0A500"/>
              <polygon points="-2,-2.5 7,-2.5 13,7 2,7" fill="#fff" opacity="0.9"/>
              <polygon points="-2,2.5 7,2.5 13,-7 2,-7" fill="#fff" opacity="0.9"/>
              <polygon points="-12,-2.5 -12,0 -8,-2.5" fill="#fff" opacity="0.75"/>
              <polygon points="-12,2.5 -12,0 -8,2.5" fill="#fff" opacity="0.75"/>
            </g>
          </svg>
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#fff;">TripTrav<span style="color:#F0A500;">.</span></div>
            <div class="logo-sub" style="color:rgba(255,255,255,0.4);">Viatges compartits</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(255,255,255,0.3);">Versió principal (sobre fosc)</div>
      </div>
      <div class="logo-box v-light">
        <div class="logo-lockup">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <g transform="translate(22,22) rotate(-35)">
              <rect x="-12" y="-2.5" width="24" height="5" rx="2.5" fill="#1F4E79"/>
              <polygon points="-2,-2.5 7,-2.5 13,7 2,7" fill="#2A6FAD" opacity="0.65"/>
              <polygon points="-2,2.5 7,2.5 13,-7 2,-7" fill="#2A6FAD" opacity="0.65"/>
              <polygon points="-12,-2.5 -12,0 -8,-2.5" fill="#2A6FAD" opacity="0.5"/>
              <polygon points="-12,2.5 -12,0 -8,2.5" fill="#2A6FAD" opacity="0.5"/>
            </g>
          </svg>
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#1F4E79;">TripTrav<span style="color:#F0A500;">.</span></div>
            <div class="logo-sub" style="color:#8A8A8A;">Viatges compartits</div>
          </div>
        </div>
        <div class="logo-caption" style="color:#8A8A8A;">Versió sobre fons clar</div>
      </div>
      <div class="logo-box v-gold">
        <div class="logo-lockup">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <g transform="translate(22,22) rotate(-35)">
              <rect x="-12" y="-2.5" width="24" height="5" rx="2.5" fill="#fff"/>
              <polygon points="-2,-2.5 7,-2.5 13,7 2,7" fill="#1F4E79" opacity="0.85"/>
              <polygon points="-2,2.5 7,2.5 13,-7 2,-7" fill="#1F4E79" opacity="0.85"/>
              <polygon points="-12,-2.5 -12,0 -8,-2.5" fill="#1F4E79" opacity="0.65"/>
              <polygon points="-12,2.5 -12,0 -8,2.5" fill="#1F4E79" opacity="0.65"/>
            </g>
          </svg>
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#1F4E79;">TripTrav<span style="color:#fff;">.</span></div>
            <div class="logo-sub" style="color:rgba(31,78,121,0.55);">Viatges compartits</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(31,78,121,0.5);">Versió sobre or corporatiu</div>
      </div>
      <div class="logo-box v-mono">
        <div class="logo-lockup">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <g transform="translate(22,22) rotate(-35)">
              <rect x="-12" y="-2.5" width="24" height="5" rx="2.5" fill="#fff"/>
              <polygon points="-2,-2.5 7,-2.5 13,7 2,7" fill="#aaa"/>
              <polygon points="-2,2.5 7,2.5 13,-7 2,-7" fill="#aaa"/>
              <polygon points="-12,-2.5 -12,0 -8,-2.5" fill="#888"/>
              <polygon points="-12,2.5 -12,0 -8,2.5" fill="#888"/>
            </g>
          </svg>
          <div class="logo-text-block">
            <div class="logo-wordmark" style="color:#fff;">TripTrav<span style="color:#666;">.</span></div>
            <div class="logo-sub" style="color:rgba(255,255,255,0.3);">Viatges compartits</div>
          </div>
        </div>
        <div class="logo-caption" style="color:rgba(255,255,255,0.25);">Versió monòcroma</div>
      </div>
    </div>
    <div class="info-card">
      <div class="info-card-title">Zona de protecció (espai mínim)</div>
      <p>L'espai mínim al voltant del logotip de TripTrav és equivalent a l'alçada de la lletra "T" del wordmark. No col·locar cap element dins d'aquesta zona de protecció.</p>
    </div>
    <div class="info-card">
      <div class="info-card-title">Mida mínima</div>
      <p>Digital: 130px d'amplada · Impressió: 28mm. Per sota d'aquestes mides usar únicament el símbol de l'avió sense wordmark.</p>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 04 COLORS -->
  <section id="colors">
    <span class="sec-label">04 — Paleta de colors</span>
    <h2 class="sec-title">Colors corporatius</h2>
    <p class="sec-body">La paleta és compartida entre WTO i TripTrav. Els dos colors principals reflecteixen confiança (blau marí) i aventura (daurat). Els colors complementaris s'usen per a estats d'interfície i comunicació digital.</p>
    <div class="color-section-title">Colors principals</div>
    <div class="color-grid">
      <div class="color-chip"><div class="color-swatch" style="background:#1F4E79;"></div><div class="color-info"><div class="color-name">Blau Marí</div><div class="color-hex">#1F4E79</div><div class="color-role">Principal · Corporatiu</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#F0A500;"></div><div class="color-info"><div class="color-name">Daurat</div><div class="color-hex">#F0A500</div><div class="color-role">Accent · CTA</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#2A6FAD;"></div><div class="color-info"><div class="color-name">Blau Mitjà</div><div class="color-hex">#2A6FAD</div><div class="color-role">Suport · Links</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#F5C842;"></div><div class="color-info"><div class="color-name">Daurat Clar</div><div class="color-hex">#F5C842</div><div class="color-role">Hover · Actius</div></div></div>
    </div>
    <div class="color-section-title">Colors neutres i de sistema</div>
    <div class="color-grid">
      <div class="color-chip"><div class="color-swatch" style="background:#E8F0F8;"></div><div class="color-info"><div class="color-name">Blau Clar</div><div class="color-hex">#E8F0F8</div><div class="color-role">Fons UI · Cards</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#2D2D2D;"></div><div class="color-info"><div class="color-name">Carbó</div><div class="color-hex">#2D2D2D</div><div class="color-role">Text principal</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#8A8A8A;"></div><div class="color-info"><div class="color-name">Gris</div><div class="color-hex">#8A8A8A</div><div class="color-role">Text secundari</div></div></div>
      <div class="color-chip"><div class="color-swatch" style="background:#FFFFFF; border-bottom:1px solid #eee;"></div><div class="color-info"><div class="color-name">Blanc</div><div class="color-hex">#FFFFFF</div><div class="color-role">Fons · Cards</div></div></div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 05 TIPOGRAFIA -->
  <section id="tipografia">
    <span class="sec-label">05 — Tipografia</span>
    <h2 class="sec-title">Sistema tipogràfic</h2>
    <p class="sec-body">WTO i TripTrav comparteixen el mateix sistema tipogràfic. Playfair Display aporta distinció i elegància als títols i wordmarks; DM Sans ofereix llegibilitat i modernitat al cos de text i la interfície.</p>
    <div class="type-samples">
      <div class="type-sample">
        <div class="type-label">Playfair Display — Títols, Wordmarks WTO i TripTrav</div>
        <div style="font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:#2D2D2D;line-height:1.15;">Aa Bb Cc Dd 12</div>
        <div style="font-family:'Playfair Display',serif;font-size:20px;color:#2D2D2D;margin-top:10px;">Explora el món amb TripTrav</div>
        <div class="type-tags"><span class="type-tag">Regular 400</span><span class="type-tag">Bold 700</span><span class="type-tag">Ús: H1, H2, wordmarks, destacats</span></div>
      </div>
      <div class="type-sample">
        <div class="type-label">DM Sans — Interfície, cos de text, navegació</div>
        <div style="font-family:'DM Sans',sans-serif;font-size:36px;font-weight:300;color:#2D2D2D;line-height:1.2;">Aa Bb Cc Dd 12</div>
        <div style="font-family:'DM Sans',sans-serif;font-size:15px;color:#8A8A8A;margin-top:10px;line-height:1.8;">La plataforma social de viatges compartits per a joves exploradors europeus que busquen noves experiències.</div>
        <div class="type-tags"><span class="type-tag">Light 300</span><span class="type-tag">Regular 400</span><span class="type-tag">Medium 500</span><span class="type-tag">Ús: cos, UI, botons, etiquetes</span></div>
      </div>
      <div class="type-hierarchy">
        <div class="type-label" style="margin-bottom:20px;">Jerarquia tipogràfica</div>
        <div class="th1">Títol H1 — Playfair Display 36px/700</div>
        <div class="th2">Títol H2 — Playfair Display 24px/400</div>
        <div class="th3">Subtítol H3 — DM Sans 17px/500</div>
        <div class="tb">Cos de text — DM Sans 15px/400. Espais generosos i lectura còmoda.</div>
        <div class="tc">Etiqueta · DM Sans 11px · Uppercase · Tracking 2px</div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 06 US -->
  <section id="us">
    <span class="sec-label">06 — Ús del logotip</span>
    <h2 class="sec-title">Fer i no fer</h2>
    <p class="sec-body">Les mateixes regles s'apliquen als logos de WTO i TripTrav. La consistència en l'aplicació dels logotips és essencial per mantenir la integritat i reconeixement de marca.</p>
    <div class="usage-grid">
      <div class="usage-card ok"><div class="usage-tag ok">Correcte</div><p>Usar el logo sobre fons corporatius: blau marí, blau clar, blanc o daurat.</p></div>
      <div class="usage-card nok"><div class="usage-tag nok">Incorrecte</div><p>No usar el logo directament sobre fotografies sense capa de color intermèdia.</p></div>
      <div class="usage-card ok"><div class="usage-tag ok">Correcte</div><p>Respectar sempre la zona de protecció mínima al voltant del logotip en tots els suports.</p></div>
      <div class="usage-card nok"><div class="usage-tag nok">Incorrecte</div><p>No deformar, rotar, inclinar ni aplicar ombres, degradats o efectes al logotip.</p></div>
      <div class="usage-card ok"><div class="usage-tag ok">Correcte</div><p>Escalar el logotip sempre proporcionalment mantenint l'aspecte original.</p></div>
      <div class="usage-card nok"><div class="usage-tag nok">Incorrecte</div><p>No modificar els colors del logotip fora de les quatre versions oficials definides.</p></div>
      <div class="usage-card ok"><div class="usage-tag ok">Correcte</div><p>Usar "WTO" per a comunicació corporativa/B2B i "TripTrav" per a comunicació B2C i l'app.</p></div>
      <div class="usage-card nok"><div class="usage-tag nok">Incorrecte</div><p>No combinar o superposar els logos de WTO i TripTrav en el mateix suport sense separació clara.</p></div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 07 VEU -->
  <section id="veu">
    <span class="sec-label">07 — Veu i to de marca</span>
    <h2 class="sec-title">Personalitat de TripTrav</h2>
    <p class="sec-body">La comunicació de TripTrav és propera, aventurera i inclusiva. Parlem de tu als nostres usuaris, usem un llenguatge senzill i inspiracional. La comunicació de WTO cap a inversors i aliats és més formal i professional.</p>
    <div class="tone-grid">
      <div class="tone-pill"><div class="tone-dot" style="background:#1F4E79;"></div>Aventurer i inspirador</div>
      <div class="tone-pill"><div class="tone-dot" style="background:#F0A500;"></div>Proper i col·laboratiu</div>
      <div class="tone-pill"><div class="tone-dot" style="background:#2A6FAD;"></div>Internacional però accessible</div>
      <div class="tone-pill"><div class="tone-dot" style="background:#1F4E79;"></div>Honest i transparent</div>
      <div class="tone-pill"><div class="tone-dot" style="background:#F0A500;"></div>Optimista i dinàmic</div>
      <div class="tone-pill"><div class="tone-dot" style="background:#2A6FAD;"></div>Jove però professional</div>
    </div>
    <div class="example-grid">
      <div class="example-card ok-ex"><div class="example-label ok-ex">TripTrav B2C — Correcte</div><p>"Troba el teu proper company de viatge i explora Europa sense límits. Tot en una sola app."</p></div>
      <div class="example-card nok-ex"><div class="example-label nok-ex">TripTrav B2C — Incorrecte</div><p>"La nostra plataforma facilita la coordinació logística de grups de turistes a escala europea."</p></div>
      <div class="example-card ok-ex"><div class="example-label ok-ex">WTO empresarial — Correcte</div><p>"WTO (Worldwide Tourism Outreach, S.L.) ofereix als seus aliats visibilitat directa davant milers de viatgers europeus actius."</p></div>
      <div class="example-card nok-ex"><div class="example-label nok-ex">WTO B2B — Incorrecte</div><p>"TripTrav és una empresa fundada el 2025…" — Error: TripTrav és el producte; WTO és l'empresa.</p></div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 08 DIGITAL -->
  <section id="digital">
    <span class="sec-label">08 — Aplicació digital</span>
    <h2 class="sec-title">TripTrav a l'app</h2>
    <p class="sec-body">L'app usa exclusivament la marca TripTrav. El blau marí domina la barra de navegació i elements clau; el daurat s'usa únicament per a crides a l'acció (CTA) i elements destacats.</p>
    <div class="mockup-wrap">
      <div class="phone">
        <div class="phone-bar">
          <div class="phone-logo-row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <g transform="translate(12,12) rotate(-35)">
                <rect x="-7" y="-1.8" width="14" height="3.6" rx="1.8" fill="#F0A500"/>
                <polygon points="-1.5,-1.8 4,-1.8 7,4.5 1,4.5" fill="#fff" opacity="0.9"/>
                <polygon points="-1.5,1.8 4,1.8 7,-4.5 1,-4.5" fill="#fff" opacity="0.9"/>
                <polygon points="-7,-1.8 -7,0 -4.5,-1.8" fill="#fff" opacity="0.75"/>
                <polygon points="-7,1.8 -7,0 -4.5,1.8" fill="#fff" opacity="0.75"/>
              </g>
            </svg>
            <span class="phone-wm">TripTrav<span class="gold">.</span></span>
          </div>
          <div class="phone-hamburger"><span></span><span></span><span></span></div>
        </div>
        <div class="phone-body">
          <div class="phone-sec">Viatges populars</div>
          <div class="phone-card"><div class="phone-ct">Amsterdam · 3 places lliures</div><div class="phone-cs">14–18 jul · Des de 89€/persona</div><div class="phone-badge">Compartit</div></div>
          <div class="phone-card"><div class="phone-ct">Lisboa · 2 places lliures</div><div class="phone-cs">22–26 jul · Des de 72€/persona</div><div class="phone-badge">Compartit</div></div>
          <div class="phone-cta">Explorar destins</div>
        </div>
      </div>
      <div class="mockup-notes">
        <h3>Regles d'aplicació</h3>
        <p>L'app és l'espai on els usuaris viuen la marca TripTrav. Cada element visual reforça la identitat corporativa.</p>
        <div class="mockup-rule">Barra de navegació sempre en blau marí (#1F4E79)</div>
        <div class="mockup-rule">Botons d'acció principal (CTA) sempre en daurat (#F0A500)</div>
        <div class="mockup-rule">Cards i fons de llista en blau clar (#E8F0F8)</div>
        <div class="mockup-rule">Badges i etiquetes en blau marí sobre blanc</div>
        <div class="mockup-rule">Text principal en carbó (#2D2D2D), mai en negre pur</div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- 09 ICONOGRAFIA -->
  <section id="iconografia">
    <span class="sec-label">09 — Iconografia</span>
    <h2 class="sec-title">Sistema d'icones</h2>
    <p class="sec-body">TripTrav usa un estil d'iconografia de línies fines i consistents (stroke 1.75px). Les icones segueixen la paleta corporativa. El símbol de l'avió és l'element gràfic principal de la marca i no es combina amb altres icones de transport.</p>
    <div class="icon-grid">
      <div class="icon-box primary">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <g transform="translate(18,18) rotate(-35)">
            <rect x="-11" y="-2.5" width="22" height="5" rx="2.5" fill="#F0A500"/>
            <polygon points="-2,-2.5 6,-2.5 12,6.5 2,6.5" fill="#fff" opacity="0.9"/>
            <polygon points="-2,2.5 6,2.5 12,-6.5 2,-6.5" fill="#fff" opacity="0.9"/>
            <polygon points="-11,-2.5 -11,0 -7.5,-2.5" fill="#fff" opacity="0.75"/>
            <polygon points="-11,2.5 -11,0 -7.5,2.5" fill="#fff" opacity="0.75"/>
          </g>
        </svg>
        <div class="icon-label">Símbol principal</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M18 4C13 4 9 8 9 13C9 19.5 18 32 18 32C18 32 27 19.5 27 13C27 8 23 4 18 4Z" stroke="#1F4E79" stroke-width="1.75" fill="#E8F0F8"/>
          <circle cx="18" cy="13" r="4" fill="#1F4E79"/>
        </svg>
        <div class="icon-label">Localització</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="13" cy="11" r="4.5" stroke="#1F4E79" stroke-width="1.75" fill="#E8F0F8"/>
          <circle cx="24" cy="11" r="4.5" stroke="#F0A500" stroke-width="1.75" fill="rgba(240,165,0,0.15)"/>
          <path d="M4 29C4 24 8 20 13 20C15.5 20 17.7 21 19.2 22.7" stroke="#1F4E79" stroke-width="1.75" fill="none" stroke-linecap="round"/>
          <path d="M15 29C15 24 19 20 24 20C29 20 33 24 33 29" stroke="#F0A500" stroke-width="1.75" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="icon-label">Companys</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M18 5L21.5 13.5H31L23.5 18.5L26.5 27L18 22L9.5 27L12.5 18.5L5 13.5H14.5Z" stroke="#F0A500" stroke-width="1.75" fill="rgba(240,165,0,0.15)" stroke-linejoin="round"/>
        </svg>
        <div class="icon-label">Valoració</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="6" y="5" width="24" height="27" rx="3" stroke="#1F4E79" stroke-width="1.75" fill="#E8F0F8"/>
          <path d="M12 14l3 3 6-6" stroke="#F0A500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 22h12" stroke="#1F4E79" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <path d="M12 27h8" stroke="#1F4E79" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
        </svg>
        <div class="icon-label">Checklist</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M5 7C5 5.9 5.9 5 7 5H29C30.1 5 31 5.9 31 7V23C31 24.1 30.1 25 29 25H11L5 31V7Z" stroke="#1F4E79" stroke-width="1.75" fill="#E8F0F8" stroke-linejoin="round"/>
          <path d="M11 13h14M11 18h9" stroke="#1F4E79" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
        </svg>
        <div class="icon-label">Xat grupal</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="4" y="10" width="28" height="18" rx="3" stroke="#1F4E79" stroke-width="1.75" fill="#E8F0F8"/>
          <path d="M4 15h28" stroke="#1F4E79" stroke-width="1.75"/>
          <circle cx="26" cy="22" r="3" fill="#F0A500"/>
        </svg>
        <div class="icon-label">Despeses</div>
      </div>
      <div class="icon-box">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M5 14L9 8l4.5 5L18 6l4.5 7L27 8l4 6-4 15H9L5 14Z" stroke="#F0A500" stroke-width="1.75" fill="rgba(240,165,0,0.15)" stroke-linejoin="round"/>
        </svg>
        <div class="icon-label">Premium</div>
      </div>
    </div>
    <div class="info-card">
      <div class="info-card-title">Directrius d'iconografia</div>
      <p>Totes les icones usen un traç de 1.75px. El color principal és el blau marí (#1F4E79) i l'accent el daurat (#F0A500). Les àrees interiors usen el blau clar (#E8F0F8) com a farciment. Mai usar icones de tercers sense adaptar-les al sistema visual de TripTrav.</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div>
      <strong>WTO</strong> · Worldwide Tourism Outreach, S.L.<br>
      <span style="font-size:12px;opacity:.5;">Empresa titular de la marca TripTrav</span>
    </div>
    <div class="footer-right">
      Manual d'Imatge Corporativa v1.0<br>
      <small>Projecte IPO II · 2025 · Ús intern i aliats</small>
    </div>
  </footer>

</div>
`;

export default function Branding() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      
      {/* Presentació de l'asset de logo de TripTrav */}
      <div style={{
        maxWidth: '1000px',
        margin: '60px auto',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          padding: '60px',
          backgroundColor: '#1F4E79',
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <img 
            src={triptrav} 
            alt="Logo de TripTrav" 
            style={{
              height: '120px',
              width: 'auto',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
            }}
          />
          <div style={{ color: '#fff', textAlign: 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: '600', marginBottom: '12px' }}>
              TripTrav<span style={{ color: '#F0A500' }}>.</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
              La plataforma social de viatges compartits
            </div>
          </div>
        </div>
        <div style={{ 
          fontSize: '14px', 
          color: '#8A8A8A',
          fontStyle: 'italic'
        }}>
          Recurs de logo principal de TripTrav per a aplicacions digitals i impreses
        </div>
      </div>
    </div>
  )
}
