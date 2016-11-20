/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SDKModule } from './shared/sdk/index';

describe('App: Webapp', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
      FormsModule,
      SDKModule.forRoot(),
      ChartsModule
       ]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`,
    (done) => {
      fixture.whenStable().then(() => {
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Todo app works!');
        done();
      })
    });


  it('should render title in a h1 tag',  (done) => {
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todo app works!');
      done();
    });
  });
});
