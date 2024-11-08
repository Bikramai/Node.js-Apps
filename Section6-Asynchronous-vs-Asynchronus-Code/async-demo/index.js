// Asynchronous
console.log("before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
      // CALLBACK HELL
    });
  });
});
console.log("After");

// Synchronous
console.log("before");
const user = getUser(1);
const repos = getRepisitories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "bikram" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
