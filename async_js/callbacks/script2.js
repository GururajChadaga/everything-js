document.body.append("Dynamically added.");

function hello() {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Dynamic h1 text script 2");
  h1.appendChild(text);
  document.body.appendChild(h1);
}

function showAlert() {
  alert("Script 2 loaded");
}
