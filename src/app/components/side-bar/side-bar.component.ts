import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { 
    this.loadScript();
  }

  ngOnInit(): void {
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';

    script.src = '../assets/js/sb-admin-2.min.js'; //sidebar
    script.async = true;
    script.defer = true;

    body.appendChild(script);
  }
}
