
// import { mensaje } from "./index.js";


// async function getData2() {
//     const card2 = document.createRange().createContextualFragment(`
            
//           <img src="" alt="">
//             <div class=""></div>
//             <h3 class="price">Número mágico: ${mensaje}</h3>
            
//             `)
//             const card_row2 = document.querySelector('.article-flex');
//             card_row2.append(card2)
          
  
// }
// getData2()

// async function getData() {
//     const result = await fetch('https://fakestoreapi.com/products/');
//     const product = await result.json();
//     const jsonArr = product.map(elemento => Object.entries(elemento));
//     product.forEach(element => {
//         const randInt = randonImage(1, jsonArr.length);
//         const ranIndex = randInt;
//         const productImage = jsonArr[ranIndex][5][1];
//        for(i = 0; i <= 1; i++){
//         if(element.id == i){
//             const card = document.createRange().createContextualFragment(`
                
//                 <div class="card">
//                     <h3>${jsonArr[ranIndex][1][1]}</h3>
//                     <img src=${getData.productImage} alt="">
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ut similique consequatur officiis nemo laboriosam natus aliquid necessitatibus voluptatem commodi.</p>
//                     <a href="article.html" class="boton-2">Visit</a>
//                 </div>
                
//                 `)
//                 const card_row = document.querySelector('.article-flex ');
//                 card_row.append(card)
                
//         }
//        }
//     });

//     function randonImage(min, max){
//         return Math.floor(Math.random() * (max - min +1) + min)
//     }
// }

// async function aleatorio() {
//     const result = await fetch('https://fakestoreapi.com/products/');
//     const product = await result.json();
//     const jsonArr = product.map(elemento => Object.entries(elemento));
   
//         const randInt = randonImage(1, jsonArr.length);
//         const ranIndex = randInt;
//         const productName = jsonArr[ranIndex][5][1];
//         function randonImage(min, max){
//             return Math.floor(Math.random() * (max - min +1) + min)
//         }
//         console.log(productName)
// }

//aleatorio()


//getData()