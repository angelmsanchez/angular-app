/* tslint:disable:prefer-const */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { TabsComponent } from './tabs.component';
import { TabInterface } from './interfaces';

describe('TabsComponent', () => {
  let comp: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let element: any;

  const tabs: TabInterface[] = [
    {
      title: 'ESI.COMMON.USER_FIX',
      isActive: true
    },
    {
      title: 'ESI.COMMON.USER_FIX',
      isActive: false
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    comp = fixture.componentInstance;
    element = fixture.nativeElement;
    comp.tabs = tabs;
  });

  it('should create the tabs component', () => {
    expect(comp).toBeTruthy();
  });

  it('should load the tabs', () => {
    expect(comp.tabs).toBe(tabs);
  });

  it('should test the ngInit', async(() => {
    comp.ngOnInit();
  }));

  it('should not change the active class', async(() => {
    const tab = tabs[0];
    const index = 0;
    spyOn(comp.onTabChanged, 'emit');
    comp.tabClicked(tab, index);
    expect(comp.onTabChanged.emit).not.toHaveBeenCalled();

    expect(comp.tabs[0].isActive).toBeTruthy();
    expect(comp.tabs[1].isActive).toBeFalsy();
  }));

  it('should change the active class', async(() => {
    const tab = comp.tabs[1];
    const index = 1;
    spyOn(comp.onTabChanged, 'emit');

    comp.tabClicked(tab, index);

    expect(comp.onTabChanged.emit).toHaveBeenCalled();

    expect(comp.tabs[1].isActive).toBeTruthy();
    expect(comp.tabs[0].isActive).toBeFalsy();
  }));

});
