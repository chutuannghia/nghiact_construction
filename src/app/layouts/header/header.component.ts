import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { faBars,faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faClose =  faClose;
  changeColor = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    }
    @HostListener("window:scroll", [])onWindowScroll() {
      if(this.document.documentElement.scrollTop >= 150){
        this.changeColor = true;
      }
      else
      {
        this.changeColor = false;
      }
   }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
