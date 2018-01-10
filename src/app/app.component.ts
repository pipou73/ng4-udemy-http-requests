import {Component, OnInit, ViewChild} from '@angular/core';

import {Server} from "./server.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    servers: Server[] = [
        new Server('Testserver', 10, this.generateId()),
        new Server('Liveserver', 100, this.generateId()),
    ];


    private generateId() {
        return Math.round(Math.random() * 10000);
    }

    ngOnInit() {

    }

    onAddServer(name: string) {
        this.servers.push(
            new Server(name, 50, this.generateId())
        )
    }
}
