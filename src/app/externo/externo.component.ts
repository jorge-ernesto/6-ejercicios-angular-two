import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user  : Array<any>;
  public userId: number;
  public fecha : any;
  
  //Variables para usar en el formulario "Crear Usuario"
  public new_user : any;
  public new_user_: any;
  public status   : string;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    console.log("Se ha cargado el componente: externo.component.ts");
    this.userId = 1;
    this.fecha  = new Date(2019, 5, 20);
    
    /**
     * Metodo para asignar objeto a new_user, usando el metodo new Object()
     * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
     */
    this.new_user      = new Object();
    this.new_user.name = "";
    this.new_user.job  = "";
    // console.log('new_user', this.new_user);

    /**
     * Metodo para asignar objeto a new_user, funciona igual que el metodo new Object()
     */
    this.new_user_ = { "name": "", "job": "" };
    // console.log('new_user_', this.new_user_);
  }

  ngOnInit(): void {
    this.getUser(this.userId);
  }

  public getUser(userId) {
    this.user = null; //De este modo siempre cargara el mensaje 'Cargando...'
    this._peticionesService.getUser(userId).subscribe( //Un Obsersable siempre tiene un subscribe, para suscribirme y recoger el resultado que nos devuelve
      //El metodo subscribe tiene 2 funciones de callback
      result => { //Una que recoge el resultado
        console.log('result:', result);
        this.user = result.data;
        console.log('user:', this.user)
      },
      error => { //Otra que recoge el posible error
        this.user = null;
        console.log(<any>error); //Recogemos el error de cualquier error que haga
      }
    );
    console.log('Esto puede ejecutarse primero, demostrando que una peticion AJAX es asincrona');
  }

  public onSubmit(form){
    console.log("Evento submit lanzado"); 
    console.log('new_user', this.new_user);  
    
    this._peticionesService.addUser(this.new_user).subscribe(
      result => {                          
        this.status    = 'success';
        this.new_user_ = result;                    
        form.reset();
        
        console.log(result);  
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

}
