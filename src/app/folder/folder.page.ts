import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {


    this.http.get('../../assets/noticias/noticias_all.json').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

    });
    
  }

  navigate(value: any){

  let id = JSON.stringify(value)
    this.router.navigate(['/dash', {id}]);
    localStorage.setItem('notiDetail', JSON.stringify(value));
  }

  

    
}
