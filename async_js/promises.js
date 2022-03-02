const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// Handling Promises with .then() and .catch()
createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

// Handling Promises with Async/Await
// Put the code which returns a promise in a function and make it async
// 'Await' the call that returns the promise.
// Subsequent lines will only be run after the await is done.
async function init() {
  await createPost({ title: "Post Four", body: "This is post four" });
  getPosts();
}
init();

// Async/Await with fetch()
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();

// Promise.all()
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
