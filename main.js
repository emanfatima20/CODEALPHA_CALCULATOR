function addNum(name) {
  window.navigator.vibrate(200);
  const ifield = document.getElementById('num2');
  let pv = ifield.value;
  ifield.value = pv + name;
}

function getResult() {
  const expr = document.getElementById('num2').value;
  let res = eval(expr);
  document.getElementById('num2').value = res;
}

function clearText() {
  document.getElementById('num2').value = "";
}

function deleteText() {
  const textfield = document.getElementById('num2');
  let text = textfield.value;
  textfield.value = text.slice(0, -1);
}