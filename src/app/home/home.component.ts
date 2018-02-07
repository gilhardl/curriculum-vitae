import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './vendor/simple-line-icons/css/simple-line-icons.css',
    './vendor/bootstrap/css/bootstrap.min.css',
    './vendor/css/animate.css',
    './vendor/css/layout.min.css',
  ]
})
export class HomeComponent implements OnInit {

  fragment: any;

  constructor(private routerCtrl: Router, private activatedRouteCtrl: ActivatedRoute) { }

  ngOnInit() {
    // Permet de capter les lien anchor
    this.activatedRouteCtrl.fragment.subscribe( fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewChecked() {
    try {
        if (this.fragment) {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
    } catch (e) { }
  }

}
