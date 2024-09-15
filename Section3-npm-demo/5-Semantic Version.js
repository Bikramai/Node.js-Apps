// How to install or download node_modules in team work?
// npm i

// How to exclude the folder or file from git?
// 1. git init
// 2. git status
// 3. .gitignore and list all git files and repository.
// 4. if you run git status one more time
// 5. git add .
// 6. git commit -m "first commit"


// Note:-
// Caret-
// Semantic versioning:- which is also called samver.
// In semantic versioning a node package has three components.
// Major version, Minor version, and Patch version.


// Patch version which is used for bugs fixes eg -1.0.2
// Minor version is used for adding minor features that don't break the existing API, eg-1.2.0, and 
// Major Version is used for adding new feature that could potentially break the existing applications. eg 1.0.0.

// Carrot- This carrot character that tells npm that we're interested in any version as long as major version. 
// so there are no breaking changes, there are no major changes.
// and if there is newer minor, or patch version available, we will be interested i that package as well.
// Another way, another syntax to specify this version with out using carrot 1.x.
// ~ means you're interested in any version as long as the major version is 1, 
// and the minor version is 8. Alternative syntax - 1.8.x
