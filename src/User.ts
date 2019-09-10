import { Repo } from "./Repo";

export class User{

        login: string = ""
        fullName: string = ""
        repoCount: number = 0
        followerCount: number = 0
        repos?:Repo[]

    constructor(userResponse:any){
        this.login = userResponse.login
        this.fullName = userResponse.name
        this.repoCount = userResponse.public_repos
        this.followerCount = userResponse.followers
    }
        
}