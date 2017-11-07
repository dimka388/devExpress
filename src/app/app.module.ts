import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadedFilesComponent } from './UploadedFiles/uploaded-files.component';
import { SubmissionComponent } from './Submission/submission.component';
import { SubmissionDetailsComponent } from './SubmissionDetails/submission-details.component';
import { FileUploadComponent } from './FileUpload/fileupload.component';
import { DataGridComponent } from './DevExpDataGrid/datagrid.component';
import { SitesListingComponent } from './SitesListing/siteslisting.component';
import { SampleComponent } from './Sample/sample.component';

import { DxDataGridComponent,
	DxDataGridModule,
	DxSelectBoxModule,
	DxCheckBoxModule,
	DxTreeListModule,
	DxButtonModule } from 'devextreme-angular';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		DxDataGridModule,
		DxSelectBoxModule,
		DxCheckBoxModule,
		DxTreeListModule,
		DxButtonModule
	],
	declarations: [
		AppComponent,
		UploadedFilesComponent,
		SubmissionComponent,
		SubmissionDetailsComponent,
		FileUploadComponent,
		DataGridComponent,
		SitesListingComponent,
		SampleComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
