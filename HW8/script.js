//Домашнее задание. Функции 2, ES6
let persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

function sort(array, sortString, bool = 'true') {
    if(bool){
    array.sort( (a, b) => {
        if (a[sortString] > b[sortString]) {
          return 1;
        }
        if (a[sortString] < b[sortString]) {
          return -1;
        }
        return 0;
      });
    } else {
        array.sort( (a, b) => {
            if (b[sortString] > a[sortString]) {
              return 1;
            }
            if (b[sortString] < a[sortString]) {
              return -1;
            }
            return 0;
          });
    }
    return array;
};

sort(persons, "age", false); 
//сортирует по возрасту по возрастанию
console.log(persons)
sort(persons, "name", false); //сортирует по имени по убыванию
console.log(persons)

//array map
//Используя Array.map приведите все строки в массиве к числу. Элементы других типов оставьте как есть://