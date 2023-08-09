import { savePlaceOrder } from "./TransientState.js";

const handlePlaceOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "placeOrder") {
    savePlaceOrder();
  }
};

export const PlaceOrder = () => {
  document.addEventListener("click", handlePlaceOrderClick);
  return `<button id="placeOrder">Place Order</button>`;
};
