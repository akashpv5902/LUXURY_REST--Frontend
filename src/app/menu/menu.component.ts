import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menulist:any
  filtermenu:any

  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.viewmenu().subscribe((data:any)=>{
      // console.log(data);
      this.menulist=data
      
    })
  }

filter(category:any){
  this.filtermenu= this.menulist.filter((item:any)=>{
    if(item.categoryId==category || category==""){
      return item
    }
  })
}



}
