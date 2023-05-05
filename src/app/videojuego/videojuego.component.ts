import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
   selector: 'videojuego',
   templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck {
   
   /*
   Propiedades:
      * Podemos definir dentro de la clase una serie de propiedades publicas, y podemos definir que tipo de dato es
      * Podemos pasar el valor que yo guarde en estas propiedades a mi vista
   */
   public titulo : string;
   public listado: string;

   /*
   Constructor:
      * Lo mas normal, es asignarle un valor a las propiedades dentro del constructor, porque para eso esta hecho
      * Podemos usar la propiedad titulo en la vista, se puede interpolar con las dobles llaves {{}}  
   Interpolar: 
      * Con las dobles llaves se imprime el valor que tenga la propiedad titulo del componente, eso se llama interpolacion, binding x interpolacion, se muestra el valor de una propiedad en la vista
   */
   constructor(){
      // console.log("Se ha cargado el componente: videojuego.component.ts");

      this.titulo  = "Componente de Videojuegos";
      this.listado = "Listado de los juegos mas populares";      
   }

   /**
   ngOnInit:
      * Se ejecutara este metodo cada que se cargue el component
      * Lo mas normal, es asignarle aqui las funciones que cargaran cuando se inicialice el componente
   */
   ngOnInit(): void {
   }

   ngDoCheck(): void {
   }

}