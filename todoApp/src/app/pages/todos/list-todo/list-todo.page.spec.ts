import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoPage } from './list-todo.page';

describe('ListTodoPage', () => {
  let component: ListTodoPage;
  let fixture: ComponentFixture<ListTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
