
import { mensaje } from "./index.js";


async function getData2() {
    const card2 = document.createRange().createContextualFragment(`
            
          <img src="" alt="">
            <div class=""></div>
            <h3 class="price">Número mágico: ${mensaje}</h3>
            
            `)
            const card_row2 = document.querySelector('.article-flex');
            card_row2.append(card2)
          
  
}
getData2()