function hello3() {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Dynamic h1 text script 3");
  h1.appendChild(text);
  document.body.appendChild(h1);
}
