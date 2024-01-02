import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.scss']
})
export class ModalHomeComponent implements OnInit {
  
  //Variables
  showModal: boolean = false;
  
  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
