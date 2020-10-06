class Empleado{
    nombre:string;
    salario:number;
    constructor(nombre:string,salario:number){
        this.nombre=nombre;
        this.salario=salario;
        

    }
    SalarioNeto(salarior:number):number{
        
        

        return salarior-(salarior*0.15) ;
    }
       
}
let Empleadouno=new Empleado("Manuel",400);
console.log("Empleado "+Empleadouno.nombre+" Salario despues de descuentos(15%) " +Empleadouno.SalarioNeto(400)+"$" );
