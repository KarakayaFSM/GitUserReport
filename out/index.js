"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var githubApiService_1 = require("./githubApiService");
var _ = __importStar(require("lodash"));
var service = new githubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username you want to see the details of");
}
else {
    var username_1 = process.argv[2];
    service.getUserInfo(username_1, function (user) {
        //chainig of callbacks is not recommended but
        //we'll do this for the sake of simplicity
        service.getRepos(username_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.size; }]);
            user.repos = _.take(sortedRepos, 5);
            console.log(user);
        });
        //this is the callback implementation
    });
}
