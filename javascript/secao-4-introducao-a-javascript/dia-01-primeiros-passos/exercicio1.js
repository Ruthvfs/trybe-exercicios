//primeira questao:
//let a = 2;
//let b = 8;
//console.log('soma: ' + (a+b));
//console.log('subtração: '+(a-b));
//console.log('multiplicação: '+(a*b));
//console.log('divisão: '+ (a/b));
//console.log('módulo: '+(a%b));//

//segunda questão:
let number1 = 150;
let number2 = 80;

if(number1 > number2){
    console.log(number1 +' é maior que '+ number2);
}else{
    console.log(number2 + ' é maior que '+ number1);
}

//terceira questão
/*let a = 22;
let b = 14;
let c = 5;

if(a >b && a >c ){
    console.log('o maior número é: ' + a + '(a)');
}else if(b > a && b > c){
    console.log('o maior número é: ' + b+ '(b)');
}else{
    console.log('o maior número é: '+ c+ '(c)');
}*/
 //quarta questão
let a = 44;
if(a > 0){
    console.log('positive');
}else if(a < 0){
    console.log('negative');
}else{
    console.log('zero');
}
//quinta questão
let degreeAngle1 = 65;
let degreeAngle2 = 15;
let degreeAngle3 = 100;

let sumOfAngles = degreeAngle1 + degreeAngle2 + degreeAngle3;
let allAnglesArePositive = degreeAngle1 > 0 && degreeAngle2 > 0 && degreeAngle3 > 0;
 
if(allAnglesArePositive){
    if(sumOfAngles === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log('erro: ângulo inválido');
}