import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';
@Component({
  selector: 'app-munuitem-list',
  templateUrl: './munuitem-list.component.html',
  styleUrls: ['./munuitem-list.component.css']
})
export class MunuitemListComponent implements OnInit {

  headerList : string[] = ["Code","Desc","Unit Price"];
  columnList : string[] = ["code","desc","unitPrice"];
  menuList: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    let menuItem1 = new MenuItem();
    menuItem1.id = 1;
    menuItem1.code = "TEA";
    menuItem1.desc = "Masala Tea";
    menuItem1.unitPrice = 10;

    let menuItem2 = new MenuItem();
    menuItem2.id = 2;
    menuItem2.code = "COFFEE";
    menuItem2.desc = "Cold Coffee";
    menuItem2.unitPrice = 20;

    let menuItem3 = new MenuItem();
    menuItem3.id = 3;
    menuItem3.code = "VPU";
    menuItem3.desc = "Vada Pau";
    menuItem3.unitPrice = 10;

    this.menuList.push(menuItem1);
    this.menuList.push(menuItem2);
    this.menuList.push(menuItem3);

  }

}
