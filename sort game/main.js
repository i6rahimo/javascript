let promise = await fetch('https://docs.google.com/document/u/0/');

if (promise.ok) {
  let json = await promise.json()
} else {
  console.log('error');
}


