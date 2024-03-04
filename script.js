const output = document.getElementById("demo");
const input = document.getElementById("input-text__id");
const container = document.getElementById("text-container");

let size = 150;
let opsz = 250;
let wdth = 250;

//scroll to top

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

container.style = `--text-size: ${size}pt; --text-opsz: ${opsz}; --text-wdth:${wdth}`


//Size
const sliderSize = document.getElementById("silder-size");
const sizeLabelValue = document.getElementById("slider-size__value");
sizeLabelValue.innerHTML = size;
sliderSize.oninput = function () {
  console.log('sliderSize', this.value);
  size = this.value;
  container.style = `--text-size: ${size}pt; --text-opsz: ${opsz}; --text-wdth:${wdth}`;
  sizeLabelValue.innerHTML = size;

}

// opsz

const sliderOpsz = document.getElementById("silder-opsz");
const opszLabelValue = document.getElementById("slider-opsz__value");
opszLabelValue.innerHTML = opsz;

sliderOpsz.oninput = function () {
  console.log('sliderOpsz', this.value);
  opsz = this.value;
  container.style = `--text-size: ${size}pt; --text-opsz: ${opsz}; --text-wdth:${wdth}`;
  opszLabelValue.innerHTML = opsz;
}

// wdth
// slider-wdth__value
const sliderWdth = document.getElementById("silder-wdth");
const wdthLabelValue = document.getElementById("slider-wdth__value");
wdthLabelValue.innerHTML = wdth;

sliderWdth.oninput = function () {
  console.log('sliderWdth', this.value);
  wdth = this.value;
  container.style = `--text-size: ${size}pt; --text-opsz: ${opsz}; --text-wdth:${wdth}`;
  wdthLabelValue.innerHTML = wdth;
}

// Animation
Splitting()

const mouseMove = e => {
  const chars = document.querySelectorAll('nav a  .char');

  [...chars].forEach(char => {
    const position = char.getBoundingClientRect();
    const x = position.left + position.width / 2;
    const y = position.top + position.height / 2;

    const distanceX = Math.abs(e.clientX - x);
    const distanceY = Math.abs(e.clientY - y);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > 100) {
      char.style['font-variation-settings'] = `'opsz' 1`;
    } else {
      const size = 100 + ((100 - distance) * 5);
      char.style['font-variation-settings'] = `'opsz' ${size}`;
    }
  });
}

document.onmousemove = mouseMove;




setInterval(() => {
  const alef = document.getElementById("alef__h");
  let style = window.getComputedStyle(alef);
  let fontVariationSettings = style.getPropertyValue('font-variation-settings');

  const [opsz, wdth] = fontVariationSettings.split(',');
  const opszVal = Math.floor(opsz.split(' ')[1]);
  const wdthVal = Math.floor(wdth.trim().split(' ')[1]);

  const pWeight = document.getElementsByClassName("p-info-en p-weight");
  pWeight[0].innerHTML = `Weight.${opszVal}`;
  pWeight[1].innerHTML = `Weight.${opszVal}`;
  pWeight[2].innerHTML = `Weight.${opszVal}`;

  const pWidth = document.getElementsByClassName("p-info-en p-width");
  pWidth[0].innerHTML = `Width.${wdthVal}`;
  pWidth[1].innerHTML = `Width.${wdthVal}`;
  pWidth[2].innerHTML = `Width.${wdthVal}`;


}, 40)



const div = document.getElementById('transform__container');

div.addEventListener('mousemove', e => {
  x = e.offsetX;
  y = e.offsetY;
  console.log('x', x);
  console.log('y', y);

  xPercent = (x / div.offsetWidth) * 500;
  yPercent = (y / div.offsetHeight) * 500;
  console.log('xPercent', xPercent);
  console.log('yPercent', yPercent);

  const title = document.getElementById('title');
  title.style['font-variation-settings'] = `'opsz' ${yPercent}, 'wdth' ${xPercent}`;
});