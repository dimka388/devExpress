import { Component, ViewChild } from '@angular/core';
import { Service } from './uploaded-files.service';

@Component({
	selector: 'uploaded-files',
	providers: [ Service ],
	templateUrl: '../UploadedFiles/uploaded-files.component.html'
})

export class UploadedFilesComponent {
	private title: string = 'Uploaded files';

	private options: any = {
		selectionMode: 'multiple',
		allowUpdating: true,
		columns: [
			{
				dataField:'FileName',
				allowEditing: false
			},
			{
				dataField:'PreferredName'
			}
		]
	};

	constructor(private service: Service) {
		this.options.items = service.getItems();
	}
}
