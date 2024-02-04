//  ---------------------- Make Explore Button Scroll to Best Selling ----------------------
 
// Define a function named scrollToElement that takes an elementId as a parameter
function scrollToElement(elementId) {
   // Retrieve the DOM element with the specified elementId
   var element = document.getElementById(elementId);
   
   // Check if the element exists in the DOM
   if (element) {
     // If the element exists, scroll to it with a smooth scrolling behavior
     element.scrollIntoView({ behavior: 'smooth' });
   };
};

// Retrieve the DOM element with the ID "explorebtn"
var explorebtn = document.getElementById("explorebtn");

// Check if the explorebtn element exists in the DOM
if(explorebtn){
   // If explorebtn exists, add a click event listener
   explorebtn.addEventListener('click', () => {
     // When explorebtn is clicked, scroll to the element with the ID "bestsellingsection"
     scrollToElement("bestsellingsection");
   });
};

//  ---------------------- Make Explore Button Scroll to Best Selling End ----------------------



// ---------------------------- Home Page Carousel ----------------------------

// Get the carousel element with the ID 'carouselAutoplaying'
var carousel = document.getElementById('carouselAutoplaying');

// Add an event listener to the carousel for the slide.bs.carousel event
if (carousel)
{
   carousel.addEventListener('slide.bs.carousel', function (event) {
      // Get the index of the next slide
      var index = event.to;
   
      // Remove the 'active' class from all indicators
      var indicators = document.querySelectorAll('#carouselCaptions .carousel-indicators button');
      indicators.forEach(function (indicator) {
         indicator.classList.remove('active');
      });
   
      // Add the 'active' class to the indicator corresponding to the next slide
      indicators[index].classList.add('active');
   });
}

// ---------------------------- Home Page Carousel End ----------------------------

// ---------------------------- Event Section ----------------------------

var conuntDownDate = new Date("Feb 27, 2024 00:00:00").getTime();
var x = setInterval(function () {
   var now = new Date().getTime();
   var distance = conuntDownDate - now;

   if (distance < 0) {
      clearInterval(x); // Stop the interval when the countdown reaches the date
      document.getElementById("event").style.display = "none"; // Hide the section with id "event"
  } else {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
  }

   if(distance < 0 ){

   }
},1000)

// ---------------------------- Event Section End ----------------------------


// ---------------------------- My Account Page ----------------------------

// Select the DOM elements using querySelector and store them in variables
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Check if the registerLink element exists
if (registerLink) {
   // Add a click event listener to the registerLink element
   registerLink.addEventListener('click', () => {
      // When registerLink is clicked, add the 'active' class to the wrapper element
      wrapper.classList.add('active');
   });
}

// Check if the loginLink element exists
if (loginLink) {
   // Add a click event listener to the loginLink element
   loginLink.addEventListener('click', () => {
      // When loginLink is clicked, remove the 'active' class from the wrapper element
      wrapper.classList.remove('active');
   });
}


// ---------------------------- My Account Page End ----------------------------



// ----------------------------------- Cart -----------------------------------

// Select the DOM elements using querySelector and store them in variables
let cartIcon = document.querySelector("#cart-bag");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Check if the cartIcon element exists
if (cartIcon) {
   // Add a click event listener to the cartIcon element
   cartIcon.addEventListener("click", () => {
      // When cartIcon is clicked, add the 'active' class to the cart element
      cart.classList.add("active");
   });
}

// Check if the closeCart element exists
if (closeCart) {
   // Add a click event listener to the closeCart element
   closeCart.addEventListener("click", () => {
      // When closeCart is clicked, remove the 'active' class from the cart element
      cart.classList.remove("active");
   });
}

// Check the document's ready state
if (document.readyState == "loading") {
   // If the document is still loading, add an event listener for the 'DOMContentLoaded' event
   document.addEventListener("DOMContentLoaded", ready);
}
else {
   // If the document has already loaded, call the 'ready' function immediately
   ready();
}

// Function to be executed when the document is fully loaded
function ready() {
   // This function can contain additional code to be executed when the document is fully loaded

   // Select all elements with the class "cart-remove" and store them in removeCartButtons
   var removeCartButtons = document.getElementsByClassName("cart-remove");
   console.log(removeCartButtons);

   // Loop through each "cart-remove" button and add a click event listener to call removeCartItem
   for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
   }

   // Select all elements with the class "cart-quantity" and store them in quantityInputs
   var quantityInputs = document.getElementsByClassName("cart-quantity");

   // Loop through each "cart-quantity" input and add a change event listener to call quantityChanged
   for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
   }

   // Select all elements with the class "add-cart" and store them in addCart
   var addCart = document.getElementsByClassName("add-cart");

   // Loop through each "add-cart" button and add a click event listener to call addCartClicked
   for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
   }

   // Check if the cartIcon variable exists
   if (cartIcon) {
      // Add a click event listener to the first element with the class "btn-buy" to call buyButtonClicked
      document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
   };
}

// Function called when the "Buy" button is clicked
function buyButtonClicked() {
   // Remove all cart items by removing all child nodes from the cartContent element
   var cartContent = document.getElementsByClassName("cart-content")[0];
   
   // Continue removing child nodes while there are still child nodes present
   while (cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
   }

   // After removing cart items, update the total amount
   updatetotal();
}


// Function to remove a cart item and update the total
function removeCartItem(event) {
   // Get the button that triggered the event (the trash icon)
   var buttonClicked = event.target;

   // Remove the parent element of the button, which is the cart box
   buttonClicked.parentElement.remove();

   // Update the total price and total items in the shopping cart
   updatetotal();
}


// Function called when the quantity of a cart item is changed
function quantityChanged(event) {
   // Get the input element triggering the event
   var input = event.target;

   // Check if the input value is not a number or is less than or equal to 0
   if (isNaN(input.value) || input.value <= 0) {
      // If not, set the input value to 1
      input.value = 1;
   }

   // After validating and updating the input value, call the updatetotal function to recalculate the total cost
   updatetotal();
}


// function to handle click on Add to Cart button
function addCartClicked(event) {
   // get the clicked button
   var button = event.target;
   
   // get the parent element (shopProducts) of the clicked button
   var shopProducts = button.parentElement;
   
   // get the title, price, and image source of the product
   var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
   var price = shopProducts.getElementsByClassName("price")[0].innerText;
   var productImg = shopProducts.getElementsByClassName("product-image")[0].src;
   
   // add the product to the cart
   addProductToCart(title, price, productImg);
   
   // update the total amount of items in the cart
   updatetotal();
}

// Function to add a product to the shopping cart
function addProductToCart(title, price, productImg) {
   // Create a new cart box element
   var cartShopBox = document.createElement("div");
   cartShopBox.classList.add("cart-box");
   
   // Get the cart content container
   var cartItems = document.getElementsByClassName("cart-content")[0];

   // Check if the product is already in the cart
   var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
   for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText == title) {
         // Display an alert if the product is already in the cart
         alert("You have already add this item to cart");
         return;
      }
   }

   // HTML content for the cart box
   var cartBoxContent = `
      <img src="${productImg}" alt="" class="cart-img">
      <div class="detail-box">
         <div class="cart-product-title">${title}</div>
         <div class="cart-price">${price}</div>
         <input type="number" value="1" class="cart-quantity">
      </div>
      <i class="bx bxs-trash cart-remove"></i> `;
   // Set the HTML content of the cart box
   cartShopBox.innerHTML = cartBoxContent;
   // Append the cart box to the cart content container
   cartItems.append(cartShopBox);

   // Add event listeners for remove and quantity change
   cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
   cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}




// Function to update the total price and total items in the shopping cart
function updatetotal() {
   // Get the container of the cart content
   var cartContent = document.getElementsByClassName("cart-content")[0];

   // Get all the cart boxes within the cart content
   var cartBoxes = cartContent.getElementsByClassName("cart-box");

   // Initialize total price and total items variables
   var total = 0;
   var totalItems = 0;

   // Loop through each cart box to calculate the total price and total items
   for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];

      // Get the price and quantity elements within each cart box
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

      // Extract the price and quantity values, and calculate the subtotal for each item
      var price = parseFloat(priceElement.innerText.replace("LE", ""));
      var quantity = quantityElement.value;
      total = total + (price * quantity);

      // Update the total items count
      totalItems = totalItems + parseInt(quantity);
   }

   // Round the total to two decimal places
   total = Math.round(total * 100) / 100;

   // Update the total price and total items display in the HTML
   document.getElementsByClassName("total-price")[0].innerText = total + " LE";
   document.getElementById("total-items-display").innerText = "" + totalItems;
}

// ----------------------------------- Cart End -----------------------------------

// ----------------------------------- My Cart Page -----------------------------------
function removeMyCartItem(element) {
   // Get the closest <tr> parent and remove it
   var row = element.closest('tr');
   row.remove();

   // Recalculate the total
   calculateTotal();
}

function calculateTotal() {
   var total = 0;
   var table = document.getElementById('cartTable');
   var rows = table.getElementsByTagName('tr');

   for (var i = 1; i < rows.length - 1; i++) { // Exclude header and total row
       var quantity = parseFloat(rows[i].querySelector('.cart-quantity').value);
       var price = parseFloat(rows[i].querySelector('.col-md-2').textContent);

       total += quantity * price;
   }

   // Update the total in the last row
   var totalRow = rows[rows.length - 1];
   totalRow.querySelector('span').textContent = Math.floor (total) + ' LE';
}

// Attach event listener to all quantity inputs
var quantityInputs = document.querySelectorAll('.cart-quantity');
quantityInputs.forEach(function (input) {
   input.addEventListener('input', function () {
       calculateTotal();
   });
});
// ----------------------------------- My Cart Page End -----------------------------------

// ------------------------ CheckOut Form Validation ------------------------

//JavaScript for disabling Checkout form submissions if there are invalid field
// Immediately-invoked function expression (IIFE) to create a local scope
(function () {
   'use strict'; // Enable strict mode to catch common programming errors

   // Fetch all the forms with the class 'needs-validation'
   var forms = document.querySelectorAll('.needs-validation');

   // Loop over each form and prevent submission if there are invalid fields
   Array.prototype.slice.call(forms)
     .forEach(function (form) {
       // Add a 'submit' event listener to each form
       form.addEventListener('submit', function (event) {
         // Check if the form is not valid
         if (!form.checkValidity()) {
           // Prevent the form submission
           event.preventDefault();
           // Stop the event from propagating to parent elements
           event.stopPropagation();
         }

         // Add the 'was-validated' class to the form to apply custom Bootstrap validation styles
         form.classList.add('was-validated');
       }, false);
     });
})();

// ------------------------ CheckOut Form Validation End ------------------------
