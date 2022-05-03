// console.log('1');
// console.log('2');
// console.log('3');  //sincroninis budas SYNC
// console.log('4');
// console.log('5');
// console.log('6');
// console.log('7');


// setTimeout(() => {
// 	console.log('8');
// }, 2000);               // asinchroninis budas  ASYNC


// setTimeout(() => {
// 	console.log('8');
// }, 2000);
// console.log('1');
// console.log('2');  // asinchroninis budas , 
// console.log('3');  visas asinchronis budas eina i gala
// console.log('4');
// console.log('5');
// console.log('6');
// console.log('7');

// ======== buna interviu =======

// console.log('1');
// setTimeout(() => {
// 	console.log('2');
// }, 1000);
// setTimeout(() => {
// 	console.log('10');
// }, 2000);
// console.log('3');     
// assinchroninis budas visalaik pushinamas i pabaiga!

// 1 teisingas teiginys

// const myname = 'Aurimas';
// const promise = new Promise((resolve, reject) => {
//     if (myname === 'Auriams') {
//         resolve('mano vardas Aurimas');
//     } else {
//         reject('neteisingas vardas')
//     }
// });

// promise.then((value => {}));

// 2. jai neteisingas vardas

// const myName = 'idmantas';
// const promise = new Promise((resolve, reject) => {
// 	if (myName === 'Vidmantas') {
// 		resolve('Mano vardas Vidmantas');
// 	} else {
// 		reject('Neteisingas vardas');
// 	}
// });

// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((err) => console.log(err));

// console.log('12');

// 3. su palaukimu uzklausimas (imituojam 2s laukima)

// const myName = 'Vidmantas';
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (myName === 'Vidmantas') {
// 			resolve('Mano vardas Vidmantas');
// 		} else {
// 			reject('Neteisingas vardas');
// 		}
// 	}, 2000);
// });
// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((err) => console.log(err));

// console.log('12');

// finally metodas \ isvedamas bet kokiu atveju (nepriklausomai nuo rezultato)

// const myName = 'idmantas';
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (myName === 'Vidmantas') {
// 			resolve('Mano vardas Vidmantas');
// 		} else {
// 			reject('Neteisingas vardas');
// 		}
// 	}, 2000);
// });
// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((err) => console.log(err))
// 	.finally(() => {
// 		console.log('Tai yra finally');
// 	});

// console.log('12');

// returninant value pasiconsologina [ promisa]

const myName = 'Vidmantas';
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myName === 'Vidmantas') {
			resolve('Mano vardas Vidmantas');
		} else {
			reject('Neteisingas vardas');
		}
	}, 2000);
});

const test = promise
	.then((value) => {
		return value;
	})
	.catch((err) => console.log(err));

test.then((msg) => console.log(msg));
console.log('12');

// pavizdys(promiso) su funkcija

const myName = 'Vidmantas';
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myName === 'Vidmantas') {
			resolve('Mano vardas Vidmantas');
		} else {
			reject('Neteisingas vardas');
		}
	}, 2000);
});
// taip buvo anksciau
function fn(resolveCb, rejectCb) {
	if (myName === 'Vidmantas') {
		resolveCb('Mano vardas Vidmantas');
	} else {
		rejectCb('Neteisingas vardas');
	}
}
fn(
	(value) => {
		console.log(value);
	},
	(err) => {
		console.log(err);
	}
);