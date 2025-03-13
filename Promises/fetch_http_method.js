fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Post", body: "Content goes here" })
  })
    .then(res => res.json())
    .then(data => console.log("Created:", data))
    .catch(error => console.error(error));
  