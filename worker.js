addEventListener('message', (event) => {
  console.log(event.data)
  let result = 0;
  for (let i = 0; i <= 1000000000; i++) {
    result += i;
  }
  postMessage(result);
})
