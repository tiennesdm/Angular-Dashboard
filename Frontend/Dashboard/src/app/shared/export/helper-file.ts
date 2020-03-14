export function loadscript(url) {
  let node = document.createElement("script");
  node.src = url;
  node.type = "text/javascript";
  node.async = false;
  node.charset = "utf-8";
  document.getElementsByTagName("head")[0].appendChild(node);
  return node;
}
