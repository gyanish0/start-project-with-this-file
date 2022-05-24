import axios from "axios";

export function sortAddress(add) {
  const sortAdd = `${add.slice(0, 6)}...${add.slice(add.length - 4)}`;
  return sortAdd;
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function isValidAlphabet(value) {
  const re = /^[A-Z a-z]+$/;
  return re.test(value);
}

export function isValidPassword(value) {
  const re = /^(?=.*\d)(?=.*[A-Z]).{8,14}$/;
  return re.test(value);
}

export function isValidNumber(value) {
  const re = /^[0-9].*$/;
  return re.test(value);
}
export function isValidContact(value) {
  const re = /^[0-9]{10}$/;
  return re.test(value);
}
export function copyTextHandler(id) {
  navigator.clipboard.writeText(id);
}

export function copyToClipboard() {
  var copyText = document.getElementById("content").value;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    // https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/
    alert("Copied to clipboard");
  });
}

export const cancelTokenSource = axios.CancelToken.source;
// cancelToken: cancelTokenSource && cancelTokenSource.token
