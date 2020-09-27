import { DomainModule } from './../domain/domain.module';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [CommonModule, RoutingModule, DomainModule],
})
export class PresentationModule {}
