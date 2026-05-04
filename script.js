function goToProducts() {

document.getElementById("products").scrollIntoView({
    behavior:"smooth"
});
}
const products =
[
    {
        name:"زعقة" ,
        price:"800" ,
        image:"zaaqa.jpg"
    },


{
        name:"قرع" ,
        price:"2100" ,
        image:"images/qara.jpg"
    },


    
    {
        name:"دوار الشمس" ,
        price:"1300" ,
        image:"images/doar.jpg"
    },



    {
        name:"فول سوداني" ,
        price:"900" ,
        image:"images/hbazez.jpg"
    }

];

const container =
document.getElementById("products-container");

 
products.forEach((product) => {
        
    container.innerHTML+= `
    <div class="product">
    <img src="${product.image}"width="150">
    <h3>${product.name}</h3>
    <p${product.price}>ريال</p>
    <a href="https://wa.me/967773000738?text20% مرحبا اريد طلب منتج ${product.name}" target="blank_">اطلب الان
</a>
    </div>
    `;
    
});
