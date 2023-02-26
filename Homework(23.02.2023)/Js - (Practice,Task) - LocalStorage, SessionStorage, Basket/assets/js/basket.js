"use strict"




let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));


if (products != null) {
    for (const product of products) {
        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}$</td>
        <td>${product.count}</td>
        <td class="d-none">${product.id}</td>
        <td><i class="fa-solid fa-trash-can"></i></td>
        </tr> `
        
    }


    getBasketCount(products);
    

}else{
    document.querySelector("table").classList.add("d-none")
    document.querySelector(".alert-warning").classList.remove("d-none");
    document.querySelector(".icon-delete").classList.add("d-none");
}



function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum+=item.count;
    }
    document.querySelector("sup").innerText = sum;
}



let deleteIcon = document.querySelector(".icon-delete");
deleteIcon.addEventListener("click",function(){
    localStorage.clear();
    window.location.reload();
})




let deleteIcons = document.querySelectorAll("tbody tr td i");


for (const deleteIcon of deleteIcons) {
    deleteIcon.addEventListener("click", function () {

        let arr = products.filter(m => m.id != deleteIcon.parentNode.previousElementSibling.innerText)
        products = arr;
        localStorage.setItem("basket", JSON.stringify(products)) 
        window.location.reload();    
        if (products.length == 0) {    
            localStorage.clear();
        }
    })
}



