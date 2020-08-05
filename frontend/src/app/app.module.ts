import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRouting } from './app-router.module';
import { NguCarouselModule } from '@ngu/carousel';

import { QuizComponent } from './quiz/quiz.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { InfoComponent } from './info/info.component';
import { SocialComponent } from './social/social.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PopularQuizComponent } from './popular-quiz/popular-quiz.component';
import { TrustedPlayersStatistikComponent } from './trusted-players-statistik/trusted-players-statistik.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageHeroComponent } from './homepage-hero/homepage-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    DashboardComponent,
    InfoComponent,
    SocialComponent,
    TestimonialsComponent,
    PopularQuizComponent,
    TrustedPlayersStatistikComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    HomepageHeroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRouting,
    HttpClientModule,
    MatRadioModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    NguCarouselModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
