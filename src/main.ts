import './style.css'


//! JSON - JavaScript Object Notation

let array = ['rub', 'euro', 'dollar']
console.log(array);
// console.log(array.join().split('').reverse().join(''));

//! stringify - из объекта в строку
let arrString = JSON.stringify(array)
console.log(arrString);

//! parse - из строки в объект
let arrParse = JSON.parse(arrString)
console.log(arrParse);



const hi = document.querySelector('#hi') as HTMLDivElement
// hi.addEventListener('click',()=> {
//     console.log('123')

// })

//! JSON - (англ. JavaScript Object Notation) — текстовый формат обмена данными, 
//! основанный на JavaScript. Но при этом формат независим от JS и может 
//! использоваться в любом языке программирования.


//! fetch - функция, которая возвращает промис

let prom = new Promise((resolve, reject) => {
    resolve('Одобрено')
})
    .then((val) => {
        console.log(val);
    })
    .catch((error) => {
        console.log(error);
        hi.style.backgroundColor = 'black'
        hi.innerHTML = 'Ошибка'
    })
prom.finally(() => {
    console.log('Выполнено');
})




fetchTodos('https://jsonplaceholder.typicode.com/todos/')

async function fetchTodos(url:any) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }catch(err) {
        console.log(err);
        
    }
    
}

// function main() {
//     setTimeout(function greet() {
//       console.log('Hello!')
//     }, 2000)
  
//     console.log('Bye!')
//   }
  
//   main()
  
// !   https://doka.guide/js/async-in-js/#cikl-sobytiy

//! Цикл событий  (Event loop) отвечает за выполнение кода, сбор и обработку
//! событий и выполнение подзадач из очереди.

//! Web API - эта дополнительная функциональность, берёт на себя работу с 
//! таймерами, интервалами, обработчиками событий. То есть когда мы 
//! регистрируем обработчик клика на кнопку — он попадает в окружение Web API. 
//! Именно оно знает, когда обработчик нужно вызвать.

function request(url) {
    return new Promise(function (resolve, reject) {
      let responseFromServer
      /*...*/
      resolve(responseFromServer)
    })
  }
  
//   request('/api/users/1')
//     .then((user) => request(`/api/photos/${user.id}/`))
//     .then((photo) => request(`/api/crop/${photo.id}/`))
//     .then((response) => console.log(response))
  


    async function loadPosts() {
        const response = await fetch('/api/posts/')
        const data = await response.json()
        return data
      }
      

      setTimeout(function greet() {
        console.log('Hello!')
      }, 1000)
      
 





