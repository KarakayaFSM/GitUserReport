import * as request from "request" 
import { User } from "./User"
import { Repo } from "./Repo";

const OPTIONS:any = {
    headers:{
        "User-Agent" : "request"
    },
    json:true
};

export class GithubApiService{

    apiUri = "https://api.github.com/users/"

    getUserInfo(userName:string, 
        callback:(user:User) =>any){
        
        //above is the callback definition(signature)

        request.get(`${this.apiUri}${userName}`,OPTIONS,(error:any, response:any, body:any)=>{             
            callback(new User(body))
        })
    }

    getRepos(userName:string, 
        callback:(repos:Repo[]) =>any){
        request.get(`${this.apiUri}${userName}/repos`,OPTIONS,(error:any, response:any, body:any)=>{                         
            let repos = body.map((repo:any) => new Repo(repo))
            callback(repos)
           //body which contains an Array of repos
        })
    }

}