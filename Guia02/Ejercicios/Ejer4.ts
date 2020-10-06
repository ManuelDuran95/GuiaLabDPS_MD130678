class Calculadora {
    num1:number;
    num2:number;
    constructor(_num1:number,_num2:number) {
        this.num1=_num1;
        this.num2=_num2;
        
    }
    sumar():number{
        let aux:number;
        aux=this.num1+this.num2;
        return aux;


    }
    restar():number{
        return this.num1-this.num2;


    }
    multiplicar():number{
        return this.num1*this.num2;


    }
    divivir():number{
        if(this.num2==0){
            return 0;
        }
        else{
            return (this.num1/this.num2);

        }
         
    }
}
let calculo=new Calculadora(2,5);

console.log("numero1: 2, numero2: 5 Suma: "+calculo.sumar()+" resta: "+calculo.restar());
console.log("Muultiplicacion: "+calculo.multiplicar()+" Dividir: "+calculo.divivir());
