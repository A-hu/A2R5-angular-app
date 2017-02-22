import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: "My First doc",
      description: "hellohello",
      file_url: 'http://google.com',
      updated_at: 'thisisupdate',
      image_url: 'http://google.com',
    },
    {
      title: "My First doc",
      description: "hellohello",
      file_url: 'http://google.com',
      updated_at: 'thisisupdate',
      image_url: 'http://google.com',
    },
    {
      title: "My First doc",
      description: "hellohello",
      file_url: 'http://google.com',
      updated_at: 'thisisupdate',
      image_url: 'http://google.com',
    }
  ]
}
