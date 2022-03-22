import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerComponent, DrawerSelectEvent, DrawerItem, PanelBarItemModel,} from '@progress/kendo-angular-layout';
import { Subscription } from 'rxjs';
import { menuItems, userMenuItems } from 'src/app/common/common.functions';
import { CommonService } from 'src/app/Services/common.service';
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
  animations: [
    trigger('toggleNav', [
      state('collapsed, void', style({ transform: 'translateX(-100%)' })),
      state('expanded', style({ transform: 'translateX(0)' })),
      transition('collapsed <=> expanded', [animate(200), animate(200)]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,

})
export class FullLayoutComponent implements OnInit {

  menuItems = menuItems.parents;

  public selected: boolean | undefined;
  public itemIndex: any;
  public items = menuItems.parents;
  userRole: any;
  collapsed = true;
  $sidePanelSub!: Subscription;

  private selectedId = '';

  menuData : any = [];
  constructor(private _commonService:CommonService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.menuItems);
    // const user = JSON.parse(sessionStorage.getItem('UserInfo'));
    // this.userRole = user ? user.userRole : null;
    if (this.userRole !== 'Super Admin') {
      this.menuItems = userMenuItems.parents;
      this.items = userMenuItems.parents;
    }
    // this.getTimeZone();
    this.$sidePanelSub = this._commonService.sidePanel.subscribe((val) => {
      this.collapsed = val;
    });
    this.getMenuItems();
  }

  /* [
    {
      text: 'All Checks',
      icon: 'k-i-folder',
      selected: true,
      path: 'allchecks',
    },
    { separator: true },
    { text: 'Online', icon: 'k-i-table', selected: false, path: 'online' },
    { text: 'MIS Log', icon: 'k-i-aggregate-fields', selected: false, path: 'online/mislog' },
    { text: 'Online Case Report', icon: 'k-i-aggregate-fields', selected: false, path: 'online/onlinecasereport' },
    {text: 'Import Worldcheck Results', icon: 'k-i-excel', selected: false, path: 'online/importexcel' },
    { separator: true },
    {
      text: 'Audit Trail',
      icon: 'k-i-track-changes-accept-all',
      selected: false,
      path: 'audittrail',
    },
  ];
 */
  /* public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    this.router.navigate([ev.item.path]);
  }*/

  // toggleDrawer(event, drawer: DrawerComponent) {
  //   drawer.toggle(event);
  // }
  ngOnDestroy(): void {
    this.$sidePanelSub.unsubscribe();
  }

  public removeChildren(children: Array<any>) {
    this.items.splice(this.itemIndex + 1, children.length);
  }

  getMenuItems() {
    this._commonService.fetchMenuStructre().subscribe((data) => {
      this.menuData = data.allMenuItems;
      console.log("Menu data : ", this.menuData)
    });
  }

  // getTimeZone() {
  //   let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  //   this._commonService.getTimezone().subscribe((data) => {
  //     if (data.timeZone) {
  //       timezone = data.timeZone;
  //     }
  //     this._commonService.localTimeZone.next(timezone);
  //   });
  // }

  public onPanelChange(event: any): void {
    console.log('stateChange: ', event);
  }
  openDialog(menu: { hasOwnProperty: (arg0: string) => any; menuItems: string | any[]; path: any; }) {
    if (!menu.hasOwnProperty('menuItems') || !menu.menuItems.length) {
      console.log(menu.path);
      this.router.navigate([menu.path]);
    }
  }

}
