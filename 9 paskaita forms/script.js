// JS stiliai rasomi camelCase t.y borderTop
// css faile rasomi stiliai rasytusi border-top
const heading = document.querySelector('h1');
// heading.style.textAlign = 'center';
// heading.style.color = 'royalblue';
// heading.style.fontFamily = 'sans-serif';
// heading.style.cssText =
// 	'text-align: center; color: royalblue; font-family: sans-serif';

// heading.className = 'heading';
heading.classList.add('heading');
// heading.classList.add('heading', 'heading2');
// heading.classList.remove('heading');
// console.log(heading.classList.contains('heading'));
// heading.classList.toggle('heading');
document.getElementById('name').addEventListener('click', (event) => {
	// event.target.style.color = 'red';
	// event.target.style.fontSize = '4rem';
	// event.target.style.textAlign = 'center';
	event.target.style.cssText =
		'color: red;font-size: 4rem; text-align: center';
});
