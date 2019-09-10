import { GithubApiService } from "./githubApiService"
import { User } from "./User"
import * as _ from "lodash"
import { Repo } from "./Repo"

let service = new GithubApiService()

if (process.argv.length < 3) {
    console.log("Please pass the username you want to see the details of");
} else {
    let username = process.argv[2]

    service.getUserInfo(username, (user: User) => {
        //chainig of callbacks is not recommended but
        //we'll do this for the sake of simplicity
        service.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size])
            user.repos = _.take(sortedRepos, 5)
            console.log(user)
        })
        //this is the callback implementation
    });
}

