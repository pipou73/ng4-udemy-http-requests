import {Component, OnInit, ViewChild} from '@angular/core';

import {Server} from "./server.model";
import {ServerService} from "./server.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    //https://udemy-ng-http-a3e1d.firebaseio.com/
    servers: Server[] = [
        new Server('Testserver', 10, this.generateId()),
        new Server('Liveserver', 100, this.generateId()),
    ];

    appName = this.serverService.getAppName();

    constructor(private serverService: ServerService) {}

    private generateId() {
        return Math.round(Math.random() * 10000);
    }

    ngOnInit() {
        // this.servers = this.serverService.getServers();
    }
    onGet() {
        this.serverService.getServers().subscribe(
            (servers: Server[]) => this.servers = servers,
            (error)    =>  console.log('error', error)
        );
    }
    onSave() {
        this.serverService.storeServer(this.servers).subscribe(
            (response) =>  console.log('response', response),
            (error)    =>  console.log('error', error)
        );
    }
    onAddServer(name: string) {
        this.servers.push(
            new Server(name, 50, this.generateId())
        )
    }


}
