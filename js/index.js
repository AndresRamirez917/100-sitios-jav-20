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

    function randonImage(min, max){
        return Math.floor(Math.random() * (max - min +1) + min)
    }
}


const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje= document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${arrMessages[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos correctos`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData()
