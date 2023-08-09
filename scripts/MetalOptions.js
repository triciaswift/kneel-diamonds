import { setMetalId } from "./TransientState.js";

const handleMetalChoice = (changeEvent) => {
  if (changeEvent.target.name === "metal") {
    const convertedToInteger = parseInt(changeEvent.target.value);
    setMetalId(convertedToInteger);
  }
};

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let optionsHTML = `<article class="metals">`;

  document.addEventListener("change", handleMetalChoice);

  const divStringArray = metals.map((metal) => {
    return `
    <div>
        <input type="radio" name="metal" value="${metal.id}"/>${metal.metal}
    </div>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</article>`;
  return optionsHTML;
};
