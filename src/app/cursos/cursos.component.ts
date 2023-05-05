/*
Hooks / Eventos ciclo de vida:
  OnInit:
    * Ya sabemos lo basico de los componentes, ahora veremos los 'Hooks' de los componentes o los 'eventos del ciclo de vida' de los componentes
    * Uno de los hooks mas importante es el 'OnInit', este componente lo tiene, ya que fue autogenerado por Angular CLI
  DoCheck:
    * El metodo o hook DoCheck, se ejecuta cada vez que se produce un cambio en el componente o en la aplicacion de Angular
    * Es un metodo que se va a estar ejecutando frecuentemente cada vez que suceda algo de esto
  OnDestroy:
    * El metodo o hook OnDestroy, nos servira para que se ejecute algo antes de eliminar la instancia de un componente
*/
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/* Hook 'OnInit' y 'DoCkeck'
  * Se implementa en la clase ya que es una interfaz y nos permite utilizar el metodo 'ngOnInit' dentro de la clase
*/
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {

  public titulo   : string = 'Componente de Cursos';
  public nombre   : string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    console.log("Se ha cargado el componente: cursos.component.ts");
  }

  /* Metodo 'ngOnInit'
    * Se ejecutara este metodo cada que se cargue el component
  */
  ngOnInit(): void {
    //console.log('ngOnInit de cursos.component.ts ejecutado');
    this.obtenerParametros();
  }

  /* Metodo 'ngDoCheck'
    * Se ejecutara cuando se realiza un cambio en el codigo
  */
  ngDoCheck(): void {
    //console.log('ngDoCheck de cursos.component.ts ejecutado');
  }

  /* Metodo 'ngOnDetroy'
    * Se ejecutara cuando se destruye un componente dentro del ciclo de vida
  */
  ngOnDestroy(): void {
    //console.log('ngOnDestroy de cursos.component.ts ejecutado')
  }

  public cambiarTitulo() {
    this.titulo = 'Nuevo titulo del componente Cursos';
  }

  public obtenerParametros() {
    //Sacamos los parametros de la url
    this._route.params.subscribe((params: Params) => {
      //Nombres para ser utilizados en las vistas
      this.nombre    = params['nombre'];
      this.followers = +params['followers'];
    
      //Tambien podemos asignar a variables locales de la funcion
      let nombre_    = params['nombre'];
      let followers_ = params['followers'];

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }

      console.log('Parametros:', params);
      console.log('Nombre:'    , params.nombre   , params['nombre']);
      console.log('Apellidos:' , params.followers, params['followers']);
    });
  }

  public redirigir() {
    this._router.navigate(['/cursos', 'Jorge', 30]);
  }
}
