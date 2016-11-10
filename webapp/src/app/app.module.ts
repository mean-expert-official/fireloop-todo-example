import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SDKModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SDKModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }