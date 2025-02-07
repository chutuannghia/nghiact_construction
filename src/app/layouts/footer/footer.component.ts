import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faEnvelope,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  LinkFB = true;
  faEnvelope = faEnvelope;
  constructor(private router: ActivatedRoute,@Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
  }
  onActivate() {
    if (isPlatformBrowser(this.platform)) {
      // here you can run any browser specific code, like:
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  linkLeft(){
    this.LinkFB = !this.LinkFB;
  }
  linkRight(){
    this.LinkFB = !this.LinkFB;
  }
}
