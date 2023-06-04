import { AfterViewInit, ChangeDetectionStrategy, Component, Injector, Input, ChangeDetectorRef } from '@angular/core';

export interface NavigationItem {
  label: string;
  route: string;
  children?: NavigationItem[];
  icon?: string;
  separator?: boolean;
}

export type NavigationItems = NavigationItem[];

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent implements AfterViewInit{
  @Input()
  item!: NavigationItem;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  hasChildren(item: NavigationItem): boolean {
    return this.getChildren(item).length > 0;
  }

  getChildren(item: NavigationItem): NavigationItem[] {
    return item?.children ?? [];
  }
}
