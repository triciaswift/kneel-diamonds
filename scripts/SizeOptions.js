import { setSizeId } from "./TransientState.js";

const handleSizeChoice = (changeEvent) => {
  if (changeEvent.target.name === "size") {
    const convertedToInteger = parseInt(changeEvent.target.value);
    setSizeId(convertedToInteger);
  }
};

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  document.addEventListener("change", handleSizeChoice);

  let optionsHTML = `<article class="metals">`;
  const divStringArray = sizes.map((size) => {
    return `
    <div>
    <input type="radio" name="size" value="${size.id}"/>${size.carets}
    </div>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</article>`;
  return optionsHTML;
};
