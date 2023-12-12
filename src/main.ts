import { Logger } from 'sass'
import './style.css'



// Надпись на асфальте

const firstPage = document.querySelector('#firstPage') as HTMLDivElement
const secondPage = document.querySelector('#secondPage') as HTMLDivElement
const titleOnRoad = document.querySelector('#titleOnRoad') as HTMLDivElement
secondPage.addEventListener ('mousemove', ()=> {
    titleOnRoad.style.transition = 2.5+ 's'
    titleOnRoad.style.transform = `rotateX(68deg)`
    titleOnRoad.style.border = 'none'
    titleOnRoad.style.top = 168.5+'%'
    titleOnRoad.style.color = 'rgb(193, 195, 196)'
    titleOnRoad.style.background = 'none'
})

firstPage.addEventListener ('mousemove', ()=> {
    titleOnRoad.style.transition = 2.5+ 's'
    titleOnRoad.style.transform = `rotateX(0deg)`
    titleOnRoad.style.top = 138.5+'%'
    titleOnRoad.style.border = '1px solid aliceblue'
    titleOnRoad.style.color = 'white'
    titleOnRoad.style.background = 'rgb(161, 170, 177, .5)'
    
})


//! JSON - (JavaScript Object Notation) — текстовый формат обмена данными, 
//! основанный на JavaScript. Но при этом формат независим от JS и может 
//! использоваться в любом языке программирования.

// let array = ['rub', 'euro', 'dollar']
// console.log(array);
// console.log(array.join().split('').reverse().join(''));

//! stringify - из объекта в строку
// let arrString = JSON.stringify(array)
// console.log(arrString);

//! parse - из строки в объект
// let arrParse = JSON.parse(arrString)
// console.log(arrParse);



const hi = document.querySelector('#hi') as HTMLDivElement
// hi.addEventListener('click',()=> {
//     console.log('123')

// })







// function main() {
//     setTimeout(function greet() {
//       console.log('Hello!')
//     }, 2000)
  
//     console.log('Bye!')
//   }
  
//   main()
  

// function request(url) {
//     return new Promise(function (resolve, reject) {
//       let responseFromServer
//       /*...*/
//       resolve(responseFromServer)
//     })
//   }
  
//   request('/api/users/1')
//     .then((user) => request(`/api/photos/${user.id}/`))
//     .then((photo) => request(`/api/crop/${photo.id}/`))
//     .then((response) => console.log(response))
  


    // async function loadPosts() {
    //     const response = await fetch('/api/posts/')
    //     const data = await response.json()
    //     return data
    //   }
      

    //   setTimeout(function greet() {
    //     console.log('Hello!')
    //   }, 1000)
      
 
    // Кривая Безье   
    // cubic-bezier(x1, y1, x2, y2) 



    // function request(url, onSuccess) {
        /*...*/
    // }
        
        // request('/api/users/1', function (user) {
        //     request(`/api/photos/${user.id}/`, function (photo) {
        //         request(`/api/crop/${photo.id}/`, function (response) {
        //             console.log(response)
        //         })
        //     })
        // })



        
        // function request(url) {
        //     return new Promise(function (resolve, reject) {
        //       let responseFromServer
        //       /*...*/
        //       resolve(responseFromServer)
        //     })
        //   }
          
        //   request('/api/users/1')
        //     .then((user) => request(`/api/photos/${user.id}/`))
        //     .then((photo) => request(`/api/crop/${photo.id}/`))
        //     .then((response) => console.log(response))



        // let prom = new Promise((resolve, reject) => {
        //     resolve('Одобрено')
        // })
        //     .then(val => {
        //         console.log(val);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         hi.style.backgroundColor = 'black'
        //         hi.innerHTML = 'Ошибка'
        //     })
        // prom.finally(() => {
        //     console.log('Выполнено');
        // })
        
        
        
 
        
//? Работа с циклом

// let mass = [
//     {person : 'Vova', money: 500}, 
//     {person : 'Nick', money: 1500}, 
//     {person : 'Slava', money: 250},
// ]

// let total = 0
// for (let i=0; i<mass.length; i++) {
//     total +=mass[i].money   
// }
// console.log(total);


//? Сложение через цикл всех чисел
// let total = 0
// for (let i=0; i<10; i++) {
//     total +=i   
// }
// console.log(total);




            //? Прочитать про IntersectionObserver
            
            
            
            //! Цикл событий  (Event loop) отвечает за выполнение кода, сбор и обработку
            //! событий и выполнение подзадач из очереди.
            
            
            //! Web API - эта дополнительная функциональность, берёт на себя работу с 
            //! таймерами, интервалами, обработчиками событий. То есть когда мы 
            //! регистрируем обработчик клика на кнопку — он попадает в окружение Web API. 
            //! Именно оно знает, когда обработчик нужно вызвать.
            
            
            //! Функция fetch () - это удобный способ отправки HTTP -запросов в JavaScript. Она
            //! позволяет получать данные с сервера и отправлять данные на сервер,
            
            //? Асинхронные функции — функции, которые возвращают промисы.
            
            //! fetch - функция, которая возвращает промис

            //! чтобы функции выполнялись в определенной последовательности (а не кто первей),
            //! то для них создается общая функция, куда каждая функция записывается, и потом вызываем 
            //! одну общую
            
            
            
            
            // метод .text (). Возвращает или изменяет текстовое содержимое выбранных элементов




// async - показывает, что функция асинхронная
// await - заставляет ждать выполнение fetch



//! первый способ

    //! Промис создаётся с помощью конструктора.


    //! resolve, reject - в конструктор передаётся функция-исполнитель асинхронной операции. 
    //! Задача функции — выполнить асинхронную операцию и перевести состояние промиса 
    //! в fulfilled (успех) или rejected (ошибка).
let f1 = new Promise ((resolve,reject)=>{
    
    fetch ('https://jsonplaceholder.typicode.com/todos/')
    
    //! переводим промис в состояние fulfilled.
    resolve('выполнение успешно')

})
.then(value=>{console.log(value = 'успех')})
.catch(()=>{console.log('ошибка')})
.finally (()=> {console.log('завершено')})



//! второй способ (чаще используемый)
 
async function f2() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/');
    return response.text();
    // console.log('есть ок');   
}

let info = await f2()


let score = 0
for (let i=1; i<info.length; i++) {
    // console.log(i);
    score =info.length

    
}

// console.log(info);
console.log(score);



//! возможно третий способ       
// fetchTodos('https://jsonplaceholder.typicode.com/todos/')
        
// async function fetchTodos(url:any) {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//     }catch(err) {
//         console.log(err);
        
//     }
    
// }
  


