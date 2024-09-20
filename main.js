console.log('Olá mundo!');

let novoElemento = document.createElement('h1');

novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

let elementoBody = document.body;

elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

let tutorial = document.createElement('div');

let tituloTutorial = document.createElement('h2');
tituloTutorial.innerText = 'Como fazer uma omelete';
tutorial.appendChild(tituloTutorial);

let listaPassos = document.createElement('ol');

let passos = [
    '1. Quebre 2 ou 3 ovos em uma tigela.',
    '2. Bata os ovos com um garfo ou batedor.',
    '3. Adicione sal, pimenta e temperos de sua preferência.',
    '4. Aqueça uma frigideira com um pouco de óleo ou manteiga.',
    '5. Despeje os ovos batidos na frigideira quente.',
    '6. Cozinhe em fogo médio, mexendo levemente ou dobrando as laterais.',
    '7. Quando estiver firme, dobre a omelete ao meio.',
    '8. Sirva imediatamente.'
];

passos.forEach(passo => {
    let item = document.createElement('li');
    item.innerText = passo;
    listaPassos.appendChild(item);
});

tutorial.appendChild(listaPassos);

elementoBody.appendChild(tutorial);

tutorial.style.backgroundColor = 'lightyellow';
tutorial.style.padding = '20px';
tutorial.style.border = '2px solid black';
tutorial.style.marginTop = '20px';
tutorial.style.fontFamily = 'Arial, sans-serif';
