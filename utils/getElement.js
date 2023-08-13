// we can ignore the function name, just export the function.
export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("you did not select element");
  }
}
