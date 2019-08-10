import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })
    export class DataService {
    baseUrl:string = "http://localhost:3000";

    constructor(private httpClient : HttpClient) {}

    getAllQueues(){
        return this.httpClient.get('http://10.10.0.148:8080/queue/');//https://kbvpvn58gf.execute-api.ap-south-1.amazonaws.com/alpha/getallqueues');
    }

    saveQueue(newQName:String){
        this.httpClient.post("http://10.10.0.148:8080/queue/add",
        // https://kbvpvn58gf.execute-api.ap-south-1.amazonaws.com/alpha/savequeue",
        {
          "name": newQName,
        //   "recordLimit": 10,
        //   "status": "Active",
        //   "createdAt": "",
        //   "updatedAt": ""
        })
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
                location.reload
            },
            error => {
                console.log("Error", error);        
            }
        );
    }

    deleteQueue(queueId:String) {this.httpClient.delete("http://10.10.0.148:8080/queue/"+queueId
    // https://kbvpvn58gf.execute-api.ap-south-1.amazonaws.com/alpha/deletequeue",
        // {
        // "id": queueId,
        // }
        )
        .subscribe(
        data => {
        console.log("POST Request is successful ", data);
        },
        error => {
        console.log("Error", error);
        }
        );
    }
}