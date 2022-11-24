import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';




const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: '', component: AboutMeComponent},
  { path: '', component: SkillsComponent},
  { path: '', component: ProjectsComponent},
  { path: '', component: ContactComponent},
  { path: '', component: FooterComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'data-protection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
