import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingship") {
            // Get the haulerId value of the shipping ship clicked
            const ShipHaulerId = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
                const haulers = getHaulingShips()
                
                for (const hauler of haulers) {
                    // Does the haulerId foreign key match the id of the current hauler?
                    if (parseInt(ShipHaulerId) === hauler.id) {
                        // Reassign the value of `haulingShip` to the current hauler
                        haulingShip = `${hauler.name}`
                    }
                }
            // Show an alert to the user with this format...Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
        } 
    }
)


export const shippingShipList = () => {
    const shippers = getShippingShips()

    shippers.sort((a,b) => a.name.localeCompare(b.name))

    let shipperHTML = `<ul class="no-bullets">`

    for (const shipper of shippers) {
        shipperHTML += `<li data-type="shippingship"
                            data-haulerid="${shipper.haulerId}"
                            data-name="${shipper.name}">
                        ${shipper.name}</li>`
    }

    shipperHTML += "</ul>"

    return shipperHTML
}