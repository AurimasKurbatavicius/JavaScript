// console.log(Math.floor(5.6)); // suapvalina i mazaja puse
// console.log(Math.ceil(5.2)); // suapvalina i didziaja puse
// console.log(Math.round(5.4));
// console.log(Math.PI);
// console.log('Didziausias skaicius', Math.max(10, 15, 40, 30));
// console.log('Maziausias skaicius', Math.min(10, 15, 40, 30));
// // console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10) + 1);
// // console.log(Math.floor(Math.ceil(5.7)));

// DOM - document model object
// window.console.log('CodeAcademy');
// window.alert('Testuoju');
// console.log(window);
// console.log(document);
console.log(document.querySelector('h1'));
console.log(document.querySelector('.codeacademy2'));
console.log(document.querySelectorAll('h1'));
console.log(document.querySelector('#codeacademy3'));
// paimti elementa is html su kitu metodu getElementById
console.log(document.getElementById('codeacademy3'));

const myText = document.querySelector('h1');
myText.textContent = 'Tai yra naujas tekstas';

// document.querySelector('h1').textContent = 'Tai yra trecioji reiksme';

document.querySelector('h1').innerHTML =
	'<div><a href="https://google.com">Test</a></div>';
// document.querySelector('h1').textContent = '<h6>Test</h6>';
// document.body.innerHTML = '....';
