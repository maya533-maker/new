import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionEvaluationComponent } from './professeurs/gestion-evaluation/gestion-evaluation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NotesModule } from './professeurs/note/note.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LoginComponent } from './login/login.component';
import { HeaderAdminComponent } from './header-footer/admin-h-f/header-admin/header-admin.component';
import { FooterAdminComponent } from './header-footer/admin-h-f/footer-admin/footer-admin.component';
import { GestionClassesComponent } from './administrateur/gestion-classes/gestion-classes.component';
import { ProfsComponent } from './professeurs/profs/profs.component';
import { GestionEtudiantsComponent } from './administrateur/gestion-etudiants/gestion-etudiants.component';
import { GestionProfsComponent } from './administrateur/gestion-profs/gestion-profs.component';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { MatieresModule } from './matieres/matieres.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  // Autres routes...
];
@NgModule({

  declarations: [
    AppComponent,
    ProfsComponent,
    GestionEvaluationComponent,
    // NotesComponent,
    EtudiantsComponent,
    LoginComponent,
    MaintenanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NotesModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
