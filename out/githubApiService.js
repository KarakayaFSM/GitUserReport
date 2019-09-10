"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
        this.apiUri = "https://api.github.com/users/";
    }
    GithubApiService.prototype.getUserInfo = function (userName, callback) {
        //above is the callback definition(signature)
        request.get("" + this.apiUri + userName, OPTIONS, function (error, response, body) {
            callback(new User_1.User(body));
        });
    };
    GithubApiService.prototype.getRepos = function (userName, callback) {
        request.get("" + this.apiUri + userName + "/repos", OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback(repos);
            //body which contains an Array of repos
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
