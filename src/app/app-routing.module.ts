import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AppRouters: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth-routing.module').then((m) => m.AuthRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
