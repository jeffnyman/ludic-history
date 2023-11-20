// ========================================
// Handle pre leading spaces.
// ========================================

document.querySelectorAll("pre div").forEach((element) => {
  let html = element.outerHTML;
  let pattern = html.match(/\s*\n[\t\s]*/);

  element.outerHTML = html.replace(new RegExp(pattern, "g"), "\n");
});
