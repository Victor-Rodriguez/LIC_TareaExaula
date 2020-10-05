// let arrayNumbers = [10, 8, -9, 5, 3, 78, -23];

// console.log(
//   arrayNumbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// let orden = arrayNumbers.sort((a, b) => a - b);
// console.log(orden);

document.querySelector("#sort-intergers").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Sirve");
  //Asignando valores de inputs
  const val1 = document.querySelector("#valor1").value;
  const val2 = document.querySelector("#valor2").value;
  const val3 = document.querySelector("#valor3").value;

  //Asignando valores a un array
  let convertArray = [val1, val2, val3];

  //Enviando valores a función de validación
  validationNums(convertArray);
});

//VALIDACION
const validationNums = (convertArray) => {
  convertArray.sort(function (a, b) {
    return a - b;
  });

  let orden = convertArray.sort((a, b) => a - b);

  alertaV(orden);
};

//ALERTA CON DATOS
const alertaV = (list) => {
  //Creando elementos en DOM
  const div = document.createElement("div");
  div.className = `alert alert-danger`;
  div.appendChild(document.createTextNode(`El orden los números es: ${list}`));

  const container = document.querySelector(".container");
  const form = document.querySelector("#sort-intergers");
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector(".alert").remove(), 7000);
};
