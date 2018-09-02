import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'gsap';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import {TL} from 'gsap/src/uncompressed/timelinemax';
import {Power4} from 'gsap/src/uncompressed/timelinemax';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public show :boolean
   public hide :boolean
   public adding: number
   public toggled: boolean
   public sided: number

  constructor() {
    this.show = true;
    this.hide = true;
    this.toggled = true;
    
   }
  

  ngOnInit() {
   $(document).ready(function(){
    var menu = $(".menu"),
    menuitem1 = $(".menu__item--1"),
    menuitem2 = $(".menu__item--2"),
    menuitem3 = $(".menu__item--3"),
    speed = 0.15;

    var tl = new TimelineLite({paused:true}); //pause default

    //collapse menu
    tl.to(menuitem1, speed, {top: 20, ease: Power4.easeOut}, "label--1") 
      .to(menuitem3, speed, {top: -20, ease: Power4.easeOut}, "label--1")
    
    //rotate all items
      .to([menuitem1, menuitem2, menuitem3], speed, {rotation: -90, ease: Power4.easeOut})
    
    //expand menu
      .to(menuitem1, speed, {left: 20, ease: Power4.easeOut}, "label--2")
      .to(menuitem3, speed, {right: 20,ease: Power4.easeOut}, "label--2");

      menu.click(function() {
        $(this).toggleClass('active');
        if ( $(this).hasClass("active") ) {
            tl.play(); 
    
        }  
        else {
            tl.reverse(); 
           
    
        }
    });

   })

  }

  openNoti(){
    this.show= !this.show
  }

  openTask(){
    this.hide= !this.hide
  }

  openSidebar(){
   this.toggled = !this.toggled;
   if(!this.toggled){

    this.adding=200;
    this.sided=200;
   }else{
    this.adding=68;
    this.sided=0;
   }
  } //end of sidebar func

}
