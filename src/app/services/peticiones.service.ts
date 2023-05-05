import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Estos modulos nos permitiras hacer peticiones AJAX a un servicio externo / url externa y tambien modificar las cabeceras de esas peticiones
import { Observable } from 'rxjs'; //Importamos el Observable, porque con el Observable vamos a estar recogiendo la informacion que nos devuelve el API REST cuando hagamos una peticion

@Injectable()
export class PeticionesService{

   public url: string;

   constructor(
      public _http: HttpClient
   ) { 
      this.url = 'https://reqres.in/';
   }

   public getUser(userId): Observable<any>{ //Esto nos devuelve un Observable de cualquier tipo
      return this._http.get(this.url + 'api/users/' + userId);
   }

   public addUser(user): Observable<any>{
      let json = JSON.stringify(user);       
      let params = 'json='+json;      
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      
      console.log('json', json);
      console.log('params', params);
      
      return this._http.post(this.url+'api/users', json, {headers: headers});
      // return <any>null;
   }
}