import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientesPage} from '../pages/clientes/clientes';
import { SolicitudesPage} from '../pages/solicitudes/solicitudes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientesPage, SolicitudesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientesPage, SolicitudesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
