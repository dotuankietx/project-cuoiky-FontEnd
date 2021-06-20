import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
export interface Item {
  id: string, name: string, category: string,
  quantity: number,
  price: string,
  status: boolean,
  priority: boolean
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  closeResult = '';
  ngOnInit(): void {

  }
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  //  items: Item[]=[];
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();

    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. Only using for versions 7 and earlier



    this.itemsCollection.valueChanges().subscribe(data => {
      console.log(data)
    }); //chỉ sử dụng cho Angular 8,9
    //id1: ten field đại diện cho documnent id, lưu ý không 
    //được đặt trùng với tên field khai báo trong dữ liệu
  }
  add (){
    let docid = "id1";
   
    //them vao itemsCollection với docid cụ thể
    this.itemsCollection.add({
      id:"default id", name:"default item",category: 'clothes',
      quantity:   1,
      price:   "30000",
      status:   true,
      priority:   true
    });//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }

  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
