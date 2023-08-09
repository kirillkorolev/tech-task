import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterModule, HeaderModule } from 'src/app/components';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page.component';
import { MapComponent } from './components';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HeaderModule, FooterModule, HttpClientModule, LeafletModule, MatSnackBarModule
      ],
      declarations: [
        DetailsPageComponent, MapComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'City details'`, () => {
    expect(component.title).toEqual('City details');
  });
});
