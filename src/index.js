import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

document.body.appendChild(makeButton("Shiny Button"));
document.body.appendChild(footer);

console.log(nav(), makeColorStyle("cyan"));
