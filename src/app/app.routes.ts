import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'awzk1200',
		loadChildren: () => import('./awzk1200/awzk1200.module').then(m => m.Awzk1200Module)
  },
  	{
		path: 'awzk1300',
		loadChildren: () => import('./awzk1300/awzk1300.module').then(m => m.Awzk1300Module)
	},
	{ path: '', redirectTo: 'awzk1200', pathMatch: 'full' },
	// { path: '', redirectTo: 'awzk1300', pathMatch: 'full' },
];
