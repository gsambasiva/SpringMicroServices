import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SpringMicroServicesSharedModule, UserRouteAccessService } from './shared';
import { SpringMicroServicesAppRoutingModule} from './app-routing.module';
import { SpringMicroServicesHomeModule } from './home/home.module';
import { SpringMicroServicesAdminModule } from './admin/admin.module';
import { SpringMicroServicesAccountModule } from './account/account.module';
import { SpringMicroServicesEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SpringMicroServicesAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SpringMicroServicesSharedModule,
        SpringMicroServicesHomeModule,
        SpringMicroServicesAdminModule,
        SpringMicroServicesAccountModule,
        SpringMicroServicesEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SpringMicroServicesAppModule {}
