const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const btnGenerate = document.querySelector('#generate-btn');
const passwordLen = document.querySelector('#length-pass');
const isSelected = document.querySelector('#symbols-numbers');
const passEl = document.querySelectorAll('.created-pass');
const pass1El = document.querySelector('#pass1');
const pass2El = document.querySelector('#pass2');

function randomNumber(trueFalse) {
  return trueFalse
    ? Math.floor(Math.random() * characters.length)
    : Math.floor(Math.random() * 51);
}

function copyText(element) {
  navigator.clipboard.writeText(element.textContent);
  alert('Copied the password: ' + element.textContent);
}

btnGenerate.addEventListener('click', () => {
  let index = passwordLen.value === '' ? 15 : Number(passwordLen.value);
  let isIncluded = isSelected.checked;
  let password1 = '';
  let password2 = '';

  for (let i = 0; i < index; i++) {
    password1 += characters[randomNumber(isIncluded)];
    password2 += characters[randomNumber(isIncluded)];
  }

  pass1El.textContent = password1;
  pass2El.textContent = password2;

  passEl.forEach((el) => {
    el.classList.remove('hidden');
  });
});
