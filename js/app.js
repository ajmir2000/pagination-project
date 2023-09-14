const list_items = [

    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin 2', family: 'Saeedi Rad 2' },
    { id: 7, name: 'Amir 2', family: 'Zehtab 2' },
    { id: 8, name: 'Qadir 2', family: 'Yolme 2' },
    { id: 9, name: 'Babak 2', family: 'Mohammadi 2' },
    { id: 10, name: 'Hasan 2', family: 'Ghahreman Zadeh 2' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];



const list_elments = document.getElementById("list") // wrapper
const pagination_elments = document.getElementById("pagination") 

let current_page = 1; // page on function
let rows = 5;   // row_per_page


function displayList(items, wrapper, row_per_page, page ){
 wrapper.innerHTML = ""

let end = row_per_page * page
let start = end - row_per_page

let paginationItems = items.slice(start, end)

paginationItems.forEach(function(item) {
    let item_element = document.createElement("div")
    item_element.classList.add("item")
    item_element.innerText = item.name + " " + item.family

    wrapper.appendChild(item_element)
    
});
}


function setupPagintation(items, pagesContainer, row_per_page){
    pagesContainer.innerHTML = ""

    let pageNumber = Math.round((items.length / row_per_page))

    for (let index = 1; index <= pageNumber + 1; index++) {
        let btn = paginationBtnGenerator(index, list_items)
        pagesContainer.append(btn)   
    }

}

function paginationBtnGenerator(indexNumber, list_itemsArray){
    let btnNumber = document.createElement("button")
    btnNumber.innerHTML = indexNumber

    if(indexNumber === current_page){
        btnNumber.classList.add("active")
    }

    btnNumber.addEventListener("click", function(){
        current_page = indexNumber
        displayList(list_itemsArray, list_elments, rows, current_page)

        let prevPage = document.querySelector("button.active")
        prevPage.classList.remove("active")

        btnNumber.classList.add("active")
    })
    return btnNumber
}

displayList(list_items, list_elments, rows, current_page)
setupPagintation(list_items, pagination_elments, rows)









// // this code made by me and it work well I know it have problem might but it work :)

// const list_items = [

//         { id: 1, name: 'Amin', family: 'Saeedi Rad' },
//         { id: 2, name: 'Amir', family: 'Zehtab' },
//         { id: 3, name: 'Qadir', family: 'Yolme' },
//         { id: 4, name: 'Babak', family: 'Mohammadi' },
//         { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },
    
//         { id: 6, name: 'Amin 2', family: 'Saeedi Rad 2' },
//         { id: 7, name: 'Amir 2', family: 'Zehtab 2' },
//         { id: 8, name: 'Qadir 2', family: 'Yolme 2' },
//         { id: 9, name: 'Babak 2', family: 'Mohammadi 2' },
//         { id: 10, name: 'Hasan 2', family: 'Ghahreman Zadeh 2' },
    
//         { id: 11, name: 'Saeed', family: 'Ehsani' },
//         { id: 12, name: 'Siamak', family: 'Modiri' },
//         { id: 13, name: 'Mohsen', family: 'Ansari' },
//         { id: 14, name: 'Mehran', family: 'Ali Pour' },
//         { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },
    
//         { id: 16, name: 'Hossein', family: 'Amino' },
//         { id: 17, name: 'Melika', family: 'Ehsani' },
//         { id: 18, name: 'Qadir', family: 'Yolme' },
//         { id: 19, name: 'Fatemeh', family: 'Alilou' },
//         { id: 20, name: 'Ehsan', family: 'Tayyebi' },
    
//         { id: 21, name: 'Zahra', family: 'Gholami' },
//         { id: 22, name: 'Matin', family: 'Sahebi' },
        
//     ];



// const list_elments = document.getElementById("list") // wrapper
// const pagination_elments = document.getElementById("pagination") 

// let current_page = 1; // page on function
// let rows = 5;   // row_per_page

// displayList(list_items, list_elments, rows, current_page)

// function displayList(items, wrapper, row_per_page, page ){
//      wrapper.innerHTML = ""

//     let end = row_per_page * page
//     let start = end - row_per_page

//     let paginationItems = items.slice(start, end)
    
//     paginationItems.forEach(function(item) {
//         let item_element = document.createElement("div")
//         item_element.classList.add("item")
//         item_element.innerText = item.name + " " + item.family

//         wrapper.appendChild(item_element)
        
//     });
// }

// setupPagintation(list_items, list_elments, rows)

// function setupPagintation(items, wrapper, row_per_page){
//     let pageNumber = Math.round((items.length / row_per_page))
//     for (let index = 0; index <= pageNumber; index++) {
//         let btnNumber = document.createElement("button")
//         btnNumber.innerHTML = index + 1
//         pagination_elments.append(btnNumber)
//         btnNumber.addEventListener("click", function(){
//             current_page = btnNumber.innerHTML
//             displayList(list_items, list_elments, rows, current_page)
//         })
        
//     }

// }