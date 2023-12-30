import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './global/register/register.component';
import { LoginComponent } from './global/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { LoginGuard } from './guard/login.guard';
import { VerifyOtpComponent } from './global/verify-otp/verify-otp.component';
import { VerifyotpGuard } from './guard/verifyotp.guard';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserGuardGuard } from './guard/user-guard.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: "full"

  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
    canActivate: [VerifyotpGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },

  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: '',
    component: UserhomeComponent,
    canActivate: [UserGuardGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
