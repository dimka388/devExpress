import { Component, ViewChild } from '@angular/core';
import { File, Service } from './uploaded-files.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
	selector: 'uploaded-files-app',
	providers: [ Service ],
	templateUrl: '../UploadedFiles/uploaded-files.component.html',
	styleUrls: ['../UploadedFiles/uploaded-files.component.scss']
})

export class UploadedFilesComponent {
	@ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
	title: string = 'Uploaded files';
	files: File[];

	constructor(private service: Service) {
		this.files = service.getItems();
	}
}
