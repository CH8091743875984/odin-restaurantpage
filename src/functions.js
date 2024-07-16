//run both npx and the script for updating the live preview

export function createHomeDiv () {
    console.log('calling this')
    clearContentDiv()

    const parentDiv = document.querySelector('#content')

    const introHeader = document.createElement('header')
    introHeader.textContent = "Welcome to the restaurant!"
    parentDiv.appendChild(introHeader)

    const introImg = document.createElement('img')
    introImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bucatini_allamatriciana.jpg/1024px-Bucatini_allamatriciana.jpg"
    introImg.height = 300
    parentDiv.appendChild(introImg)

    const introDiv = document.createElement('div')
    introDiv.textContent = "Stop in for the original four Roman pastas! Enjoy our freshly made pasta and sauces using authentic ingredients that will transport you back in time to the dawning age of Italian cooking."
    parentDiv.appendChild(introDiv)
}

export function clearContentDiv () {
    const parentDiv = document.querySelector('#content')
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild)
    }
}

export function createMenuDiv () {

    clearContentDiv()

    const parentDiv = document.querySelector('#content')

    const menuObject = [
        {itemTitle: "cacio e pepe"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Spaghetti_cacio_e_pepe_%28creamy_as_it_should_be%29.jpg"
        ,itemDescription: "spaghetti, pecorino romano, black pepper"
        },
        {itemTitle: "carbonara"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg"
        ,itemDescription: "bucatini, pecorino romano, black pepper, egg yolk"
        },
        {itemTitle: "gricia"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pasta_alla_Gricia.jpg/1280px-Pasta_alla_Gricia.jpg"
        ,itemDescription: "spaghetti, pecorino romano, black pepper, guancale"
        },
        {itemTitle: "amatriciana"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bucatini_allamatriciana.jpg/1024px-Bucatini_allamatriciana.jpg"
        ,itemDescription: "bucatini, san marzano tomato, pecorino romano, black pepper, guancale"
        },
    ]

    for (let i=0; i < menuObject.length; i++) {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')

        const itemTitle = document.createElement('div')
        itemTitle.classList.add('itemTitle')
        itemTitle.textContent = menuObject[i].itemTitle
        menuItem.appendChild(itemTitle)

        const itemImg = document.createElement('img')
        itemImg.src = menuObject[i].itemImg
        itemImg.classList.add('itemPicture')
        menuItem.appendChild(itemImg)

        const itemDescription = document.createElement('div')
        itemDescription.classList.add('itemDescription')
        itemDescription.textContent = menuObject[i].itemDescription
        menuItem.appendChild(itemDescription)

        parentDiv.appendChild(menuItem)
    }
}

export function createAboutDiv () {
    clearContentDiv()

    const parentDiv = document.querySelector('#content')

    parentDiv.textContent = "placeholder for about content!"
}

export function addNavBtnFunctions() {
    const buttonList = document.getElementsByClassName('nav')
    console.log('trying buttons')
    for (let i=0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', function () {
            if (buttonList[i].textContent == "Home") {
                createHomeDiv()
            }
            if (buttonList[i].textContent == "Menu") {
                createMenuDiv()
            }   
            if (buttonList[i].textContent == "About") {
                createAboutDiv()
            }      
        })
    }
}

