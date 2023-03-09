const table = document.querySelector("table");

let editing = false;

let editionItems;

table.addEventListener("click", changeInnerHTML);

function changeInnerHTML(e) {
  if (!table.contains(e.target)) return;

  if (e.target.closest(".ok") || e.target.closest(".cancel")) {
    finishEdit(editionItems, e.target);
  } else if (e.target.closest("td")) {
    if (editing) return;

  let elem = e.target.tagName !== "TD" ? e.target.parentElement : e.target;

  editing = true;

  const textarea = createTextarea(elem);

  const btnOk = createBtn("ok");
  const btnCancel = createBtn("cancel");

  elem.append(textarea);
  elem.append(btnOk);
  elem.append(btnCancel);
  textarea.focus();

  editionItems = {
    div: elem,
    textarea: textarea,
    buttonOk: btnOk,
    buttonCancel: btnCancel
  };
  }
}

function createTextarea(div) {
  const elem = document.createElement("textarea");
  elem.classList.add("textarea_div");
  elem.value = div.innerHTML;
  return elem;
}

function createBtn(btnType) {
  const btn = document.createElement("button");
  btn.classList.add(btnType);
  btn.textContent = btnType.toUpperCase();

  return btn;
  }

function finishEdit(elems, btn) {
  if (btn.closest(".ok")) {
    elems.div.innerHTML = elems.textarea.value;
  }
  elems.textarea.remove();
  elems.buttonOk.remove();
  elems.buttonCancel.remove();
  editing = false;
}