import data from './data.json' assert {type:'json'}

const contenedor_grafico = document.getElementById("con_grafico");
const barra = document.getElementsByClassName('barra');

let valores =[];

data.forEach(elemento =>{
    valores.push(elemento.amount);
    contenedor_grafico.innerHTML += `
    <div class="contenedor_barra">
        <div class="valor">$${elemento.amount}</div>
        <div class="barra"></div> 
        <div class="dia">${elemento.day}</div> 
    </div>`

});

//console.log(valores);
let altura_maxima = 150;
let valor_maximo =Math.max(...valores);

//console.log(valor_maximo);

for (let i = 0; i< barra.length; i++){
    
    let valor_barra=barra[i].previousSibling.previousElementSibling.innerText.slice(1);
    let altura = (valor_barra * altura_maxima) / valor_maximo;

    barra[i].parentNode.style.height = `${altura}px`;

    if( altura >= altura_maxima){
        barra[i].classList.add('max');
    }

    barra[i].addEventListener('mouseover',function(){
        this.previousSibling.previousElementSibling.style.opacity= 1;
    });
    barra[i].addEventListener('mouseout',function(){
        this.previousSibling.previousElementSibling.style.opacity= 0;
    })  
}

