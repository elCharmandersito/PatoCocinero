import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  apiKey = '7fd18a364ba44874900b3340d4aaf6d0';
  number = 3;
  URI_RECETA: string = '';
  URI_INFORMACION = '';
  

  constructor(private http:HttpClient) { 
    this.URI_RECETA = 
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&number=${this.number}&query=`;
  }  

  getReceta(inputIngrediente:string){
    return this.http.get(`${this.URI_RECETA}${inputIngrediente}`).
      pipe(map(responce => responce, (error: any) => error));
  }

  getInformacion(id:number){
    return this.http
      .get(`https://api.spoonacular.com/recipes/${this.URI_INFORMACION}${id}/information?apiKey=${this.apiKey}&includeNutrition=true`).
      pipe(map(responce => responce, (error: any) => error));;
  }
}
