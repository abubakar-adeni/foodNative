<br />
<p align="center">
  <div align="center">
    <img src="./document/logo-recipe.png" alt="foodrecipes">
  </div>
  <h3 align="center">Food Recipes (Food App)</h3>
  <p align="center">
    <a href="https://github.com/abubakar-adeni/blanja"><strong>Explore the docs »</strong></a>
  </p>
</p>

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Food Recipe is a responsive web-based & mobile application that provides various cooking recipes uploaded by users.

## Built With

These are the libraries and service used for building this backend API

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [blanja-app-be](https://github.com/abubakar-adeni/blanja/blob/main/README.md) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/abubakar-adeni/foodNative.git
```

2. Change directory to foodNative

```sh
cd foodNative
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env.local` file in the root directory, example env are provided in [.env.local.example](./.env.local.example)

```env
NEXT_PUBLIC_HOST=[ Backend URL ]
```

5. Run this command to run the server in development environment

```sh
npm run start
```

- Run this command to build this website into production ready

```sh
npm run build
```

# Screenshots

<table>
 <tr>
    <td><img width="350px" src="./document/login.png" border="0" alt="Login" /></td>
    <td> <img width="350px" src="./document/register.png" border="0"  alt="Register" /></td>
  </tr>
  <tr>
    <td>Login Page</td>
    <td>Register Page</td>
  </tr>
  <tr>
    <td><img width="350px" src="./document/profile.png" border="0" alt="Profile" /> </td>
    <td><img width="350px" src="./document/notif.png" border="0" alt="Notification Success" /> </td>
  </tr>
   <tr>
    <td>Edit Profile Page</td>
    <td>Notification Page</td>
  </tr>
  <tr>
    <td><img width="350px" src="./document/search.png" border="0" alt="Search" /></td>
    <td><img width="350px" src="./document/splash_screen.png" border="0" alt="Splash Screen" /> </td>
  </tr>
   <tr>
    <td>Search Page</td>
    <td>Splash Screen Page</td>
      <tr>
    <td><img width="350px" src="./document/upload.png" border="0" alt="Upload Recipe" /></td>
    <td><img width="350px" src="./document/listdate.png" border="0" alt="Edit Recipe" /> </td>
  </tr>
   <tr>
    <td>Upload Recipe Page</td>
    <td>Edit Recipe Page</td>
</table>

# Related Project

:rocket: [`Frontend Recipes App`](https://github.com/abubakar-adeni/foodNative)

:rocket: [`Backend Recipes App`](https://github.com/abubakar-adeni/food-recipe-be)

:rocket: [`Release APK`](https://github.com/abubakar-adeni/foodNative/tree/main/release)
