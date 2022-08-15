import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url:string="http://127.0.0.1:8000/api/v1/";

  headers=new HttpHeaders();

  constructor(private http:HttpClient) { }

  regUser(_form:any)
  {
    let dir= this.url+"register";
    return this.http.post<any>(dir,_form);
  }
  login(_form:any)
  {
    let dir= this.url+"login";
    return this.http.post<any>(dir,_form);
  }

  show()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animal-show";
    return this.http.get<any>(dir, {headers:header});
  }

  showT()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"tipos-show";
    return this.http.get<any>(dir, {headers:header});
  }

  

  regisAnimal(_form:any)
  {
    var formdata = new FormData();
    formdata.append('nombre', _form.nombre);
    formdata.append('tipo_id', _form.tipo_id);
    formdata.append('imagen', _form.imagen);
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"ingresar-animal";
    return this.http.post<any>(dir,formdata,{headers:header});
  }

  editAnimal(_id:any):Observable<any>
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animal-edit/"+_id;
    return this.http.get<any>(dir,{headers:header});
  }

  updateAnimal(_form:any,_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animal-update/"+_id;
    return this.http.post<any>(dir,_form,{headers:header});
  }

  destroyAnimal(_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animal-destroy/"+_id;
   return this.http.post<any>(dir,_id,{headers:header});
  }

  reporte()
  {
    /* const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`); */
    let dir= this.url+"reporte";
   return this.http.get<any>(dir/* ,{headers:header} */);
  }

}
