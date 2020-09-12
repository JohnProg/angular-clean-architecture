import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/presentation/presentation.module').then(
        (m) => m.PresentationModule,
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/presentation/presentation.module').then(
        (m) => m.PresentationModule,
      ),
  },
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
