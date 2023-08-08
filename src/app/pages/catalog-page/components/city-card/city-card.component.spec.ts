import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityCardComponent } from './city-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);

    component = fixture.componentInstance;
    component.data = {
      "id": 1,
      "name": "Madrid",
      "name_native": "Madrid",
      "country": "Spain",
      "continent": "Europe",
      "latitude": 40.416775,
      "longitude": -3.703790,
      "population": 3223000,
      "founded": 1083,
      "landmarks": [
        "Royal Palace",
        "Plaza Mayor",
        "Plaza de Cibeles"
      ]
    },
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have link to details page`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('a').length).toEqual(1);
    expect(compiled.querySelectorAll('a')[0].textContent).toEqual('Madrid')
  })

  it(`should have city name in the link`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('a')[0].textContent).toEqual('Madrid')
  })
});
