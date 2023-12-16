import './style.css'

 



let response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=red&page=1`)
let commits = await response.json()
// !!!ВАЖНО!!!!      console.log(commits.Search)














// massiveNum[3]as number
// console.log(massiveNum[3]);
// console.log(massiveNum[3]as number);

let score = 0


const moveLines = document.querySelectorAll <HTMLDivElement> ('.moveLines')  

const massiveNum = [99, 78, 55, 91, 23, 77, 84, 45]

const buttonLines = document.querySelector('#buttonLines') as HTMLButtonElement
buttonLines.addEventListener('click',  ()=> {
    setInterval( ()=>{
        score+=1
        for (let i=0; i<=massiveNum.length; i++) {
            moveLines[i].innerHTML = `${score}`
            let num = massiveNum[i]
            
            if (moveLines[i].innerHTML>=num) {
                moveLines[i].innerHTML=num
            }
        }    
    },60)
    
    for (let i=0; i<massiveNum.length; i++) {
        let digital = (massiveNum[i])
        moveLines[i].style.marginLeft = digital*.9 +'%'  
        moveLines[i].style.transition = digital/16 +'s'  
        
        console.log(massiveNum[i]);
        setTimeout(() => {
            moveLines[i].style.color = 'black'
        }, 6000);
        setTimeout(() => {
            moveLines[i].style.color = 'white'
        }, 12000);
    }
    
    


 
    
  
})





const changeDigitals = document.querySelector('#changeDigitals') as HTMLButtonElement
 

 















//? метод .text (). Возвращает или изменяет текстовое содержимое выбранных элементов
 
 //? в консоле catch, message 'возвращает' название ошибки, а не просто текст 
 
 //? Метод map() позволяет трансформировать один массив в другой при помощи 
 //? функций-колбэка. Переданная функция будет вызвана для каждого элемента 
 //? массива по порядку. Из результатов вызова функции будет собран новый массив.

 





 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 const quadro = nums.map((num)=>{return(num*num)})
 console.log(quadro);
 
 const sum = nums.reduce((sum, x) => sum + x, 0)
 console.log(sum);



// for (let i=0; i<nums.length; i++) {
// }


 



 
 let east = 10
 try {
    let y
    y = 5/east
    console.log(`y = ${y}, 'отработано'`)
 } catch (error:any) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
 }
 







//  g(array.join().split('').reverse().join(''));











 
 const arr = []
 let mass
 for (let i=0; i<nums.length; i++) {
     mass=i+1
     arr.push(`${i * mass}`)
     
    }
    console.log(arr);
    let massive = arr
    
    const square = massive.map((numb:any)=>{return(numb*numb)})
    console.log(square);
 
 try {
    jjj
    console.log(333);
    
 } catch (error) {
    console.log(error.message);
    console.log(error);
    // alert(error.stack);
    
 }
 















 
 // ['0-1', '1-2', '2-3', '3-4', '4-5']
 
//! 1 способ
const promise = new Promise((resolve)=> {
    resolve('Успешно выполнено')
})

promise
.then(()=> {
    console.log('Выполнено');
})
.catch((err)=> {
    console.log(err.message);
})
.finally(()=>{
    console.log('Завешение promisa');
})

console.log(promise);

//! 2 способ
fetch ('https://jsonplaceholder.typicode.com/todos')
.then((response)=> response.json())
.then((json)=>console.log(json))
.catch((err)=> console.error(err.message))
.finally(()=>{console.log('Завешение promisa')})

//! для улучшения читабельности способа выше

// Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом 
// ошибки в консоль.

// Но есть синтаксическая конструкция try..catch, которая позволяет «ловить» 
// ошибки и вместо падения делать что-то более осмысленное.

// async function prom(url) {
//  try {
//     const response = await fetch(url)
//     const json = await response.json()
//     console.log(json);
//  } catch(err) {
// console.log(err.message);

//     }
// }
// prom('https://jsonplaceholder.typicode.com/todos')


//! промисификация функции
//  function delay(ms:number, cb:any) {
//     setTimeout(cb, ms) 
//  }
// delay(500, ()=>{
//     console.log('Задержка в 500ms');
    
// })

// delay(2000, ()=> {
//     try {
//         console.log('Задержка в 2000ms');
//     } catch (error:any) {
//         console.log(error.message);
              
//     }
    
// })

 

 







// function playVideo(){
//     frame_video.play()
// }
//! YouTube видео
// const video_screen = document.querySelector('#video_screen') as HTMLImageElement
// const frame_video = document.querySelector('#frame_video') as HTMLIFrameElement
// const video_btn = document.querySelector('#video_btn') as HTMLButtonElement
// video_btn.addEventListener ('click', ()=> {
//     if(video_btn.innerHTML == 'Запустить видео') {
//         frame_video.style.display = 'block'
//         // frame_video.src = frame_video.src + '&autoplay=1'
//         video_btn.innerHTML = 'Остановить видео'
//     }else {
//         video_btn.innerHTML = 'Запустить видео'
//         frame_video.style.display = 'none'
//         // frame_video.src = frame_video.src + '&autoplay=0'
//     }
// })

//! завершнение YouTube видео




// Надпись на асфальте

// const firstPage = document.querySelector('#firstPage') as HTMLDivElement
// const secondPage = document.querySelector('#secondPage') as HTMLDivElement
// const titleOnRoad = document.querySelector('#titleOnRoad') as HTMLDivElement
// secondPage.addEventListener ('mousemove', ()=> {
//     titleOnRoad.style.transition = 2.5+ 's'
//     titleOnRoad.style.transform = `rotateX(68deg)`
//     titleOnRoad.style.border = 'none'
//     titleOnRoad.style.top = 168.5+'%'
//     titleOnRoad.style.color = 'rgb(193, 195, 196)'
//     titleOnRoad.style.background = 'none'
// })

// firstPage.addEventListener ('mousemove', ()=> {
//     titleOnRoad.style.transition = 2.5+ 's'
//     titleOnRoad.style.transform = `rotateX(0deg)`
//     titleOnRoad.style.top = 138.5+'%'
//     titleOnRoad.style.border = '1px solid aliceblue'
//     titleOnRoad.style.color = 'white'
//     titleOnRoad.style.background = 'rgb(161, 170, 177, .5)'
    
// })


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
            
            
            
            
           




// async - показывает, что функция асинхронная
// await - заставляет ждать выполнение fetch



//! первый способ

    //! Промис создаётся с помощью конструктора.


    //! resolve, reject - в конструктор передаётся функция-исполнитель асинхронной операции. 
    //! Задача функции — выполнить асинхронную операцию и перевести состояние промиса 
    //! в fulfilled (успех) или rejected (ошибка).
// let f1 = new Promise ((resolve,reject)=>{
    
//     fetch ('https://jsonplaceholder.typicode.com/todos/')
    
    


// function delay(ms:any, cb:any) {
//     setTimeout(cb, ms)
// }
//  delay(2000, ()=> {
//     try {
//         console.log(`задержка`);
//     }catch(error) {
//         console.log('ошиббка');
        
//     }
    
//  })


//  async function getStarWarsMovie(id) {
//     const response = await fetch(`https://swapi.dev/api/films/${id}/`)
//     console.log("ответ получен", response) // *1
//     return response.json()
//   }
  
//   const movies = getStarWarsMovie(6).then((movie) => {
//     console.log(movie.title)
//   }) // *2
//   console.log("результат вызова функции", movies) // *3
  




// !!!!!!

// async function f2() {
//     const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
//     const json =await response.json()
//     console.log(json);  
// }
// f2()



// let info = await f2()


// let score = 0
// for (let i=1; i<info.length; i++) {
//     score =info.length
    
    
// }


// console.log(info);
// console.log(score);



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
  








// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     wait().then(value => console.log(value));
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
//   }
//   f()

  