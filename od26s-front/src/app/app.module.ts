import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CadastroModeloComponent} from './cadastro-modelo/cadastro-modelo.component';
import {FormsModule} from '@angular/forms';
import {ModeloService} from './services/modelo.service';
import {ConfirmationService} from 'primeng/api';
import {
  AccordionModule,
  AutoCompleteModule,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  GrowlModule,
  TabViewModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {CadEquipamentoComponent} from './cad-equipamento/cad-equipamento.component';
import {EquipamentoService} from './cad-equipamento/equipamento.service';
import {PrecoComponent} from './preco/preco.component';
import {PrecoService} from './preco/preco.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroModeloComponent,
    CadEquipamentoComponent,
    PrecoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    GrowlModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule,
    TableModule,
    DataViewModule,
    AutoCompleteModule,
    TabViewModule,
    CKEditorModule,
    DropdownModule
  ],
  providers: [
    ConfirmationService,
    ModeloService,
    EquipamentoService,
    PrecoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
