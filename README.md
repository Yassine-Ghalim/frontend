🛒 E-Commerce Web Application

A modern full-stack e-commerce web application built with Angular for the frontend and JSON Server as a mock REST API. This project demonstrates a clean and scalable frontend architecture while simulating a real-world backend environment, making it ideal for development, testing, and learning.

📖 Project Overview

The goal of this project is to build a responsive and user-friendly e-commerce application while following modern frontend development practices.

Although the backend is simulated using JSON Server, the application is designed as if it communicates with a real RESTful API. This separation between the frontend and backend layers makes the project easy to maintain, extend, and replace with a production backend such as Spring Boot or Node.js.

✨ Features
Browse available products
Product details page
Product search and filtering
Shopping cart management
Add and remove products from the cart
Update product quantities
Responsive user interface
REST API communication using Angular HttpClient
Modular and reusable Angular components
Error handling for API requests

🏗️ Architecture

The application follows a layered architecture.

                   +----------------------+
                   |     Angular UI       |
                   +----------+-----------+
                              |
                     Angular Services
                              |
                     HTTP Client (REST)
                              |
                  JSON Server (Mock API)
                              |
                         db.json

This architecture separates responsibilities into different layers:

Presentation Layer: Angular Components responsible for the user interface.
Business Layer: Angular Services containing the application logic.
Data Layer: JSON Server exposing REST endpoints from a local JSON database.

This design makes the frontend independent from the backend implementation.

⚙️ Technologies Used

Frontend ,
Angular ,
TypeScript ,
HTML5 ,
CSS3 ,
Bootstrap ,
RxJS ,
Backend (Mock) ,
JSON Server ,
REST API ,
Development Tools ,
Git ,
GitHub ,
npm ,
Visual Studio Code.

🔌 REST API Endpoints

The application consumes a mock REST API provided by JSON Server.

Method	Endpoint	Description

GET	  /products  	Retrieve all products.

GET  	/products/:id	  Retrieve product details

POST  	/cart  	Add product to cart

PUT	  /cart/:id	  Update cart item

DELETE	  /cart/:id	  Remove item from cart
