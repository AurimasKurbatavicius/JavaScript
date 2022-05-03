export const cars = (app) => {
    const carsArray = ['BMW', 'VW', 'Audi', 'MB'];
	app.innerHTML += `
        <ul>
            ${carsArray.map((car) => `<li>${car}</li>`)}
        </ul>
    `;
};

//antras variantas
export const cars = (app) => {
	const carsArray = ['BMW', 'VW', 'AUDI', 'MB'];
	// ${carsArray.map((car) => `<li>${car}</li>`)} //pirmas variantas
	app.innerHTML += `
        <ul>
            ${carsArray.map((car) => '<li>' + car + '</li>')} 
        </ul>
    `;
};

export const cars = (app) => {
	const carsArray = ['BMW', 'VW', 'AUDI', 'MB'];
	// ${carsArray.map((car) => `<li>${car}</li>`)}
	// app.innerHTML += `
	//     <ul>
	//         ${carsArray.map((car) => '<li>' + car + '</li>')}
	//     </ul>
	// `;
	const ul = document.createElement('ul');
	carsArray.forEach((car) => {
		const li = document.createElement('li');
		li.textContent = car;
		ul.append(li);
	});
	app.append(ul);
};
