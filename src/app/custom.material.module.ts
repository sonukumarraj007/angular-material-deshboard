import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule,
        FlexLayoutModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatBadgeModule,
        MatCardModule,
        MatFormFieldModule
    ],
})
export class CustomMaterialModule { }
