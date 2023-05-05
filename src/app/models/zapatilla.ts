/*
Modelo:
   * Lo normal es que cuando creamos un modelo, tenga un nombre en singular, porque ese modelo, va a representar a un solo objeto, no va a representar a muchos objetos
*/

/*
Creamos una clase para la entidad o modelo 'Zapatilla'
*/
export class Zapatilla {
   /* 
   Propiedades: Hemos definido nuestras propiedades de la clase para un modelo
   Constructor: Algo mas que tendria un objeto o una clase de este tipo para un modelo, es un constructor
   */
   /*
   public nombre: string;
   public marca: string;
   public color: string;
   public precio: number;
   public stock: boolean;

   constructor(nombre, marca, color, precio, stock) {
      this.nombre = nombre;
      this.marca = marca;
      this.color = color;
      this.precio = precio;
      this.stock = stock;
   }
   */

   /*
   Cargar la clase rapidamente: Definir una propiedad, pasarla como parametro y asignarle un valor puede ser resumido
   */
   constructor(
      public nombre: string,
      public marca: string,
      public color: string,
      public precio: number,
      public stock: boolean,
   ) { }
}
