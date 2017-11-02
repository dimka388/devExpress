import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FineUploader, UIOptions } from 'fine-uploader'

@Component({
	selector: 'fileupload-app',
	templateUrl: '../FileUpload/fileupload.component.html',
	styleUrls: ['../FileUpload/fileupload.component.scss']
})

export class FileUploadComponent implements OnInit, AfterViewInit {
    constructor() { }

    private uploader: FineUploader;
    private uiOptions: UIOptions;

    ngOnInit(): void {
    }

    ngAfterViewInit(){
        /**
         * Prepare/set options for the core + UI FineUploader
         */
        this.uiOptions = {
            debug: false,
            autoUpload: true,
            element: document.getElementById('fine-uploader-manual-trigger'),
            template: "qq-template-manual-trigger",
            request: {
                endpoint: "/upload"
            },
            chunking: {
                enabled: true,
                concurrent: {
                    enabled: true
                },
                success: {
                    endpoint: "/upload"
                }
            },
            deleteFile: {
                enabled: true,
                endpoint: '/upload'
            },
            retry: {
                enableAuto: true
            }
        };

        /**
         * Instantiate the FineUploader and pass in the uiOptions
         */
        this.uploader = new FineUploader(this.uiOptions);
    }

    uploadFiles() {
        this.uploader.uploadStoredFiles();
    }
}