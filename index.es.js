export default function crelt(elt, ...children) {
  if (typeof elt == "string") elt = document.createElement(elt)
  let i = 0
  if (children.length && typeof children[0] == "object" && children[0] && children[0].nodeType == null) {
    let attrs = children[0]
    for (let name in attrs) if (Object.prototype.hasOwnProperty.call(attrs, name)) {
      let value = attrs[name]
      if (typeof value == "string") elt.setAttribute(name, value)
      else if (value != null) elt[name] = value
    }
    i = 1
  }
  for (; i < children.length; i++) add(elt, children[i])
  return elt
}

function add(elt, child) {
  if (typeof child == "string") {
    elt.appendChild(document.createTextNode(child))
  } else if (child == null) {
  } else if (child.nodeType != null) {
    elt.appendChild(child)
  } else if (child.length != null) {
    for (let i = 0; i < child.length; i++) add(elt, child[i])
  } else {
    throw new RangeError("Unsupported child node: " + child)
  }
}
