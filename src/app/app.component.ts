import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from './services/spoonacular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'PatoRecetas';
  firstCall: any;
  secondCall: any;
  public idRecetas: Array<number> = [];
  public infoRecetas: Array<any> = [];

  constructor(private sponacularService: SpoonacularService){}

  ngOnInit() {}  

  async getRecetas(inputIngrediente:string){ 
    await
    this.sponacularService.getReceta(inputIngrediente).toPromise()
    .then(
      response => {
        console.log(response);
        this.firstCall = response;          
        for(let i = 0 ; i < this.firstCall.results.length ; i++){
          this.idRecetas[i] = this.firstCall.results[i].id;
        }     
        this.searchDataByData(this.idRecetas);
      }
    )         
  } 

  searchDataByData(idRecetas: Array<number>){
    for(let i = 0 ; i < idRecetas.length ; i++){
      this.sponacularService.getInformacion(this.idRecetas[i])
      .subscribe(
        data => {          
          this.secondCall = data;    
          console.log(data);      
          this.infoRecetas[i] = this.secondCall;          
      })
    }
  }
}