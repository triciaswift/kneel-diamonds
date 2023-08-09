import { setStyleId } from "./TransientState.js";

const handleStyleChoice = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    setStyleId(parseInt(changeEvent.target.value));
  }
};

export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  document.addEventListener("change", handleStyleChoice);

  let optionsHTML = `<article class="metals">`;
  const divStringArray = styles.map((style) => {
    return `
    <div>
    <input type="radio" name="style" value="${style.id}"/>${style.style}
    </div>`;
  });

  optionsHTML += divStringArray.join("");
  optionsHTML += `</article>`;
  return optionsHTML;
};
