export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let optionsHTML = "";
  //   for (const metal of metals) {
  //     optionsHTML += `<div>
  //         <input type="radio" name="metal" value="${metal.id}"/>${metal.metal}
  //     </div>`;
  //   }

  const divStringArray = metals.map((metal) => {
    return `
    <div>
        <input type="radio" name="metal" value="${metal.id}"/>${metal.metal}
    </div>`;
  });

  optionsHTML += divStringArray.join("");
  return optionsHTML;
};
