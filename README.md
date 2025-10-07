# 🧳 TripBook.com

**TripBook.com** is a modern travel booking platform built using **Next.js** that allows users to search and book hotels, flights, car rentals, and attractions around the world.  
It provides a seamless booking experience with an intuitive interface, responsive design, and dynamic property listing management.

---

## 🚀 Features

- 🏠 **Property Search & Listing** – Search for stays, view detailed listings, and filter results based on preferences.
- ✈️ **Flights, Hotels & Rentals** – Integrated sections for booking flights, hotels, and car rentals.
- 💼 **User Authentication** – Sign up, sign in, and secure session management using context-based authentication.
- 🧭 **Dynamic Routing** – Uses Next.js dynamic routes (`[id].js`) for property and user details.
- 📱 **Responsive UI** – Fully responsive interface built with modern CSS modules and React components.
- 🧩 **Component Reusability** – Reusable UI components such as Navbar, SearchBox, Filters, and Footer.
- 🌍 **API Integration Ready** – Easily extendable backend structure under `/api` for integrating external or internal APIs.

---

## 🏗️ Project Structure
TripBook.com/
│
├── components/
│ ├── backgroundimg/
│ │ ├── bgComponent.js
│ │ └── bgComponent.module.css
│ ├── edge/
│ │ ├── concreteTravellers.js
│ │ ├── slideShow.module.css
│ │ └── nextTrip.js
│ ├── navbarSection/
│ │ ├── drawerNav.js
│ │ ├── navbar.js
│ │ └── navbar.module.css
│ ├── pre_loader/
│ │ ├── loadingScreen.js
│ │ └── loadingText.module.css
│ └── searchBox/
│ ├── SearchBox.js
│ ├── DatePicker.js
│ ├── Filters.js
│ ├── Footer.jsx
│ ├── SearchCard.js
│ └── searchBox.module.css
│
├── context/
│ ├── AuthContextProvider.js
│ ├── GuestContext.js
│ └── tokenVerify.js
│
├── models/
│ ├── property.model.js
│ └── user.model.js
│
├── pages/
│ ├── api/
│ │ └── property/
│ │ └── [id].js
│ ├── property/
│ │ ├── index.js
│ │ ├── [id]/
│ │ │ ├── index.js
│ │ │ └── info.js
│ │ └── addproperty.js
│ ├── user/
│ │ ├── signup/
│ │ │ └── index.js
│ │ ├── signin.js
│ │ ├── dealer.js
│ │ └── refresh.js
│ ├── flights.js
│ ├── carRental.js
│ ├── listProperty.js
│ └── index.js
│
├── public/
│ ├── appLogo.png
│ ├── favicon.ico
│ ├── ind.jpeg
│ ├── usa.jpeg
│ └── vercel.svg
│
├── styles/
│ ├── globals.css
│ ├── next.config.js
│ └── other-styles.css
│
└── package.json
