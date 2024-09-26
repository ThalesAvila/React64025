// (function () {
//   setTimeout(() => {
//     console.log("Log A!!!");
//   }, 0);
//   new Promise((resolve, reject) => {
//     console.log("Log C!!!");
//     resolve("Log D!!!");
//   }).then((text) => {
//     console.log(text);
//   });
//   console.log("Log B!!!");
// })();

// IIFE: Imediatly Invoked Function Expression
// (function () {
//   console.log("Ola React 64025");
//   function queroCafe() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("A maquina quebrou");
//       }, 1000);
//     });
//   }

//   const minhaPromessaDeCafe = queroCafe();

//   minhaPromessaDeCafe
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(minhaPromessaDeCafe);
// })();

(function () {
  console.log("Log 1");

  setTimeout(() => console.log("Log 2"), 0);

  setTimeout(() => console.log("Log 3"), 0);

  new Promise((res) => {
    setTimeout(() => res("Log 5"), 0)
  }).then((data) => console.log(data));

  console.log("Log 4");
})();
