// Resolve
// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// reject
const p = Promise.reject(new Error("reson for rejection..."));
p.catch((error) => console.log(error));
