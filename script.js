let salario 
let res 
let poinss
let fgts = 8 ;
let poirrf

function calcular(){
    res = document.getElementById('res');
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
res.innerHTML = `seu salario e R$ ${salario} a porcentagem paga ao inss e ${poinss}% que coresponde a R$ ${desinss} 
a porcentagem paga ao inss e ${poirrf}% que coresponde a  R$ ${desirrf} a porcetagem paga ao fgts e 8% que correspode a R$${desfgts} o total de imposto pago e R$${destotal} o seu salario depois dos descontos e R$${salario-destotal}`;
}