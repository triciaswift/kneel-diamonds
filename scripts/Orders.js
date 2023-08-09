export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await fetchResponse.json();

  // Create a number formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let ordersHTML = orders.map((order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;
    return `<div>Order #${order.id} cost ${formatter.format(orderPrice)}</div>`;
  });

  ordersHTML = ordersHTML.join("");
  return ordersHTML;
};
