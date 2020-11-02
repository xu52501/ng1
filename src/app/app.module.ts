import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NgxsModule } from '@ngxs/store';
import { GlobalService } from 'src/app/code/services/global';
import { environment } from 'src/environments/environment';
import { CountState } from './app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([CountState], {
      developmentMode: !environment.production
    })
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
