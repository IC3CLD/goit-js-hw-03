// const findBestEmployee = function(employees) {

//     function getMaxOfArray(numArray) {
//         return Math.max.apply(null, numArray);
//       }
//     const arrayKeys = Object.keys(employees);
//     const arrayValues = Object.values(employees);
//     let number = getMaxOfArray(arrayValues);
//     let indexToSearch = arrayValues.indexOf(number);
//     return arrayKeys[indexToSearch]

//   };

  const findBestEmployee = function (employees) {
    const arrayKeys = Object.keys(employees);
    const arrayValues = Object.values(employees);
    // console.log(typeof arrayValues);
    let biggestNumber = Math.max(...arrayValues);
    // console.log(biggestNumber);
    let indexToSearch = arrayValues.indexOf(biggestNumber);
      return arrayKeys[indexToSearch]
  };


// const findBestEmployee = function(employees) {
//     const array = Object.entries(employees)
//     // console.log(array);
//     let searchName = array[0][0];
//     let biggestScore = array[0][1];
//     // console.log(searchName, biggestScore);
//     for (let i = 1; i < array.length; i += 1) {
//         // console.log(array[i]);
//         let innerArray = array[i];
//         let name = innerArray[0];
//         // console.log(name);
//         let score = innerArray[1];
//         // console.log(score);
//         if (biggestScore < score) {
//             biggestScore = score;
//             searchName = name;
//             // console.log(biggestScore, searchName);
//         }
        
//     }
//     // console.log(array[0][1]);
//     return searchName
//   };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux