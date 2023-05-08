import { dockList } from "./Docks.js"
import { haulerList } from "./HaulingShips.js"
import { shippingShipList } from "./ShippingShips.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="details">
    <section class="docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="haulers">
        <h2>Hauling Ships</h2>
        ${haulerList()}
    </section>
    <section class="shippers">
        <h2>Shipping Ships</h2>
        ${shippingShipList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

