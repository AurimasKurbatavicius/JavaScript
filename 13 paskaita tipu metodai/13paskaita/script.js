// function alertName(text){
//     alert(AuriMas)
// }

// function consoleName(text) {
//     console.log(auRImas)
// }
//  function coreFunction(name, callback){
//      const capitalizedName = name.charat(0).toUppercase() + name.slice(1).toLowerCase();
//      callback(capitalizedName)
//  }

//  coreFunction('peTras', consoleName)

// Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((v) => console.log(v));

// Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.)
// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((v, i ) => console.log(i+': '+ v ));

// Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
// const names = ["peTras", "Jonas", "aNTanaS"];
// const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
// console.log(newNames);

// Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
// const ages = [1, 20, 5, 10, 22, 50, 40, 39];
// console.log(ages.filter((x) => x >= 18));

// Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
// const cities = ["Vilnius", "Kaunas", "Klaipeda"];
// console.log(cities.find(v => v.charAt(0) === "K"));

// Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));

// Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.
// const cities = ["Vilnius", "Kaunas", "klaipeda"];
// console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));