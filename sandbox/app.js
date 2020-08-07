const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post two", body: "this is post two" }
];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post three", body: "this is post three" });

// getPosts();

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post three", body: "this is post three" }, getPosts);
