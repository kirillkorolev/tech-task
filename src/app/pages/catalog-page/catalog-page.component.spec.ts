import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CatalogPageComponent } from './catalog-page.component';
import { CityCardComponent } from './components';
import { FooterModule, HeaderModule } from 'src/app/components';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent;
  let fixture: ComponentFixture<CatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HeaderModule, FooterModule, HttpClientModule, MatSnackBarModule
      ],
      declarations: [
        CatalogPageComponent, CityCardComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cities catalog'`, () => {
    expect(component.title).toEqual('Cities catalog');
  });
});
