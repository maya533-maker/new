import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from '../administrateur/admin/admin.component';
import { HeaderAdminComponent } from '../header-footer/admin-h-f/header-admin/header-admin.component';
import { FooterAdminComponent } from '../header-footer/admin-h-f/footer-admin/footer-admin.component';
import { GestionClassesComponent } from '../administrateur/gestion-classes/gestion-classes.component';
import { GestionEtudiantsComponent } from '../administrateur/gestion-etudiants/gestion-etudiants.component';
import { GestionProfsComponent } from '../administrateur/gestion-profs/gestion-profs.component';
import { MatieresModule } from '../matieres/matieres.module';
import { GestionMatieresComponent } from '../administrateur/gestion-matieres/gestion-matieres.component';



@NgModule({
  declarations: [AdminComponent
  ,HeaderAdminComponent,
  FooterAdminComponent,
  GestionEtudiantsComponent,
  GestionClassesComponent,
  GestionProfsComponent,
  GestionMatieresComponent],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class AdminModule { }
