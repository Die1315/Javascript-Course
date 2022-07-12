// Ejercicio 1
interface Person{
    name: string;
    age:   number;
    profession: string;
    pais : string;
}

let parameters = (person: Person): Array<Person> =>{
    let  key : keyof typeof person;
    let parameters_Array: any = [];
    for(key in person){    
    //parameters_Array.push(person.name, person.age, person.profession); // Metodo uno directamente colocando los parametros
    parameters_Array.push(person[key]); //Metodo 2 llenando el array recorriendo la interface
    }
    return parameters_Array; 
}
const persona1 : Person={
    name: "Diego",
    age: 26,
    profession: "Developer",
    pais: "Colombia"
} 
console.log(parameters(persona1))
// Ejercicio 2
function  sumOrConcatenate(param1: number | string,  param2: number | string){
    if (typeof param1 === "number" && typeof param2 === "number") {
          return param1 +param2;
        }
    if (typeof param1 === "string" && typeof param2 === "string") {
          return param1 +  "-" + param2;
        }
    if (typeof param1 === "number"){
        return param1.toString() + ":" +param2
    } else {
        return param1 + ":" +param2.toString()
    }
    
}

console.log(sumOrConcatenate(5,8))
console.log(sumOrConcatenate("Hola","Mundo" ))
console.log(sumOrConcatenate(8,"Diego"))
console.log(sumOrConcatenate("Hello", 100))
// Ejercicio 3
interface Car {
    tires: number,
    turnOnEngine(): void,
    pressPedal(): void
}
interface Motorcycle {
    tires: number,
    turnOnEngine(): void,
    openThrottle(): void
}
function isCar(car: Car | Motorcycle):car is Car{
    return (car as Car).pressPedal !== undefined;
}
function isMotorcycle(motorcycle: Motorcycle | Car):motorcycle is Motorcycle{
    return (motorcycle as  Motorcycle).openThrottle !== undefined;
}
function turnOn(vehicle: Car | Motorcycle){
    vehicle.turnOnEngine()
    if  (isCar(vehicle)){
        vehicle.pressPedal()
    }
    if (isMotorcycle(vehicle)){
        vehicle.openThrottle()
    }

}
const vehiculo1 : Car= {tires:4, turnOnEngine:()=>{console.log("Encendido")},pressPedal:()=>{console.log("Pedal presionado")}};
const vehiculo2 : Motorcycle= {tires:2, turnOnEngine:()=>{console.log("Encendido")},openThrottle:()=>{console.log("Pedal presionado")}};

turnOn(vehiculo1)
turnOn(vehiculo2)

// Ejercicio 4
function  removeFirstEntry<T extends string | number >(arr: Array<T>):Array<T> {
    
    arr.reverse();
    arr.pop();
    arr.reverse();

    return arr;
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); //--> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];