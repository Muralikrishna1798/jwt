import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authGuard } from './_auth/auth.guard';
import { CreateuserComponent } from './createuser/createuser.component';

// const routes: Routes = [
//     {path:'home', component:HomeComponent}
//     {path:'admin', component:AdminComponent}
//     {path:'home', component:HomeComponent}
//     {path:'home', component:HomeComponent}
// ]

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'admin', component:AdminComponent,
    canActivate:[authGuard],data:{roles:['Admin']}},
    {path:'user', component:UserComponent,
   canActivate:[authGuard],data:{roles:['User']}
    },
    {path:'login', component:LoginComponent},
    {path:'createUser', component:CreateuserComponent},
    {path:'forbidden', component:ForbiddenComponent}
];
