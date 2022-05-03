document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const output = document.getElementById('output');
  
    const formData = new FormData(event.target)
  
    const email = formData.get('email');
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!emailRegex.test(email)) {
      output.className = 'error';
      output.textContent = 'Email should be a valid email';
      return;  
    }
  
    const password = formData.get('password');
    const passwordRegex = /(\w){8,20}/;
    if (!passwordRegex.test(password)) {
      output.className = 'error';
      output.textContent = 'Password should contain from 8 to 20 chars';
      return;
    }
  
    try {
      const respone = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      const data = await respone.json();
      console.log(data);
      if (respone.ok) {
        output.className = 'success';
        output.textContent = 'User created';
      } else {
        throw new Error(data.error);
      }
    } catch(error) {
      console.log(error.message);
      output.className = 'error';
      output.textContent = error.message;
    }
  })

// const promise = fetch('https://reqres.in/api/register', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     email: "eve.holt@reqres.in",
//     password: "pistol",
//   })
// });

class Car {
    constructor(brand, model, mileage, price, image) {
      this.brand = brand;
      this.model = model;
      this.mileage = mileage;
      this.price = price;
      this.image = image;
    }
  
    addToList() {
      const card = document.createElement('div');
      card.className = "card";
      card.addEventListener('click', () => alert(`Price: ${this.price}`));
      
      const img = document.createElement('img');
      img.src = this.image;
      
      const text = document.createElement('h6');
      text.innerText = `${this.brand} ${this.model}`;
  
      card.append(img, text);
      document.querySelector('div.wrapper').append(card)
    }
  }
  
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const mileage = document.getElementById('mileage').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
  
    const car = new Car(brand, model, mileage, price, image);
    car.addToList();
  });

// Tai tikriausiai paprasčiausias būdas išfiltruoti dublikatus,
// bet internete galite rasti ir daugiau įvairių variantų
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));


