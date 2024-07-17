//run both npx and the script for updating the live preview

export function createHomeDiv () {
    console.log('calling this')
    clearContentDiv()

    const parentDiv = document.querySelector('#content')

    const introHeader = document.createElement('header')
    introHeader.textContent = "TRADITIONAL ROMAN CUISINE"
    introHeader.classList.add('introTagline')

    parentDiv.appendChild(introHeader)
    
    const homeImgContainer = document.createElement('div')
    homeImgContainer.classList.add('homeImgContainer')

    const introImg = document.createElement('img')
    introImg.src = "https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-master768.jpg"
    introImg.height = 300
    homeImgContainer.appendChild(introImg)

    const introImg2 = document.createElement('img')
    introImg2.src = "https://static01.nyt.com/images/2021/02/03/dining/pasta-alla-Gricia/pasta-alla-Gricia-master768.jpg"
    introImg2.height = 300
    homeImgContainer.appendChild(introImg2)

    const introImg3 = document.createElement('img')
    introImg3.src = "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg"
    introImg3.height = 300
    homeImgContainer.appendChild(introImg3)

    parentDiv.appendChild(homeImgContainer)

    const introDiv = document.createElement('div')
    introDiv.classList.add('introText')

    introDiv.textContent = "Transport yourself back in time to the dawning age of Italian cooking. The original four Roman pastas. Simple, high quality ingredients. No peas in the carbonara."
    
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

    const menuContent = document.createElement('div')
    menuContent.classList.add('menuContent')
    parentDiv.appendChild(menuContent)

    const menuTitle = document.createElement('div')
    menuTitle.textContent = "Dinner Menu"
    menuTitle.classList.add('menuTitle')
    menuContent.appendChild(menuTitle)

    const menuObject = [
        {itemTitle: "cacio e pepe"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Spaghetti_cacio_e_pepe_%28creamy_as_it_should_be%29.jpg"
        ,itemDescription: "spaghetti, pecorino romano, black pepper"
        ,itemPrice: "18"
        },
        {itemTitle: "carbonara"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg"
        ,itemDescription: "bucatini, pecorino romano, black pepper, egg yolk, guancale"
        ,itemPrice: "21"
        },
        {itemTitle: "gricia"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pasta_alla_Gricia.jpg/1280px-Pasta_alla_Gricia.jpg"
        ,itemDescription: "spaghetti, pecorino romano, black pepper, guancale"
        ,itemPrice: "27"
        },
        {itemTitle: "amatriciana"
        ,itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bucatini_allamatriciana.jpg/1024px-Bucatini_allamatriciana.jpg"
        ,itemDescription: "bucatini, san marzano tomato, pecorino romano, black pepper, guancale"
        ,itemPrice: "32"
        },
    ]

    const foodMenu = document.createElement('div')
    foodMenu.classList.add('foodMenu')


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

        const itemPrice = document.createElement('div')
        itemPrice.classList.add('itemPrice')
        itemPrice.textContent = menuObject[i].itemPrice
        menuItem.appendChild(itemPrice)

        foodMenu.appendChild(menuItem)
    }
    menuContent.appendChild(foodMenu)
}

export function createAboutDiv () {
    clearContentDiv()

    const parentDiv = document.querySelector('#content')

    parentDiv.textContent = "placeholder for about content!"


    const menuImg = document.createElement('img')
    menuImg.src = "https://wallpaperaccess.com/full/261540.jpg"
    menuImg.height = 300
    parentDiv.appendChild(menuImg)


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

