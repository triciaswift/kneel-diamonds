import { MetalOptions } from "./MetalOptions.js";
import { Orders } from "./Orders.js";
import { PlaceOrder } from "./PlaceOrder.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const styleOptionsHTML = await StyleOptions();
  const SizeOptionsHTML = await SizeOptions();
  const buttonHTML = PlaceOrder();
  const ordersHTML = await Orders();

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${SizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `;

  container.innerHTML = composedHTML;
};

render();
