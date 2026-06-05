/* ===== MEGA ENERGIE SA — shared shell + i18n + interactions ===== */
const I18N = {
  fr: {
    'nav.home':'Accueil','nav.about':'À propos','nav.trade':'Nos activités','nav.services':'Savoir-faire','nav.company':'L’entreprise','nav.why':'Pourquoi MEGA','nav.cta':'Demander un devis',
    'hero.eyebrow':'ÉNERGIE · MATIÈRES PREMIÈRES · LOGISTIQUE',
    'hero.title':'Le négoce <span class="hl-green">à travers l’Afrique de l’Ouest</span> et au-delà.',
    'hero.sub':'MEGA ENERGIE SA négocie et transporte des produits pétroliers, du pétrole &amp; gaz, de l’or, du riz et du sucre — reliant le Burkina Faso et la région aux marchés mondiaux depuis 2009.',
    'hero.tagline':'« L’énergie en mouvement. »','hero.cta1':'Démarrer un échange','hero.cta2':'Nos produits',
    'hero.stat1':'Création','hero.stat3':'Filières',
    'marquee':'<span>Produits pétroliers</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Pétrole &amp; Gaz</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Or</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Riz</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Sucre</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Transport &amp; Logistique</span><span class="w-1 h-1 rounded-full bg-gold/60"></span>',
    'home.teaser.eyebrow':'CE QUE NOUS FAISONS',
    'home.teaser.title':'Une maison de négoce intégrée, de l’<span class="hl-gold">approvisionnement</span> à la <span class="hl-green">livraison</span>.',
    'home.teaser.link':'En savoir plus',
    'about.eyebrow':'QUI SOMMES-NOUS',
    'about.title':'Une maison de négoce burkinabè bâtie sur la <span class="hl-gold">confiance</span> et le <span class="hl-green">mouvement</span>.',
    'about.p1':'Fondée en 2009 à Fada N’Gourma, MEGA ENERGIE SA a démarré dans la distribution de produits pétroliers avant de devenir un groupe diversifié de négoce et de logistique — traitant le pétrole &amp; gaz, l’or, le riz et le sucre, et les acheminant avec fiabilité à travers le Burkina Faso et l’Afrique de l’Ouest.',
    'about.p2':'Avec un réseau de banques correspondantes en Europe, en Amérique du Nord et au-delà, nous relions l’offre régionale aux marchés mondiaux — sous une seule responsabilité, de l’approvisionnement à la livraison.',
    'about.lead':'Dirigée par <span class="text-cream">Samuel Ouoba</span> (Administrateur Général) et <span class="text-cream">Comlan Fréjus Victor Amoussou</span> (Administrateur Général Adjoint).',
    'about.badge.t':'Depuis 2009','about.badge.p':'Née à Fada N’Gourma. De confiance dans toute la région.',
    'about.v1.t':'Intégrité','about.v1.p':'Chaque contrat honoré. Chaque cargaison maîtrisée.',
    'about.v2.t':'Vision','about.v2.p':'Diversifiée, régionale et pensée pour durer.',
    'trade.eyebrow':'PORTEFEUILLE','trade.title':'Ce que nous <span class="hl-gold">négocions</span> &amp; transportons',
    'trade.sub':'Cinq filières, un seul opérateur responsable — sourcées, financées, transportées et livrées.',
    'trade.c1.t':'Produits pétroliers','trade.c1.p':'Gasoil, diesel et carburants — distribués aux spécifications, dans les délais.',
    'trade.c2.t':'Pétrole &amp; Gaz','trade.c2.p':'Négoce, approvisionnement et enlèvement de brut et de gaz sur les marchés majeurs et régionaux.',
    'trade.c3.t':'Or','trade.c3.p':'Sourcing et négoce de métaux précieux, avec conformité et traçabilité rigoureuses.',
    'trade.c4.t':'Riz','trade.c4.p':'Négoce et distribution agricoles en gros, pour les marchés de denrées de base.',
    'trade.c5.t':'Sucre','trade.c5.p':'Import, négoce et distribution de sucre à travers les chaînes d’approvisionnement régionales.',
    'trade.c6.t':'Transport &amp; Logistique','trade.c6.p':'Transport routier et en vrac qui achemine chaque produit jusqu’au dernier kilomètre.',
    'services.eyebrow':'SAVOIR-FAIRE','services.title':'Toute la chaîne, <span class="hl-green">de bout en bout</span>',
    'services.sub':'Quatre savoir-faire complémentaires couvrant l’intégralité du cycle de négoce et de logistique.',
    'services.c1.t':'Négoce &amp; Approvisionnement','services.c1.p':'Sourcing et tarification compétitifs, lignes d’approvisionnement sécurisées.',
    'services.c2.t':'Transport &amp; Logistique','services.c2.p':'Transport routier et en vrac, affrété et suivi jusqu’à destination finale.',
    'services.c3.t':'Stockage &amp; Distribution','services.c3.p':'Des réseaux de distribution fiables qui maintiennent un approvisionnement stable.',
    'services.c4.t':'Conformité &amp; Financement','services.c4.p':'Financement du négoce, KYC et conformité réglementaire complète.',
    'network.eyebrow':'L’ENTREPRISE','network.title':'Un acteur régional à <span class="hl-gold">portée mondiale</span>',
    'network.sub':'Siège à Fada N’Gourma, Burkina Faso — des partenaires bancaires et commerciaux dans le monde entier.',
    'network.s1':'Années d’activité','network.s3':'Filières','network.s4':'Banques correspondantes',
    'network.banks':'Réseau de banques correspondantes',
    'partners.title':'Partenaires','partners.sir.d':'SIR · Raffinage · Côte d’Ivoire',
    'network.legal':'<span><span class="text-cream">RCCM</span> BF-FDG 2009 B38</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">IFU</span> 00026303 L</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">Forme juridique</span> Société Anonyme</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">Siège</span> Fada N’Gourma, Burkina Faso</span>',
    'why.eyebrow':'POURQUOI MEGA ENERGIE','why.title':'Une solidité sur laquelle compter.',
    'why.sub':'Trois raisons pour lesquelles producteurs, acheteurs et partenaires nous font confiance.',
    'why.i1.t':'Fiabilité sous pression','why.i1.p':'Quand les marchés bougent, nos cargaisons arrivent. La continuité opérationnelle est notre promesse.',
    'why.i2.t':'Racines régionales, liens mondiaux','why.i2.p':'Une présence forte en Afrique de l’Ouest, reliée à des partenaires internationaux.',
    'why.i3.t':'La conformité d’abord','why.i3.p':'Des normes KYC et réglementaires rigoureuses protègent chaque transaction et chaque partenaire.',
    'why.how':'NOTRE MÉTHODE',
    'why.st1.t':'Sourcer &amp; tarifer','why.st1.p':'Nous sécurisons l’offre et la tarifons face aux marchés en temps réel.',
    'why.st2.t':'Financer &amp; sécuriser','why.st2.p':'Le financement du négoce et la conformité verrouillent l’opération.',
    'why.st3.t':'Transporter &amp; livrer','why.st3.p':'Nous acheminons la cargaison et livrons aux spécifications, entièrement documentée.',
    'why.st4.t':'Partenariat &amp; croissance','why.st4.p':'Nous bâtissons des relations durables, pas des opérations ponctuelles.',
    'contact.eyebrow':'CONTACT','contact.title':'<span class="hl-green">Négocions</span> ensemble.',
    'contact.sub':'Dites-nous ce que vous souhaitez sourcer, financer, transporter ou approvisionner — notre équipe vous répond rapidement.',
    'form.name':'Nom complet','form.name.ph':'Jean Dupont','form.company':'Société','form.company.ph':'Société SARL',
    'form.email':'E-mail','form.commodity':'Produit concerné','form.other':'Autre','form.message':'Message','form.message.ph':'Volume, itinéraire, échéance…',
    'form.send':'Envoyer la demande','form.ok':'✓ Merci — notre équipe vous recontacte très vite.',
    'contact.email':'E-mail','contact.phone':'Téléphone','contact.hq':'Siège social',
    'cta.title':'Prêt à négocier ?','cta.sub':'Notre équipe vous répond sous un jour ouvré.',
    'footer.tagline':'Énergie, matières premières &amp; logistique — au service de l’Afrique de l’Ouest depuis 2009.',
    'footer.h1':'Entreprise','footer.h2':'Activités','footer.h3':'Contact','footer.rights':'Tous droits réservés.','footer.credits':'Crédits photos : Wikimedia Commons (CC BY-SA 4.0 / CC0).',
  },
  en: {
    'nav.home':'Home','nav.about':'About','nav.trade':'What We Trade','nav.services':'Capabilities','nav.company':'Company','nav.why':'Why MEGA','nav.cta':'Request a Quote',
    'hero.eyebrow':'ENERGY · COMMODITIES · LOGISTICS',
    'hero.title':'Trade <span class="hl-green">across West Africa</span> and beyond.',
    'hero.sub':'MEGA ENERGIE SA trades and transports petroleum products, oil &amp; gas, gold, rice and sugar — connecting Burkina Faso and the region to global markets since 2009.',
    'hero.tagline':'“ Energy in motion. ”','hero.cta1':'Start a Conversation','hero.cta2':'Our Commodities',
    'hero.stat1':'Established','hero.stat3':'Commodity lines',
    'marquee':'<span>Petroleum Products</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Oil &amp; Gas</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Gold</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Rice</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Sugar</span><span class="w-1 h-1 rounded-full bg-gold/60"></span><span>Transport &amp; Logistics</span><span class="w-1 h-1 rounded-full bg-gold/60"></span>',
    'home.teaser.eyebrow':'WHAT WE DO',
    'home.teaser.title':'An integrated commodity house, from <span class="hl-gold">sourcing</span> to <span class="hl-green">delivery</span>.',
    'home.teaser.link':'Learn more',
    'about.eyebrow':'WHO WE ARE',
    'about.title':'A Burkinabè commodity house built on <span class="hl-gold">trust</span> and <span class="hl-green">movement</span>.',
    'about.p1':'Founded in 2009 in Fada N’Gourma, MEGA ENERGIE SA began in the distribution of petroleum products and grew into a diversified trading and logistics group — handling oil &amp; gas, gold, rice and sugar, and moving them reliably across Burkina Faso and West Africa.',
    'about.p2':'With a correspondent banking network reaching Europe, North America and beyond, we connect regional supply to global markets — under one accountable roof, from sourcing to delivery.',
    'about.lead':'Led by <span class="text-cream">Samuel Ouoba</span> (Administrateur Général) and <span class="text-cream">Comlan Fréjus Victor Amoussou</span> (Administrateur Général Adjoint).',
    'about.badge.t':'Since 2009','about.badge.p':'Built in Fada N’Gourma. Trusted across the region.',
    'about.v1.t':'Integrity','about.v1.p':'Every contract honoured. Every cargo accounted for.',
    'about.v2.t':'Vision','about.v2.p':'Diversified, regional, and built for the long term.',
    'trade.eyebrow':'PORTFOLIO','trade.title':'What we <span class="hl-gold">trade</span> &amp; move',
    'trade.sub':'Five commodity lines, one accountable operator — sourced, financed, transported and delivered.',
    'trade.c1.t':'Petroleum Products','trade.c1.p':'Gasoil, diesel and fuels — distributed and supplied to specification, on schedule.',
    'trade.c2.t':'Oil &amp; Gas','trade.c2.p':'Crude and gas trading, supply and offtake across major and regional markets.',
    'trade.c3.t':'Gold','trade.c3.p':'Sourcing and trading of precious metals with rigorous compliance and provenance.',
    'trade.c4.t':'Rice','trade.c4.p':'Bulk agricultural trade and distribution, supplying staple food markets reliably.',
    'trade.c5.t':'Sugar','trade.c5.p':'Import, trade and distribution of sugar across regional supply chains.',
    'trade.c6.t':'Transport &amp; Logistics','trade.c6.p':'Road and bulk transport that moves every commodity to the last mile.',
    'services.eyebrow':'CAPABILITIES','services.title':'The full chain, <span class="hl-green">end to end</span>',
    'services.sub':'Four complementary capabilities covering the entire trading and logistics cycle.',
    'services.c1.t':'Trading &amp; Supply','services.c1.p':'Sourcing and pricing commodities competitively, with secure supply lines.',
    'services.c2.t':'Transport &amp; Logistics','services.c2.p':'Road and bulk transport, chartered and tracked to the final destination.',
    'services.c3.t':'Storage &amp; Distribution','services.c3.p':'Reliable distribution networks that keep supply steady across the region.',
    'services.c4.t':'Compliance &amp; Finance','services.c4.p':'Trade finance, KYC and full regulatory compliance protecting every deal.',
    'network.eyebrow':'THE COMPANY','network.title':'A regional operator with <span class="hl-gold">global reach</span>',
    'network.sub':'Headquartered in Fada N’Gourma, Burkina Faso — banking and trading partners worldwide.',
    'network.s1':'Years in operation','network.s3':'Commodity verticals','network.s4':'Correspondent banks',
    'network.banks':'Correspondent banking network',
    'partners.title':'Partners','partners.sir.d':'SIR · Refining · Côte d’Ivoire',
    'network.legal':'<span><span class="text-cream">RCCM</span> BF-FDG 2009 B38</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">IFU</span> 00026303 L</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">Legal form</span> Public Limited Company (SA)</span><span class="hidden sm:inline text-faint">·</span><span><span class="text-cream">Head office</span> Fada N’Gourma, Burkina Faso</span>',
    'why.eyebrow':'WHY MEGA ENERGIE','why.title':'Strength you can trade on.',
    'why.sub':'Three reasons producers, buyers and partners trust us.',
    'why.i1.t':'Reliability under pressure','why.i1.p':'When markets move, our cargoes still arrive. Operational continuity is our promise.',
    'why.i2.t':'Regional roots, global links','why.i2.p':'Deep presence in West Africa, connected to international banking and trade partners.',
    'why.i3.t':'Compliance first','why.i3.p':'Rigorous KYC and regulatory standards safeguard every transaction and partner.',
    'why.how':'HOW WE WORK',
    'why.st1.t':'Source &amp; price','why.st1.p':'We secure supply and price it competitively against live markets.',
    'why.st2.t':'Finance &amp; secure','why.st2.p':'Trade finance and compliance lock the deal in safely.',
    'why.st3.t':'Transport &amp; deliver','why.st3.p':'We move the cargo and deliver on-spec, fully documented.',
    'why.st4.t':'Partner &amp; grow','why.st4.p':'We build long-term relationships, not one-off transactions.',
    'contact.eyebrow':'CONTACT','contact.title':'Let’s trade <span class="hl-green">together</span>.',
    'contact.sub':'Tell us what you need to source, finance, transport or supply — our team responds promptly.',
    'form.name':'Full name','form.name.ph':'Jane Doe','form.company':'Company','form.company.ph':'Company Ltd.',
    'form.email':'Email','form.commodity':'Commodity of interest','form.other':'Other','form.message':'Message','form.message.ph':'Volume, route, timeframe…',
    'form.send':'Send Enquiry','form.ok':'✓ Thank you — our team will be in touch shortly.',
    'contact.email':'Email','contact.phone':'Phone','contact.hq':'Headquarters',
    'cta.title':'Ready to trade?','cta.sub':'Our team responds within one business day.',
    'footer.tagline':'Energy, commodities &amp; logistics — moving West Africa forward since 2009.',
    'footer.h1':'Company','footer.h2':'Business','footer.h3':'Get in touch','footer.rights':'All rights reserved.','footer.credits':'Photo credits: Wikimedia Commons (CC BY-SA 4.0 / CC0).',
  }
};

const NAV_HTML = `
<header id="nav" class="fixed top-0 inset-x-0 z-50">
  <nav class="wrap flex items-center justify-between py-4">
    <a href="index.html" class="flex items-center gap-3 shrink-0">
      <img src="logo-mark.png" alt="MEGA ENERGIE SA" class="h-10 w-auto">
      <span class="leading-none"><span class="block text-lg font-bold tracking-tight text-greengold">MEGA</span><span class="block text-[9px] tracking-[.34em] text-gold font-semibold mt-0.5">ENERGIE SA</span></span>
    </a>
    <div class="hidden lg:flex items-center gap-7 text-sm font-medium">
      <a href="a-propos.html" class="nlink" data-page="about" data-i18n="nav.about">À propos</a>
      <a href="activites.html" class="nlink" data-page="trade" data-i18n="nav.trade">Nos activités</a>
      <a href="savoir-faire.html" class="nlink" data-page="services" data-i18n="nav.services">Savoir-faire</a>
      <a href="entreprise.html" class="nlink" data-page="company" data-i18n="nav.company">L’entreprise</a>
      <a href="pourquoi.html" class="nlink" data-page="why" data-i18n="nav.why">Pourquoi MEGA</a>
    </div>
    <div class="flex items-center gap-3">
      <div class="lang-toggle" role="group" aria-label="Language"><button data-lang="fr">FR</button><button data-lang="en">EN</button></div>
      <a href="devis.html" class="hidden sm:inline-flex btn btn-gold !min-h-0 !py-2.5 !px-5 !text-sm" data-i18n="nav.cta">Demander un devis</a>
      <button id="burger" class="lg:hidden w-11 h-11 grid place-items-center -mr-2" aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F3F5F3" stroke-width="1.6"><path d="M3 7h18M3 17h18"/></svg></button>
    </div>
  </nav>
</header>`;

const SHEET_HTML = `
<div id="msheet" class="closed fixed inset-0 z-[65] lg:hidden bg-ink-900/95 backdrop-blur-xl flex flex-col">
  <div class="wrap flex items-center justify-between py-4">
    <span class="text-sm tracking-[.3em] text-gold font-semibold">MENU</span>
    <button id="mclose" class="w-11 h-11 grid place-items-center -mr-2" aria-label="Close"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F3F5F3" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  </div>
  <div class="wrap flex-1 flex flex-col justify-center gap-6">
    <a href="index.html" class="mlink" data-i18n="nav.home">Accueil</a>
    <a href="a-propos.html" class="mlink" data-i18n="nav.about">À propos</a>
    <a href="activites.html" class="mlink" data-i18n="nav.trade">Nos activités</a>
    <a href="savoir-faire.html" class="mlink" data-i18n="nav.services">Savoir-faire</a>
    <a href="entreprise.html" class="mlink" data-i18n="nav.company">L’entreprise</a>
    <a href="pourquoi.html" class="mlink" data-i18n="nav.why">Pourquoi MEGA</a>
  </div>
  <div class="wrap pb-10"><a href="devis.html" class="btn btn-gold w-full" data-i18n="nav.cta">Demander un devis</a></div>
</div>`;

const FOOTER_HTML = `
<footer class="border-t border-[color:var(--line)] pt-14 pb-10">
  <div class="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div class="sm:col-span-2 lg:col-span-1">
      <a href="index.html" class="flex items-center gap-3 mb-4">
        <img src="logo-mark.png" alt="MEGA ENERGIE SA" class="h-10 w-auto">
        <span><span class="block text-base font-bold text-greengold leading-none">MEGA</span><span class="block text-[9px] tracking-[.3em] text-gold font-semibold mt-0.5">ENERGIE SA</span></span>
      </a>
      <p class="text-sm text-muted max-w-xs font-light" data-i18n="footer.tagline">Énergie, matières premières &amp; logistique — au service de l’Afrique de l’Ouest depuis 2009.</p>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-4" data-i18n="footer.h1">Entreprise</h4>
      <ul class="space-y-2.5 text-sm text-muted font-light">
        <li><a href="a-propos.html" class="hover:text-gold transition" data-i18n="nav.about">À propos</a></li>
        <li><a href="pourquoi.html" class="hover:text-gold transition" data-i18n="nav.why">Pourquoi MEGA</a></li>
        <li><a href="entreprise.html" class="hover:text-gold transition" data-i18n="nav.company">L’entreprise</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-4" data-i18n="footer.h2">Activités</h4>
      <ul class="space-y-2.5 text-sm text-muted font-light">
        <li><a href="activites.html" class="hover:text-gold transition" data-i18n="nav.trade">Nos activités</a></li>
        <li><a href="savoir-faire.html" class="hover:text-gold transition" data-i18n="nav.services">Savoir-faire</a></li>
        <li><a href="devis.html" class="hover:text-gold transition" data-i18n="nav.cta">Demander un devis</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-4" data-i18n="footer.h3">Contact</h4>
      <ul class="space-y-2.5 text-sm text-muted font-light">
        <li><a href="mailto:directionmegaenergie.bf@gmail.com" class="hover:text-gold transition break-all">directionmegaenergie.bf@gmail.com</a></li>
        <li>+226 67 44 44 67</li>
        <li>Fada N’Gourma · Burkina Faso</li>
      </ul>
    </div>
  </div>
  <div class="wrap mt-12 pt-8 border-t border-[color:var(--line)] flex flex-col sm:flex-row justify-between gap-4 text-xs text-faint">
    <p>© <span id="yr">2026</span> MEGA ENERGIE SA · Société Anonyme. <span data-i18n="footer.rights">Tous droits réservés.</span></p>
    <p>RCCM BF-FDG 2009 B38 · IFU 00026303 L</p>
  </div>
  <div class="wrap mt-4 text-[11px] text-faint/70"><span data-i18n="footer.credits">Crédits photos : Wikimedia Commons (CC BY-SA 4.0 / CC0).</span></div>
</footer>`;

(function(){
  /* inject shared shell */
  const navMount = document.getElementById('nav-mount');
  const footMount = document.getElementById('footer-mount');
  if(navMount) navMount.innerHTML = NAV_HTML;
  document.body.insertAdjacentHTML('beforeend', SHEET_HTML);
  if(footMount) footMount.innerHTML = FOOTER_HTML;

  const yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();

  /* active nav link for current page */
  const page = document.body.dataset.page;
  if(page) document.querySelectorAll('#nav .nlink').forEach(a=> a.classList.toggle('active', a.dataset.page===page));

  /* language */
  const langBtns = document.querySelectorAll('[data-lang]');
  function setLang(l){
    if(!I18N[l]) l='fr';
    document.documentElement.lang=l;
    document.querySelectorAll('[data-i18n]').forEach(el=>{ const v=I18N[l][el.dataset.i18n]; if(v!=null) el.innerHTML=v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ const v=I18N[l][el.dataset.i18nPh]; if(v!=null) el.setAttribute('placeholder', v.replace(/&amp;/g,'&')); });
    langBtns.forEach(b=> b.classList.toggle('active', b.dataset.lang===l));
    try{ localStorage.setItem('lang',l); }catch(e){}
  }
  langBtns.forEach(b=> b.addEventListener('click',()=> setLang(b.dataset.lang)));
  let initial='fr'; try{ initial=localStorage.getItem('lang')||'fr'; }catch(e){}
  setLang(initial);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* mobile menu */
  const sheet=document.getElementById('msheet'), burger=document.getElementById('burger'), mclose=document.getElementById('mclose');
  let lenis=null;
  function openMenu(){ sheet.classList.remove('closed'); document.body.style.overflow='hidden'; if(lenis) lenis.stop(); }
  function closeMenu(){ sheet.classList.add('closed'); document.body.style.overflow=''; if(lenis) lenis.start(); }
  if(burger) burger.addEventListener('click', openMenu);
  if(mclose) mclose.addEventListener('click', closeMenu);
  sheet.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMenu));

  /* nav scrolled + progress */
  const nav=document.getElementById('nav'), prog=document.getElementById('progress');
  function onScroll(y){
    if(nav) nav.classList.toggle('scrolled', y>30);
    const h=document.documentElement.scrollHeight-window.innerHeight;
    if(prog) prog.style.width=(h>0? (y/h*100):0)+'%';
  }

  if(reduce){
    window.addEventListener('scroll',()=> onScroll(window.scrollY));
    document.querySelectorAll('.counter').forEach(el=> el.textContent=el.dataset.target);
    onScroll(0); return;
  }

  lenis=new Lenis({ duration:1.05, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)) });
  function raf(t){ lenis.raf(t); requestAnimationFrame(raf); } requestAnimationFrame(raf);
  lenis.on('scroll',({scroll})=> onScroll(scroll));
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{ const t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); lenis.scrollTo(t,{offset:-64}); } });
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);

  if(document.querySelector('[data-hero]')){
    gsap.set('[data-hero]',{opacity:0,y:34}); gsap.set('[data-hero-mark]',{opacity:0,scale:.9});
    gsap.timeline({defaults:{ease:'power3.out'}})
      .to('[data-hero]',{opacity:1,y:0,duration:.95,stagger:.1},.1)
      .to('[data-hero-mark]',{opacity:1,scale:1,duration:1.2,ease:'expo.out'},.15);
    gsap.to('[data-hero-mark]',{ y:70, ease:'none', scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true} });
  }

  document.querySelectorAll('[data-reveal]').forEach(el=>{
    ScrollTrigger.create({ trigger:el, start:'top 88%', onEnter:()=> el.classList.add('in') });
  });

  document.querySelectorAll('.counter').forEach(el=>{
    const target=+el.dataset.target;
    ScrollTrigger.create({ trigger:el, start:'top 92%', once:true, onEnter:()=>{
      const o={v:0}; gsap.to(o,{v:target,duration:1.6,ease:'power2.out',onUpdate:()=> el.textContent=Math.round(o.v)});
    }});
  });

  onScroll(0);
})();
