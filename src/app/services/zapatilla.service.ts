/**
 * Service: Lo primero que debe tener un servicio es el objeto injectable
 */
import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'; //Importamos la clase del modelo Zapatilla

/**
 * Injectable: Es un decorador, tenemos que decorar la clase con esto, para poder injectar nuestro servicio en otras clases
 */
@Injectable()
export class ZapatillaService {

   public zapatillas: Array<Zapatilla>; //Esto sera un array de objetos de tipo Zapatilla

   constructor() {
      this.zapatillas = [ //Zapatillas es igual a un array
         new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true), //Aqui creamos el objeto, utilizando mi molde, utilizando mi clase
         new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
         new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
         new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 190, true),
      ];
   }

   public getZapatillas(): Array<Zapatilla> {
      return this.zapatillas;
   }

   public getTexto() {
      return 'Hola mundo desde un servicio';
   }

}