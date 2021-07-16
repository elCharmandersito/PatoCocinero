import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  //apiKey = '7fd18a364ba44874900b3340d4aaf6d0';   // Cuenta correo institucional
  //apiKey = 'b322c1ddccea4f55a3f33394f570d194'; //Cuenta correo habitual
  apiKey = '1f315ac82b9c4e11bf00b97502b6c751'     // Cuenta 3 
  number = 2;
  URI_RECETA: string = '';
  

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
      .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}&includeNutrition=true`).
      pipe(map(responce => responce, (error: any) => error));;
  }
}
