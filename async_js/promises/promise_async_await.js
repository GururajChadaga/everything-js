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
async function loadScripts() {
  try {
    await load("dynamicScript.js");
    hello();
    await load("script2.js");
    hello2();
    await load("script3.js");
    hello3()
  } catch(error) {
    alert(error)
  }
}
loadScripts();
