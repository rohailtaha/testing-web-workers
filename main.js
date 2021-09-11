const worker = new Worker('worker.js');
worker.addEventListener('message', (event) => {
  console.log('completed heavy task with result: ', event.data);
})
worker.postMessage({cmd:'add', msg:'good luck'});

function test() {
  console.log('test function');
}

test();











