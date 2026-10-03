const pageProfiles = {
  products: {
    eyebrow: 'The full range',
    title: 'One sugarcane story.<br />Three distinct pours.',
    copy: 'Meet the CANEJIVA family: Classic for clarity, Mint for a cool lift, and Ginger for a more expressive finish.',
    visual: '../media/portfolio.png',
    alt: 'CANEJIVA Classic, Mint and Ginger beverages',
    content: `
      <section class="directory section">
        <div class="wrap"><p class="kicker">Choose your flavour</p><div class="directory-grid">
          <a class="directory-item classic" href="classic/"><span>01</span><img src="../media/classic.png" alt="CANEJIVA Classic bottle" /><div><p>Sugarcane flavour</p><h2>Classic</h2><b>Simple. Refreshing. Desi. &rarr;</b></div></a>
          <a class="directory-item mint" href="mint/"><span>02</span><img src="../media/mint.png" alt="CANEJIVA Mint bottle" /><div><p>Sugarcane + mint</p><h2>Mint</h2><b>Cool. Fresh. Refreshing. &rarr;</b></div></a>
          <a class="directory-item ginger" href="ginger/"><span>03</span><img src="../media/ginger.png" alt="CANEJIVA Ginger bottle" /><div><p>Sugarcane + ginger</p><h2>Ginger</h2><b>Spicy. Zesty. Distinctive. &rarr;</b></div></a>
        </div></div>
      </section>`
  },
  story: {
    eyebrow: 'Our story',
    title: 'A familiar Indian flavour, made for today.',
    copy: 'CANEJIVA brings the character of sugarcane into a convenient modern beverage format built for the everyday.',
    visual: '../media/portfolio.png',
    alt: 'CANEJIVA flavour range in a sugarcane setting',
    content: `
      <section class="story-detail section"><div class="wrap story-detail-layout"><div><p class="kicker">The idea</p><h2>Old favourites, new format.</h2></div><div><p class="lead-copy">The taste cues are immediately recognisable: sugarcane, mint and ginger. The presentation is deliberately modern: a colour-coded, easy-to-spot bottle made for a faster day.</p><p>Inspired by Indian taste preferences, CANEJIVA turns a familiar flavour experience into a clear choice in the cooler, at the counter and on the move.</p></div></div></section>
      <section class="quote-band"><div class="wrap">Desi flavour belongs in the modern refreshment moment.</div></section>`
  },
  why: {
    eyebrow: 'The CANEJIVA difference',
    title: 'Made for a clear choice at first glance.',
    copy: 'A straightforward flavour family, a confident bottle system and an easy-to-understand cold drink experience.',
    visual: '../media/mint.png',
    alt: 'CANEJIVA Mint bottle',
    content: `
      <section class="pillar-page section"><div class="wrap"><p class="kicker">Six reasons</p><div class="pillars">
        <article class="pillar"><span class="pillar-mark">01</span><h3>Refreshing taste</h3><p>Distinctive desi-inspired flavour experience.</p></article><article class="pillar"><span class="pillar-mark">GL</span><h3>With glucose</h3><p>Subject to final formulation and regulatory validation.</p></article><article class="pillar"><span class="pillar-mark">03</span><h3>Three flavours</h3><p>Classic, Mint and Ginger in one recognisable range.</p></article><article class="pillar"><span class="pillar-mark">PET</span><h3>Modern format</h3><p>Convenient, ready-to-drink PET bottle.</p></article><article class="pillar"><span class="pillar-mark">COLD</span><h3>Best served chilled</h3><p>Designed for a refreshing cold-drink experience.</p></article><article class="pillar"><span class="pillar-mark">IN</span><h3>Desi flavour</h3><p>Familiar Indian taste profile, modern presentation.</p></article>
      </div></div></section>`
  },
  quality: {
    eyebrow: 'Product quality',
    title: 'Clear details.<br />Confident choice.',
    copy: 'A compact 180 ml format and a consistent bottle architecture help make the range easy to recognise and easy to choose.',
    visual: '../media/classic.png',
    alt: 'CANEJIVA Classic bottle',
    content: `
      <section class="quality-detail section"><div class="wrap quality-detail-layout"><div><p class="kicker">At a glance</p><h2>Made to stay simple.</h2><p>Every flavour shares a consistent, premium faceted bottle system while retaining its own clear colour identity.</p></div><dl class="spec-list"><div><dt>Product</dt><dd>Flavoured Sugarcane Beverage</dd></div><div><dt>Variants</dt><dd>Classic | Mint | Ginger</dd></div><div><dt>Pack size</dt><dd>180 ml</dd></div><div><dt>Packaging</dt><dd>Food-grade PET bottle</dd></div><div><dt>Storage</dt><dd>Store cool, dry and away from direct sunlight.</dd></div><div><dt>Shelf life</dt><dd>Proposed: 6 months from date of packing*</dd></div></dl><p class="page-note">* Final declaration is subject to formulation, stability testing and regulatory validation.</p></div></section>`
  },
  retailers: {
    eyebrow: 'For retailers',
    title: 'Give your cooler a more colourful choice.',
    copy: 'CANEJIVA is designed for high-visibility retail environments, with three flavour cues customers can understand in a second.',
    visual: '../media/portfolio.png',
    alt: 'CANEJIVA full product portfolio',
    content: `
      <section class="partner-detail section"><div class="wrap partner-layout"><div><p class="kicker">Built for the shelf</p><h2>Ready for everyday retail.</h2><p>From kirana stores to cafes, highway outlets and convenience stores, the bottle format and distinctive variants are built to be easy to see and easy to stock.</p><a class="button button-dark" href="../contact/">Request product details</a></div><ul class="partner-list"><li>Retailers</li><li>Kirana stores</li><li>Cafes and restaurants</li><li>Highway outlets</li><li>Convenience stores</li><li>Institutional buyers</li></ul></div></section>`
  },
  distributors: {
    eyebrow: 'For distributors',
    title: 'Bring CANEJIVA to your market.',
    copy: 'A three-flavour range with strong shelf visibility, ready to support regional distribution partners.',
    visual: '../media/ginger.png',
    alt: 'CANEJIVA Ginger bottle',
    content: `
      <section class="partner-detail section"><div class="wrap partner-layout"><div><p class="kicker">Let us grow together</p><h2>A bright new range for your territory.</h2><p>We are interested in working with regional distribution partners who understand their market and want a bottle that can make a strong first impression.</p><a class="button button-dark" href="../contact/">Start an enquiry</a></div><ul class="partner-list"><li>Regional distributors</li><li>Beverage specialists</li><li>Modern trade partners</li><li>Institutional supply</li><li>Food-service channels</li><li>Local retail networks</li></ul></div></section>`
  },
  contact: {
    eyebrow: 'Contact CANEJIVA',
    title: 'Let us start the conversation.',
    copy: 'For product, retail and distribution enquiries, reach the CANEJIVA team directly.',
    visual: '../media/portfolio.png',
    alt: 'CANEJIVA beverage portfolio',
    content: `
      <section class="contact-detail section"><div class="wrap contact-layout"><div><p class="kicker">Get in touch</p><h2>For people who are ready to pour forward.</h2><p>Tell us about your retail business, distribution territory, cafe, restaurant or institution.</p></div><div class="contact-actions"><a href="mailto:hello@canejiva.in"><span>Email us</span><b>hello@canejiva.in</b></a><a href="tel:+919557555457"><span>Call us</span><b>+91 95575 55457</b></a><a href="../distributors/"><span>Partner with us</span><b>Distributor details &rarr;</b></a></div></div></section>`
  }
};

const currentPage = pageProfiles[document.body.dataset.page] || pageProfiles.products;
const pageRoot = document.querySelector('#page-root');

if (pageRoot) {
  pageRoot.innerHTML = `
    <section class="page-hero">
      <div class="wrap page-hero-layout">
        <div class="page-hero-copy"><p class="kicker on-dark">${currentPage.eyebrow}</p><h1>${currentPage.title}</h1><p>${currentPage.copy}</p></div>
        <figure class="page-hero-visual"><img src="${currentPage.visual}" alt="${currentPage.alt}" /></figure>
      </div>
    </section>
    ${currentPage.content}
    <section class="page-cta"><div class="wrap"><p>CANEJIVA<sup>TM</sup></p><h2>Desi taste.<br />Fresh energy.</h2><a class="button button-lime" href="../products/">Explore the range</a></div></section>`;
}
