import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
    { path: '', component: HomeComponent, },
    { path: 'register', component: SignupComponent },
    { path: 'login', component: SigninComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouting { }