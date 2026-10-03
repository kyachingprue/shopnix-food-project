# 🍽️ Shopnix — Food Ordering Website

<p align="center">
  <strong>Discover Delicious Food. Experience Exceptional Dining.</strong>
</p>

<p align="center">
  A modern, responsive food ordering website designed to make discovering dishes, exploring categories, and managing your food cart simple and enjoyable.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-Development-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## 🌟 About the Project

**Shopnix** is a modern food ordering and restaurant website built to provide a smooth and visually appealing food browsing experience.

Users can explore delicious dishes, discover food categories, view detailed food information, add their favorite items to the shopping cart, adjust quantities, and review their order before checkout.

The project focuses on clean UI design, responsive layouts, reusable React components, interactive animations, and a convenient shopping experience.

Whether customers are looking for a quick bite, a family meal, or a special dining experience, Shopnix provides a welcoming place to discover their next favorite dish.

## ✨ Key Features

### 🍕 Food Discovery

* Browse a variety of delicious food items.
* Explore food through dedicated category cards.
* Filter dishes by category.
* Search for dishes by name.
* View individual food details.
* Discover featured and popular dishes.

### 🛒 Smart Shopping Cart

* Add food items to the cart.
* Increase or decrease item quantities.
* Remove individual products.
* Clear the entire cart.
* Automatically calculate the subtotal.
* View an order summary before checkout.

### 💳 Checkout Experience

* Responsive checkout interface.
* Delivery and restaurant pickup selection.
* Customer information form.
* Demo promotional coupon functionality.
* Estimated tax and delivery fee calculation.
* Payment method selection UI.
* Checkout layout prepared for future payment gateway integration.

**Note:** Payment processing, backend order creation, and real reservation confirmation require additional integration.

### 🍽️ Restaurant Pages

* Beautiful homepage and food discovery sections.
* Menu page with category filtering.
* Individual food details page.
* Food category showcase.
* About page introducing the restaurant.
* Contact page with restaurant information.
* Table reservation request interface.

### 🎨 Modern User Interface

* Elegant typography and premium food-inspired colors.
* Responsive mobile, tablet, and desktop layouts.
* Smooth animations and hover interactions.
* Beautiful food imagery and product cards.
* Reusable React components.
* Interactive buttons and transitions.
* Clean layouts with consistent spacing.

### ⚡ Performance and Usability

* Component-based architecture.
* Client-side routing.
* Redux Toolkit for cart state management.
* Animated interface transitions.
* Semantic HTML and accessible button labels.
* Page titles and metadata using React Helmet Async.

---

## 🧰 Technology Stack

| Technology         | Purpose                              |
| ------------------ | ------------------------------------ |
| React.js           | Building reusable UI components      |
| Vite               | Development server and build tooling |
| React Router       | Client-side navigation               |
| Redux Toolkit      | Shopping cart state management       |
| React Redux        | Connecting React components to Redux |
| Tailwind CSS       | Responsive styling and layout        |
| Motion             | UI animations and transitions        |
| Lucide React       | Clean and modern icons               |
| React Helmet Async | Page titles and metadata             |
| JavaScript (ES6+)  | Application logic                    |
| HTML5              | Semantic page structure              |

> The exact versions depend on the packages installed in your project.

---

## 📸 Website Pages

### 1. Home Page

A welcoming landing page featuring food highlights, restaurant branding, and calls to explore the menu.

### 2. Menu Page

A searchable and filterable collection of dishes organized into food categories.

### 3. Food Details Page

A dedicated page displaying information about a selected dish, including its image, description, price, and add-to-cart action.

### 4. Food Categories

An interactive category section that helps users navigate directly to dishes in their chosen category.

### 5. About Page

An attractive restaurant introduction with editorial typography, brand storytelling, and food-focused visual sections.

### 6. Contact & Reservation Page

Contact information, opening hours, and a table reservation request form.

### 7. Shopping Cart

A dedicated cart interface for reviewing items, changing quantities, removing products, and calculating the order total.

### 8. Checkout

A checkout interface featuring customer details, delivery preferences, a promotional code field, an order summary, and payment method selection.

---

## 📁 Project Structure

The following is an example of the project's organization. Adjust file names to match your actual application.

```text
shopnix/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Btn.jsx
│   │   ├── Title.jsx
│   │   ├── Stars.jsx
│   │   ├── DishCard.jsx
│   │   ├── FoodCard.jsx
│   │   ├── FoodCardDetails.jsx
│   │   ├── FoodCategory.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── dishes.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Cart.jsx
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to run Shopnix locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm (included with Node.js)
* A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Navigate to the Project

```bash
cd shopnix
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

---

## 🛍️ Shopping Cart Workflow

The cart follows a straightforward shopping experience:

1. Browse the available food items.
2. Open a dish to view its details.
3. Add selected items to the cart.
4. Adjust quantities or remove items.
5. Select delivery or pickup.
6. Review the subtotal, discount, estimated tax, and delivery fee.
7. Enter customer information on the checkout interface.
8. Choose a displayed payment method.

The current checkout interface is a frontend demonstration. A production version should create orders through a backend and verify payment status through a payment provider.

---

## 💰 Future Payment Integration

Shopnix is designed with room for a future secure payment workflow.

Possible enhancements include:

* Stripe integration where supported.
* SSLCOMMERZ integration for supported Bangladesh-based businesses.
* Cash on delivery.
* Server-side order creation.
* Payment status verification.
* Order confirmation emails.
* Order history and tracking.
* Server-side coupon validation.
* Customer authentication and saved addresses.
* An admin dashboard for managing dishes and orders.

**Security note:** Never store card numbers or sensitive payment details in Redux, browser storage, or your own database. Use the payment provider's secure checkout flow and verify transactions on the server.

---

## 🎯 Project Goals

The main goals of Shopnix are to:

* Deliver a premium food ordering interface.
* Make food discovery intuitive and enjoyable.
* Maintain reusable and organized React components.
* Provide a responsive experience across devices.
* Simplify shopping cart management.
* Prepare the application for backend and payment integration.
* Demonstrate practical frontend development skills.

---

## 🔮 Future Improvements

* [ ] Connect a production backend API.
* [ ] Add user registration and authentication.
* [ ] Integrate a real payment gateway.
* [ ] Persist shopping cart data across page reloads.
* [ ] Add order confirmation and tracking.
* [ ] Add customer ratings and reviews.
* [ ] Add favorites and saved dishes.
* [ ] Build an admin dashboard.
* [ ] Add real-time order status updates.
* [ ] Improve accessibility and automated testing.
* [ ] Optimize images and page performance.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a pull request describing your improvements.

Please ensure that your changes are tested and follow the project's existing coding conventions.

---

## 📄 License

This project is available for learning and development purposes. Add a `LICENSE` file to define the permissions and conditions for using or distributing the project.

---

## 👨‍💻 Developer

**Kyachingprue Marma**

Full Stack Web Developer

Passionate about building modern, responsive, and interactive web applications with React.js, JavaScript, and contemporary web technologies.

* GitHub: [Your GitHub Profile](https://github.com/)
* Portfolio: [Your Portfolio Website](https://example.com/)
* Email: [your-email@example.com](mailto:your-email@example.com)

Replace the example profile, portfolio, and email links with your actual details.

---

<p align="center">
  <strong>Made with ❤️ and a passion for great food.</strong>
</p>

<p align="center">
  🍽️ Shopnix — Discover. Order. Enjoy.
</p>
