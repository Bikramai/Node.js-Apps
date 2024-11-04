console.log("before");
getUser(1, (user) => {
  console.log("User", user);
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "bikram" });
  }, 2000);
}
