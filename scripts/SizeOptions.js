export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let optionsHTML = "";
  const divStringArray = sizes.map((size) => {
    return `
    <div>
    <input type="radio" name="size" value="${size.id}"/>${size.carets}
    </div>`;
  });

  optionsHTML += divStringArray.join("");
  return optionsHTML;
};
