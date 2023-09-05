import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  data: any;
  sub: any;
  notiDetail: any;
  detailNewslist: any[]=[];
  titleNews: string = '';
  imagenDetailNew: string= '';
  subTitleNews: string = '';
  dataDetailNews: string='';
  contentDetailNews: string='';
  fuenteUrlNews: string='';

  constructor(
    public route : Router,
    public router : ActivatedRoute
  ) { }

  ngOnInit() {    
    
    this.notiDetail = localStorage.getItem('notiDetail');
    this.detailNewslist = Object.values(JSON.parse(this.notiDetail));

    this.sub = this.router.params.subscribe(params => {
      this.data = params ['id'];

    });

    this.titleNews = this.detailNewslist[0];
    this.imagenDetailNew = this.detailNewslist[5];
    this.subTitleNews = this.detailNewslist[0];
    this.dataDetailNews = this.detailNewslist[1];
    this.contentDetailNews = this.detailNewslist[4];
    this.fuenteUrlNews = this.detailNewslist[6];
  }

  back(){
    this.router.navigate(['folder/:id'])
  }

}
