import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationItem, NavigationItems } from '../navigation-item/navigation-item.component';
import { navigationItems } from './navigation-items';


export interface NavigationBarConfiguration {
  mode: MatDrawerMode;
  hasBackdrop: boolean;
}
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements AfterViewInit{

  private _config: NavigationBarConfiguration = {
    mode: 'side',
    hasBackdrop: true
  }

  private _items = navigationItems;

  get configuration(): NavigationBarConfiguration {
    return this._config;
  }

  get items(): NavigationItems {
    return this._items;
  }
  ngAfterViewInit(): void {

  }


  hasChildren(list: NavigationItem): boolean {
    return this.getChildren(list).length > 0;
  }

  getChildren(list: NavigationItem): NavigationItems {
    return list?.children ?? [];
  }
}
