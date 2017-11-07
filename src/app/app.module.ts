import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataGridComponent } from './DataGrid/datagrid.component';
import { SitesListingComponent } from './SitesListing/siteslisting.component';
import { SubmissionListingComponent } from './SubmissionListing/submissionlisting.component';
import { SubmissionDetailsComponent } from './SubmissionDetails/submission-details.component';
import { UploadedFilesComponent } from './UploadedFiles/uploaded-files.component';
import { FileUploadComponent } from './FileUpload/fileupload.component';

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
		DataGridComponent,
		SitesListingComponent,
		SubmissionListingComponent,
		SubmissionDetailsComponent,
		UploadedFilesComponent,
		FileUploadComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
