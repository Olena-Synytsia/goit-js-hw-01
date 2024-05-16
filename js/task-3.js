function getElementWidth(content, padding, border) {
  content = content.replace("p", " ");
  content = content.replace("x", " ");
  padding = padding.replace("p", " ");
  padding = padding.replace("x", " ");
  border = border.replace("p", " ");
  border = border.replace("x", " ");
  content = Number(content);
  padding = Number(padding);
  border = Number(border);
  let getElementWidth = content + padding * 2 + border * 2;
  return getElementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
