let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success) resolve("data fetched successfully")
    else reject("Error in fetching data")
});

promise.then(response => console.log(response))
.catch(error => console.error(error))


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())  
  .then(data => console.log(data))    // Handle success
  .catch(error => console.error("Error:", error)); // Handle failure
