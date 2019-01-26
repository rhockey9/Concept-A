import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

declare var $:any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/components',
    title: 'NHL',
    type: 'sub',
    icontype: 'pe-7s-angle-down-circle',
    children: [
        {path: 'buttons', title: 'Home', ab:''},
        {path: 'grid', title: 'Anaheim Ducks', ab:''},
        {path: 'panels', title: 'Arizona Coyotes', ab:''},
        {path: 'icons', title: 'Boston Bruins', ab:''},
        {path: 'typography', title: 'Buffalo Sabres', ab:''}
    ]
},{
    path: '/components',
    title: 'NFL',
    type: 'sub',
    icontype: 'pe-7s-angle-down-circle',
    children: [
        {path: 'buttons', title: 'Home', ab:''},
        {path: 'grid', title: 'Atlanta Falcons', ab:'ATL'},
        {path: 'panels', title: 'Panels', ab:'P'},
        {path: 'icons', title: 'Icons', ab:'I'},
        {path: 'typography', title: 'Typography', ab:'T'}
    ]
}
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
           $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
           $('html').addClass('perfect-scrollbar-on');
       } else {
           $('html').addClass('perfect-scrollbar-off');
       }
    }
    ngAfterViewInit(){
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

        var collapseId = $sidebarParent.siblings('a').attr("href");

        $(collapseId).collapse("show");
    }
}
