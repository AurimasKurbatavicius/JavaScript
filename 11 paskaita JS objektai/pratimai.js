// console.log(document.createElement('h1'));
// const headingEl = document.createElement('h1');
// headingEl.textContent = 'Aurimas';
// const bodyEl = document.querySelector('body');
// bodyEl.append(headingEl);
// document.body.style.color = 'red';

// console.log(document.createElement('ul'));
// const headingEl = document.createElement('ul');
// headingEl.textContent = 'cars';
// const bodyEl = document.querySelector('body');
// bodyEl.append(headingEl)
// const li = document.createElement('li')
// li.textContent = 'volvo'
// headingEl.append(li)
// const li1 = document.createElement('li')
// li1.textContent = 'audi'
// headingEl.append(li1)
// const li2 = document.createElement('li')
// li2.textContent = 'ford'
// headingEl.append(li2)

document.body.style.background = 'lightgray';

const main = document.createElement('main');
// main.textContent = 'text';
main.style.background = 'white';
main.style.width = '40%';
main.style.margin = '10rem auto 0 auto';
main.style.padding = '4rem';
main.style.borderRadius = '0.5rem';
main.style.textAlign = 'center'
document.body.append(main)

const img = document.createElement('img');
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXS7fJN_7a8ya0FnVl5NP2-3g_IwPDA6WzuqNjXNyJ2ariI_7ch0xx5EhXSFMBHpg-v4&usqp=CAU';
img.style.width = '10rem';
img.style.height = '10rem';
img.style.objectFit = 'cover';
img.style.borderRadius = '70%';
img.style.border = '1px solid black';
img.style.padding = '0.5rem';
img.style.marginTop = '-6.5rem';
main.append(img);

const name = document.createElement('h1');
name.textContent = 'Aurimas';
main.append(name);

const phone = document.createElement('h3');
phone.textContent = '+3706776677';
phone.style.color = "green";
main.append(phone);

const addres = document.createElement('h2');
addres.textContent = 'city; street';
addres.style.color = "yellow";
addres.style.fontSize = '1rem';
main.append(addres);
