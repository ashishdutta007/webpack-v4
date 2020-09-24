// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = (buttonName) => {
  const button = document.createElement("button");
  button.innerText = buttonName;

  return button;
};

module.exports = makeButton;
