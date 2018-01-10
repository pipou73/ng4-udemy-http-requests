import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Server} from "./server.model";
import 'rxjs/Rx'
import {Observable} from "rxjs";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServer(servers: Server[]) {
        const headers = new Headers({'Content-Type': 'application/json'})
        // return this.http.post(
        //     'https://udemy-ng-http-a3e1d.firebaseio.com/data.json',
        //     servers,
        //     { headers : headers }
        // );
        return this.http.put(
            'https://udemy-ng-http-a3e1d.firebaseio.com/data.json',
            servers,
            { headers : headers }
        );
    }

    getServers() {
        return this.http.get(
            'https://udemy-ng-http-a3e1d.firebaseio.com/data.json',
        ).map((response: Response) => {
           return response.json();
        }).map((data: any[]) => {
            return data.map(({name, capacity, id}) => new Server(name, capacity, id))
        }).catch((error: Response) => {
                return Observable.throw('Something went wrong');
            }
        );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-a3e1d.firebaseio.com/appName.json')
            .map((response: Response) => {
                return response.json()
            });
    }
}