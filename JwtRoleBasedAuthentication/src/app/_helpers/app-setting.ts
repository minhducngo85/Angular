import { HttpHeaders } from "@angular/common/http";

export class AppSettings {
    public static BACKEND_ENDPOINT = "http://localhost:8080"

    /** The http options */
    public static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}

