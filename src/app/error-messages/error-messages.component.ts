import { Component } from '@angular/core';

@Component ({
    selector: 'app-error-messages',
    template: `
    <p>This is error message</p>
    `,
    styles: [
        `
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        `
    ]
    // templateUrl: './error-messages.component.html'
    // styleUrls: ['./error-messages.component.css']
})

export class ErrorMessagesComponent {

}