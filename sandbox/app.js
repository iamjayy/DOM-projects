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

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post three", body: "this is post three" }).then(getPosts);
