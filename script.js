let salario 
let res
let respoindinss
let respoindfgts
let respoindirrf
let resdesinss 
let resdesfgts 
let resdesirrf
let restotaldesconto 
let restotaldescintado 
let poinss
let fgts = 8 ;
let poirrf

function calcular(){
    res = document.getElementById('res')
    respoindinss = document.getElementById('poindinss');
    respoindfgts = document.getElementById('poindfgts');
    respoindirrf = document.getElementById('poindirrf');
    resdesinss = document.getElementById("desinss");
    resdesfgts = document.getElementById("desfgts");
    resdesirrf = document.getElementById("desirrf");
    restotaldescintado =document.getElementById('totaldescintado')
    restotaldesconto =document.getElementById('totaldesconto')
    salario= document.getElementById('sal1').value;
    if(salario >= 3641 & salario <= 7087 ){
        poinss =14;
    }else if(salario >= 2427 & salario <= 3641 ){
        poinss =12;
    }else  if(salario >= 1212 & salario <= 2427 ){
        poinss =9;
    }else {
        poinss = 7.5;
    }

    if(salario >= 4664 ){
        poirrf =27.5;
    }else if(salario >= 3751 & salario <= 2826 ){
         poirrf=22.5;
    }
    else if(salario >= 2826 & salario <= 3751 ){
    poirrf=15;
    } else  if(salario >= 1903& salario <= 2826 ){
        poirrf=7.5;
    }else {
        poirrf = 0
    } 
  let desinss = salario *(poinss/100);
  let desfgts = salario *(fgts/100);
  let desirrf = salario *(poirrf/100)
  let destotal= desfgts+desinss + desirrf;
    respoindinss.innerText = `${poinss}%`;
    respoindfgts.innerText = `${fgts}%`;
    respoindirrf.innerText = `${poirrf}%`;
    resdesinss.innerText= `-${desinss}`;
    resdesfgts.innerText= `-${desfgts}`;
    resdesirrf.innerText= `-${desirrf}`;
    restotaldesconto.innerText =`-${destotal}`;
    restotaldescintado.innerText =`${salario-destotal}`;
    res.style.display='block';
}