
    const products = [
        {
        id : 0,    
        name : 'Stylo', 
         description : 'Stylo heyel yecer' , 
        price : 5 , 
        quantity : 4},
        {
        id : 1,
        name : 'Table', 
        description : 'Table b400 Dinar' , 
        price : 400 , 
        quantity : 2},
        {
        id : 2,
        name : 'Chaise', 
        description : 'Chaise 7lowa' , 
        price : 60 , 
        quantity : 0} 
    ] ;

    let checkout ={
            quantity :  0 , 
            products : []
    }





function init ()
    {
        updateCheckout() ;    
        productsHtml = "" ; 
        // <a href="#" onclick="addToCart(${products[product].id})" style="color : black">Add To Cart</a></span>
        for (const product in products)
        {
            productsHtml=productsHtml+`
            <div class="project" id='product${products[product].id}'>
                <img src="res/coming-soon.png" alt="" height="250px" width="300px">
                <h3>${products[product].name}</h3>
                <p>${products[product].description}</p>
                <p>${products[product].price} DNT</p>
                <div class="content">
                    <div class="technologies">
                        <h4 class="quantity">${products[product].quantity} left!</h4>
                    </div>
                    <span>
                    <button type="button" class="btn btn-primary"  onclick="addToCart(${products[product].id})">Add To Cart</button>
                </div>
            </div>`
        }

    document.querySelector(".projects").innerHTML=productsHtml ;
    }


function addToCart(id)
    {
        checkout.quantity ++ ; 
        updateCheckout() ; 
        if (products[id].quantity!==0)
        {
        products[id].quantity = products[id].quantity- 1 ;
        }

        document.querySelector("#product"+id+" .quantity" ).innerText = (products[id].quantity ==0 )?"Out of Stock!": products[id].quantity+" left!" ; 

        if (products[id].quantity===0)
        {document.querySelector("#product"+id+" button" ).disabled=true;}
    }




    function updateCheckout()
    {
        document.querySelector(".checkout-quantity").innerText =`(${checkout.quantity})`  ;
    }







        



  