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
	private items: Item[] = [
        {
          "DocumentID": 11223344,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Submitted",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/08/08"
        },
        {
          "DocumentID": 22334455,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/08/08"
        },
        {
          "DocumentID": 33445566,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Not Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/28"
        },
        {
          "DocumentID": 7676757,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Approval Withdrawn",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/07/28"
        },
        {
          "DocumentID": 99009977,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Aknowledged",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/28",
          "InnerItems": [
            {
              "DocumentID": 99009977,
              "FileName": "DocSomeUnrecognized.pdf",
              "PreferredName": "same as File Name",
              "Status": "Aknowledged",
              "SubmittedBy": "Stark, Sansa",
              "SubmittedDate": "2017/07/18"
            },
            {
              "DocumentID": 99009977,
              "FileName": "DocSomeUnrecognized.pdf",
              "PreferredName": "same as File Name",
              "Status": "Aknowledged",
              "SubmittedBy": "Stark, Sansa",
              "SubmittedDate": "2017/07/08"
            }
          ]
        },
        {
          "DocumentID": 4535251,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 55667788,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Aknowledged",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 99887766,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 99007766,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/06/14"
        },
        {
          "DocumentID": 44557788,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Approval Withdrawn",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/06/14"
        },
        {
          "DocumentID": 11223344,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Submitted",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/08/08"
        },
        {
          "DocumentID": 22334455,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/08/08"
        },
        {
          "DocumentID": 33445566,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Not Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/28"
        },
        {
          "DocumentID": 7676757,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Approval Withdrawn",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/07/28"
        },
        {
          "DocumentID": 99009977,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Aknowledged",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/28",
          "InnerItems": [
            {
              "DocumentID": 99009977,
              "FileName": "DocSomeUnrecognized.pdf",
              "PreferredName": "same as File Name",
              "Status": "Aknowledged",
              "SubmittedBy": "Stark, Sansa",
              "SubmittedDate": "2017/07/18"
            },
            {
              "DocumentID": 99009977,
              "FileName": "DocSomeUnrecognized.pdf",
              "PreferredName": "same as File Name",
              "Status": "Aknowledged",
              "SubmittedBy": "Stark, Sansa",
              "SubmittedDate": "2017/07/08"
            }
          ]
        },
        {
          "DocumentID": 4535251,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 55667788,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Aknowledged",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 99887766,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/07/04"
        },
        {
          "DocumentID": 99007766,
          "FileName": "DocSomeUnrecognized.pdf",
          "PreferredName": "same as File Name",
          "Status": "Currently Approved",
          "SubmittedBy": "Stark, Sansa",
          "SubmittedDate": "2017/06/14"
        },
        {
          "DocumentID": 44557788,
          "FileName": "SomeUnrecognizedNameFile.pdf",
          "PreferredName": "same as File Name",
          "Status": "Approval Withdrawn",
          "SubmittedBy": "Stark, Arya",
          "SubmittedDate": "2017/06/14"
        }
      ];

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
