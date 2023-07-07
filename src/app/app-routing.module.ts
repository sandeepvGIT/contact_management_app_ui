import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSaveComponent } from './component/contact-save/contact-save.component';
import { ContactAllComponent } from './component/contact-all/contact-all.component';
import { ContactEditComponent } from './component/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: 'save', component: ContactSaveComponent },
  { path: 'all', component: ContactAllComponent },
  { path: 'edit/:contactId', component: ContactEditComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
