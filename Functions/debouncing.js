// Debouncing: Ensures a function runs only after a delay, preventing unnecessary executions. Useful for search inputs.

function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
  const onSearch = debounce(() => console.log("Searching..."), 300);
  onSearch();

  
//Throttling: Ensures a function runs at most once per interval, useful for scrolling or resizing events.
function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
      let now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  }
  
  const onScroll = throttle(() => console.log("Scrolling..."), 500);
  onScroll();
  