# ESKIL - FURNITURE STORE || FULL STACK ECCOMERCE APPLICATION
## [Live Demo](https://eskil-furniture-store.vercel.app/)

## A fully functional Eccomerce Application built with React and Express.

### Overview
Eskil is an eccomerce furniture with features of adding and removing products to the cart, user register and log in, as well as a checkout feature. 

When opening the page, the user is greeted with a responsive user interface that includes the featured products section and categories section. 

![](https://media.giphy.com/media/19ioqOCt6EK0ou3SeY/giphy.gif)

On the Featured Products section, clicking on the product will redirect the users to the product details page. Users can also click the add to cart button to add the product to the cart. When the add to cart button is clicked and the user is not logged in, the user will be redirected to the log in section instead.

![](https://media.giphy.com/media/kXHM4nRHj9am9MXDgt/giphy.gif)

On the Categories section, clicking on a category will redirect the users to the category page, where all the products of the category will be shown. Users can the click on the products shown to redirect to the products page.

![](https://media.giphy.com/media/PZ9OROT14NCW4Bp4v1/giphy.gif)

On the Products page, the users will be able to see the details about the products. They will be able to add the product to the cart with a custom quantity by clicking the quantity button and add to cart button. On the bottom page, users are recommended with related products.

![](https://media.giphy.com/media/0DGjCkVbkXlMauf4kB/giphy.gif)

On the Account page, users can choose to log in to their existing accounts or create one. Creating an account will include a validation on users input. When the validations failed, users will be told what inputs are wrong and what they should change. Validation includes: 

* no empty fields
* valid and unique email
* a strong password (atlest 8 characters long, 1 symbol and 1 uppercase character)

When the validation is successful, users will be logged in to the page immediately and will be redirected to the shopping cart page.

![](https://media.giphy.com/media/0wCLuhIbO8zNzGzpGa/giphy.gif)

When a user is logged in, users can add products to their shopping cart and be able to checkout their products. After checking out, users will be redirected to the home page, and will be able to see their order history if they have one.

![](https://media.giphy.com/media/VEZDjj7DPcN5t31oTf/giphy.gif)

### Functionalities
* Authentication using email and password
* Checkout feature using stripe integration
* Add and remove products on user's cart
* See order history upon succesful checkout
* Animations using framer motion for better user experience

### Technologies
This project is created with:
* React
* SASS
* Express
* Node
* MongoDB
* Mongoose
* React-Query
* Framer Motion
