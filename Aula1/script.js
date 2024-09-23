const meuButton = document.getElementById('meu-button');

meuButton.addEventListener('click', () => {
  console.log('Eu fui clicado mesmo!!!');
});

let nome = 'Thales';
let sobrenome = 'Avila';
let conta = '@thalesavila';

console.log(
  'Meu nome eh ' +
    nome +
    ', meu sobrenome eh ' +
    sobrenome +
    ' e a minha conta eh ' +
    conta
);

console.log(
  `Meu nome eh ${nome} meu sobrenome eh ${sobrenome} e a minha conta eh ${conta} e minha idade eh ${
    17 * 2
  }`
);
