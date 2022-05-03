document.querySelector('button').addEventListener('click', () => {
    // document.body.innerHTML = '<img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"/>';
})

// step 1 susikurti norima elementa
console.log(document.createElement('h1'));
const hedingEl = document.createElement('h1');
headingEl.textContent = 'Auris';
// step 2 ivesti i ekrana sukurta elementa
const bodyEl = document.querySelector('body');
bodyEl.append(headingEl);