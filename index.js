function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function newItem(url){
    let item = newImage(url)
    item.addEventListener('dblclick', ()=> {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
    return item
}

// function newInventory(){
//     let inventory = document.createElement('div')
//     inventory.style.position = 'fixed'
//     inventory.style.bottom = '0px';
//     inventory.style.left = '0px'
//     inventory.style.width = '100%'
//     inventory.style.height = '100px'
//     inventory.style.display = 'flex'
//     inventory.style.flexDirection = 'row'
//     inventory.style.alignItems = 'center'
//     inventory.style.justifyContent = 'space-evenly'
//     inventory.style.border = '2px solid black'
//     inventory.style.backgroundColor = 'brown'
//     document.body.append(inventory)
//     return inventory
// }
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}


let horizon = window.innerHeight / 1.35
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/110, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

// newImage('assets/green-character.gif', 100, 250)
// newImage('assets/tree.png', 200, 450)
// newImage('assets/pillar.png', 350, 250)
// newImage('assets/pine-tree.png', 450, 350)
// newImage('assets/crate.png', 150, 350)
// newImage('assets/well.png', 500, 575)

// newItem('assets/sword.png', 500, 555)
// newItem('assets/shield.png', 165, 335)
// newItem('assets/staff.png', 600, 250)

// const inventory = newInventory()

function move(element){
    element.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom){
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

// let horizon = window.innerHeight / 1.75
// let heightOfSky = window.innerHeight-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

move(newInventory()).to(0, 0)
move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
// const inventory = newInventory()