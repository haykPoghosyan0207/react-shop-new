const add = document.querySelectorAll('.fa-cart-plus');
const itemsCount = document.querySelector('.quantity');
const del = document.querySelectorAll(".remove");
const imgList = document.querySelectorAll(".img img");
const popup = document.querySelector('.popUp');
const cancel = document.querySelector(".cancel");
const popupImg = document.querySelector('.popUpImages');

let count = 0

del.forEach((elem,i) => {
    elem.style.display = "none";
    add[i].addEventListener('click',()=>{
        itemsCount.textContent = `${++count}`;
        elem.style.display = 'block';
    });
    del[i].addEventListener('click',()=>{
        itemsCount.textContent = `${--count}`;
        elem.style.display = 'none'
    });
    imgList[i].addEventListener('click',()=>{
        popup.style.display = 'block'
        popupImg.src = imgList[i].getAttribute('src');
    })
    
});
cancel.addEventListener('click',()=>{
    popup.style.display = 'none'
})



