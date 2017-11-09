import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import DataSource from 'devextreme/data/data_source';
import 'rxjs/add/operator/toPromise';

export class Item {
	DocumentID: number;
	FileName: string;
	PreferredName: string;
	Status: string;
	SubmittedBy: string;
	SubmittedDate: string;
	InnerItems?: Item[];
}

@Injectable()

export class Service {
	private itemsURL: string = 'https://59f734d6d85fbd0012ee2235.mockapi.io/submissions-details';
	private itemsURL2: string = 'http://59f734d6d85fbd0012ee2235.mockapi.io/submission-details-2';
	private itemsURL3: string = 'http://59f734d6d85fbd0012ee2235.mockapi.io/submission-details-3';

	getItems: any;
	getOldItems: any;
	getNewItems: any;
	getData: any = (url) => {
		return new DataSource({
			load: (loadOptions: any) => {
				return this.http.get(url)
					.toPromise()
					.then(response => response.json());
			}
		});
	};

	constructor(private http: Http) {
		this.getItems = () => this.getData(this.itemsURL);
		this.getOldItems = () => this.getData(this.itemsURL2);
		this.getNewItems = () => this.getData(this.itemsURL3);
	}
}
