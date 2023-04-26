import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'home',
    redirectTo: '/tabs/home',
  },
  {
  path: 'search',
  redirectTo: '/tabs/search',
  },
  {
    path: 'cart',
    redirectTo: '/tabs/cart',
  },
  {
    path: 'account',
    redirectTo: '/tabs/account',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
