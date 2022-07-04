// Ejercicio 1
var person = {
  "name": 'Diego',
  "age":  26,
  "profession" :"Developer",
};
var arrayfunction = function(obj){
  let propiedades =  new Array()
  for (let key in obj){
    propiedades.push(obj[key]);
  }
  return propiedades
};
//console.log(arrayfunction(person));

// Ejercicio 2
console.log(this)
function fun() {
  'use strict'; // see strict mode
  return this;
};
console.log(fun())

let developer = {
  name: "Diego Guauta",
  prof: 'desveloper',
  greeting() {
      console.log(`Hello, my name is ${this.name}, I'm ${this.prof}`)
  }
}; 
developer.greeting();

var name = "Diego Fernando"
let student = {
  name: "Pepe Navarro",
  greeting:() => {
      console.log(`Hello, my name is ${this.name}`)
  }
}
student.greeting();


// Ejercicio 3
class InvertirCadena {
  cadenaInvertir = '';
  
  constructor(cadenaInvertir){
    if (cadenaInvertir ==  ''){
      throw "Error no hay cadena";
    }
    this.cadenaInvertir = cadenaInvertir;
     
  };
    
  invertir = () => {
    try{
    console.log(this.cadenaInvertir)
    var array = Array.from(this.cadenaInvertir)
    return array.reverse().join(''); 
  }catch(exception){
    console.log("No existe una cadena para invertir")
    return "No existe una cadena para invertir";
  }
};


};

const invertirCadena = new InvertirCadena("Hola mundo del desarrollo");
//console.log(invertirCadena.invertir());
try{
invertirCadena.nuevoMetodo()
} catch (exception){
  console.log(exception.message)
}
// Ejercicio 4
class Login {
  constructor(username,password){
    this.username = username;
    this.password = password;
  }
  login(){
    if (this.username == "admin" && this.password=="passwd"){
        alert("User logged in");
    }  else {
      alert("User or passwd incorrect")
    }

  };
}
let login = new Login("admin", "passwd") 
let logbad = new Login("pepe", "bad") 

//logbad.login();
// Ejercicio 5
const button = document.getElementById('loginSuccess');
const button2 = document.getElementById('loginFailure');
button.addEventListener('click', event => {
  console.log(event);
  login.login();
});

button2.addEventListener('click', event => {
  console.log(event);
  logbad.login();
});

// Ejercicio 6
const button_async = document.getElementById('loginSuccessAsync');
const button_asyncErr = document.getElementById('loginFailureAsync');
button_async.addEventListener('click', async function() {
   let result = await loginWitUsername(login.username,login.password)
   console.log(result); 
  });
button_asyncErr.addEventListener('click',async function () {
  try{
    let result = await loginWitUsername(login.username,login.password)
    console.log(result); 
  } catch(err){
    console.log(err);
  }
});

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
