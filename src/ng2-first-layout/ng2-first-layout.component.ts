import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef } from '@angular/core';

import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
    selector: 'ng2-first-layout',
    styleUrls: ['./ng2-first-layout.component.scss'],
    templateUrl: './ng2-first-layout.component.html',
})
export class Ng2FirstLayoutComponent implements OnChanges {

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        
    }

}
