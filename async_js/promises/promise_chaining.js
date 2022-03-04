// load script dynamically to index.js

function load(source, callback) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = source;
    document.head.append(script);
    script.onload = () => {
      resolve(script);
    };

    script.onerror = () => {
      reject(new Error(`${source} not found`));
    };
  });
}

//asynchronous
load("dynamicScript.js")
  .then(() => {
    hello();
    return load("script2.js");
  })
  .then(() => {
    hello2();
    return load("script3.js");
  })
  .then(() => {
    hello3();
  })
  .catch((error) => {
    alert(error);
  });
