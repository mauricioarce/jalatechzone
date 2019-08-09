import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AssistantsRoutingModule } from './assistants-routing.module';
import { AssistantsComponent } from './assistants.component';
import { AssistantsService } from './assistants.service';
import { PackageModule } from '../shared/pipes/package-parser/package-parser.module';
import { ModalModule } from '../shared/directives/modal/modal.module';
import { SelectModule } from '../shared/directives/select/select.module';
import { MaterializeService } from '../shared/services/materialize/materialize.service';

@NgModule({
  declarations: [AssistantsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssistantsRoutingModule,
    PackageModule,
    ModalModule,
    SelectModule
  ],
  providers: [AssistantsService, MaterializeService]
})
export class AssistantsModule {}
