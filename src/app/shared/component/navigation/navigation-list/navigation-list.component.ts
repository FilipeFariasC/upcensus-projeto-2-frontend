import { AfterViewInit, ChangeDetectionStrategy, Component, Injector, Input, ChangeDetectorRef } from '@angular/core';
import { NavigationItem, NavigationItems } from '../navigation-item/navigation-item.component';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationListComponent implements AfterViewInit{
  @Input()
  parent!: NavigationItem;
  @Input()
  items!: NavigationItems;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  hasChildren(list: NavigationItem): boolean {
    return this.getChildren(list).length > 0;
  }

  getChildren(list: NavigationItem): NavigationItem[] {
    return list?.children ?? [];
  }
}
