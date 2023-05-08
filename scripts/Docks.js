import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        //Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            // set variable to get the dockId value of the dock clicked
            const dockId = itemClicked.dataset.id;
            //set a variable to get haulingShips
            const haulers = getHaulingShips()

            // Define an array for to store the found matching haulers to our dock id 
            let docksHaulingShips = [];
            
            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                if (hauler.dockId === parseInt(dockId)) {
                    //push the hauler name into the docksHaulingShips array
                    docksHaulingShips.push(hauler.name);
                }
            }

            //if the array is empty
            if (docksHaulingShips.length === 0){
                //if no match, present message in this format.. The Shanghai, China dock is currently unloading nothing
                window.alert(`${itemClicked.dataset.location} is currently unloading nothing`);
            } else {
                //if not empty, present message in this format.. The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
                window.alert(`${itemClicked.dataset.location} is currently unloading ${docksHaulingShips.join(" , ")}`)
            }
        }
    }
)

export const dockList = () => {
    const docks = getDocks()

    docks.sort((a,b) => a.location.localeCompare(b.location))

    let docksHTML = `<ul class="no-bullets">`

    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
                          data-id="${dock.id}"
                          data-location="${dock.location}">
                        ${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}


