import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'; //Importamos la clase del modelo Zapatilla
import { ZapatillaService } from '../services/zapatilla.service'; //Importamos el servicio ZapatillaService

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatillas.component.html',
   providers: [ZapatillaService] //El servicio no lo podemos utilizar hasta que no lo injectemos como un provider, como un servicio de nuestro componente, se declaran dentro del array
})
export class ZapatillasComponent implements OnInit {

   public titulo: string = "Componente de Zapatillas";
   public zapatillas: Array<Zapatilla>; //Esto sera un array de objetos de tipo Zapatilla
   public marcas: String[]; //Esto sera un array de tipo String, todos los datos que habra dentro seran String
   public color: string;
   public mi_marca: string;

   constructor(
      private _zapatillaService: ZapatillaService //Lo injectamos como dependencia dentro de una propiedad, de este modo podemos utilizar el servicio
   ) {
      console.log("Se ha cargado el componente: zapatillas.component.ts");

      //Le damos valores al array                  
      this.zapatillas = this._zapatillaService.getZapatillas();
      // alert(this._zapatillaService.getTexto());

      this.marcas = []; //this.marcas = new Array(); //Push no se puede utilizar en un objeto que esta 'undefined'
      this.color = 'yellow';
      this.mi_marca = 'Marca';
   }

   ngOnInit(): void {
      console.log('zapatillas', this.zapatillas);
      // console.log('zapatillas', JSON.stringify(this.zapatillas));            
      this.getMarcas();
   }

   /**
    * Metodo para recorrer de manera clasica con un foreach de Javascript
    * 
    * Metodo forEach, es de los nuevos estandares de ECMAScript 6 (ES6): 
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    * 
    * Metodo indexOf, sirve para localizar valores en un array: 
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    */
   public getMarcas() {
      this.zapatillas.forEach((zapatilla, index) => { //Foreach en JavaScript         
         // console.log(zapatilla, index);
         if (this.marcas.indexOf(zapatilla.marca) < 0) { //Valida que en el array marcas no existan ya los valores por insertar para que no se repitan
            this.marcas.push(zapatilla.marca);
         }
      });
      console.log('marcas', this.marcas);
   }

   public getMarca() {
      alert(this.mi_marca);
   }

   /**
    * Agregamos elemento a array usando metodo push
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    */
   public addMarca() {
      this.marcas.push(this.mi_marca);
   }

   /**
    * Eliminamos elemento de array con su indice usando metodo splice
    * @url https://www.oscarlijo.com/blog/eliminar-elementos-de-un-array-en-javascript/    
    */
   public deleteMarca(indice: any) {
      this.marcas.splice(indice, 1);
   }

   public onBlur() {
      console.log('Has salido del input');
   }

   public mostrarPalabra() {
      alert(this.mi_marca);
   }

}