import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadedFilesComponent } from './UploadedFiles/uploaded-files.component';
import { SubmissionComponent } from './Submission/submission.component';

import { DxDataGridComponent,
	DxDataGridModule,
	DxSelectBoxModule,
	DxCheckBoxModule,
	DxButtonModule } from 'devextreme-angular';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		DxDataGridModule,
		DxSelectBoxModule,
		DxCheckBoxModule,
		DxButtonModule
	],
	declarations: [
		AppComponent,
		UploadedFilesComponent,
		SubmissionComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
