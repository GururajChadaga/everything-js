// load script dynamically to index.js

function load(source, callback) {
  const script = document.createElement("script");
  script.src = source;
  document.head.append(script);

  script.onload = () => {
    return callback(null, script);
  };

  script.onerror = () => {
    return callback(new Error(`${source} not found`));
  };
}

//asynchronous
load("dynamicScript.js", (error, script) => {
  if (error) {
    alert(error);
  } else {
    hello();
    load("script2.js", (error, script) => {
      if (error) {
        alert(error);
      } else {
        hello();
        load("script3.js", (error, script) => {
          if (error) {
            alert(error);
          } else {
            hello();
          }
        });
      }
    });
  }
});
