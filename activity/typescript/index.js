var parameters = function (person) {
    var key;
    var parameters_Array = [];
    for (key in person) {
        //parameters_Array.push(person.name, person.age, person.profession); // Metodo uno directamente colocando los parametros
        parameters_Array.push(person[key]); //Metodo 2 llenando el array recorriendo la interface
    }
    return parameters_Array;
};
var persona1 = {
    name: "Diego",
    age: 26,
    profession: "Developer",
    pais: "Colombia"
};
console.log(parameters(persona1));
// Ejercicio 2
function sumOrConcatenate(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1 + "-" + param2;
    }
    if (typeof param1 === "number") {
        return param1.toString() + ":" + param2;
    }
    else {
        return param1 + ":" + param2.toString();
    }
}
console.log(sumOrConcatenate(5, 8));
console.log(sumOrConcatenate("Hola", "Mundo"));
console.log(sumOrConcatenate(8, "Diego"));
console.log(sumOrConcatenate("Hello", 100));
function isCar(car) {
    return car.pressPedal !== undefined;
}
function isMotorcycle(motorcycle) {
    return motorcycle.openThrottle !== undefined;
}
function turnOn(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    if (isMotorcycle(vehicle)) {
        vehicle.openThrottle();
    }
}
var vehiculo1 = { tires: 4, turnOnEngine: function () { console.log("Encendido"); }, pressPedal: function () { console.log("Pedal presionado"); } };
var vehiculo2 = { tires: 2, turnOnEngine: function () { console.log("Encendido"); }, openThrottle: function () { console.log("Pedal presionado"); } };
turnOn(vehiculo1);
turnOn(vehiculo2);
// Ejercicio 4
function removeFirstEntry(arr) {
    arr.reverse();
    arr.pop();
    arr.reverse();
    return arr;
}
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
var newUnsupportedArray = removeFirstEntry(unsupportedArray); //--> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
