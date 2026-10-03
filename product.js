const flavourData = {
  classic: {
    name: 'Classic',
    number: '01',
    descriptor: 'Sugarcane flavour',
    headline: 'Cane. Clear. Classic.',
    intro: 'The familiar, bright character of sugarcane in a crisp ready-to-drink format.',
    note: 'A straightforward sugarcane taste for the moments that call for something instantly recognisable.',
    ingredient: 'Sugarcane',
    ingredientCopy: 'The character at the heart of every CANEJIVA bottle.',
    colour: '#d6b739',
    ink: '#10291c',
    image: 'classic.png'
  },
  mint: {
    name: 'Mint',
    number: '02',
    descriptor: 'Sugarcane + mint',
    headline: 'A cooler kind of cane.',
    intro: 'Sugarcane character meets a clean, garden-fresh mint note.',
    note: 'Made for the heat, the commute and every chilled break in between.',
    ingredient: 'Mint',
    ingredientCopy: 'A lively mint note for a clean, cooling flavour cue.',
    colour: '#a6df6a',
    ink: '#10291c',
    image: 'mint.png'
  },
  ginger: {
    name: 'Ginger',
    number: '03',
    descriptor: 'Sugarcane + ginger',
    headline: 'Cane with a little kick.',
    intro: 'Sugarcane character with the distinctive, warming edge of ginger.',
    note: 'A more expressive pour for people who like their refreshment with personality.',
    ingredient: 'Ginger',
    ingredientCopy: 'A distinctive ginger note that gives the range its spicy side.',
    colour: '#e0a141',
    ink: '#10291c',
    image: 'ginger.png'
  }
};

const flavour = flavourData[document.body.dataset.flavour] || flavourData.classic;
document.documentElement.style.setProperty('--flavour-colour', flavour.colour);
document.documentElement.style.setProperty('--flavour-ink', flavour.ink);

document.querySelectorAll('[data-product-name]').forEach((element) => { element.textContent = flavour.name; });
document.querySelectorAll('[data-product-number]').forEach((element) => { element.textContent = flavour.number; });
document.querySelectorAll('[data-product-descriptor]').forEach((element) => { element.textContent = flavour.descriptor; });
document.querySelectorAll('[data-product-headline]').forEach((element) => { element.textContent = flavour.headline; });
document.querySelectorAll('[data-product-intro]').forEach((element) => { element.textContent = flavour.intro; });
document.querySelectorAll('[data-product-note]').forEach((element) => { element.textContent = flavour.note; });
document.querySelectorAll('[data-product-ingredient]').forEach((element) => { element.textContent = flavour.ingredient; });
document.querySelectorAll('[data-product-ingredient-copy]').forEach((element) => { element.textContent = flavour.ingredientCopy; });
document.querySelectorAll('[data-product-image]').forEach((element) => {
  element.src = `../../media/${flavour.image}`;
  element.alt = `CANEJIVA ${flavour.name} sugarcane beverage bottle`;
});
