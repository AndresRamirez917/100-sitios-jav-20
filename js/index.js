
//export let mensaje = "madre"
async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const product = await result.json();
    const jsonArr = product.map(elemento => Object.entries(elemento));
    product.forEach(element => {
        const randInt = randonImage(1, jsonArr.length);
        const ranIndex = randInt;
        const productName = jsonArr[ranIndex][5][1];
       for(i = 0; i <= 3; i++){
        if(element.id == i){
            const card = document.createRange().createContextualFragment(`
                
                <div class="card">
                    <h3>${jsonArr[ranIndex][1][1]}</h3>
                    <img src=${productName} alt="">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ut similique consequatur officiis nemo laboriosam natus aliquid necessitatibus voluptatem commodi.</p>
                    <a href="article.html" class="boton-2">Visit</a>
                </div>
                
                `)
                const card_row = document.querySelector('.card-row');
                card_row.append(card)
                
        }
       }
    });

    return productImage;

    function randonImage(min, max){
        return Math.floor(Math.random() * (max - min +1) + min)
    }
}

async function aleatorio() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const product = await result.json();
    const jsonArr = product.map(elemento => Object.entries(elemento));
   
        const randInt = randonImage(1, jsonArr.length);
        const ranIndex = randInt;
        const productName = jsonArr[ranIndex][5][1];
        function randonImage(min, max){
            return Math.floor(Math.random() * (max - min +1) + min)
        }
        console.log(productName)
}

aleatorio()


getData()
