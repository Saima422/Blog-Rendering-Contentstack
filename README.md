
# Blog Rendering App
Blog Rendering App makes API calls to server for Fetching all blogs and for Fetching a Single blog with specific ID.

## Introduction

A simple frontend for Blog Rendering Application created with React JS and integrated with a backend which is hosted on heroku. Built with an aim to learn and implement creation of a React Frontend with a given backend. Authentication Application supports functionalities of fetching all the blog data from server and displaying it on the UI in the form of tiles and fetching a single blog data with specific blog ID and displays the data on a different Route. The application makes API calls to the backend for the same. 

## Getting Started

These are instructions to set up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) (which comes with npm) installed on your computer.

### Installation

From your command line:

1. Clone the repo
   ```sh
   $ git clone https://github.com/Saima422/Blog-Rendering-React.git
   ```
2. Install the Dependencies
   ```sh
   $ npm install
   ```
3. To start the App, use the following command
    ```sh
    $ npm run start
    ```
4. The React Application is now Up and Running


## Folder Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── b-logo.ico
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── BlogContainer
    │   │   ├── BlogContainer.jsx
    │   │   └── BlogContainer.module.scss
    │   ├── BlogTitles
    │   │   ├── BlogTiles.jsx
    │   │   └── BlogTiles.module.scss
    │   ├── ErrModal
    │   │   ├── ErrModal.jsx
    │   │   └── ErrModal.module.scss
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.scss
    │   └── Navbar
    │       ├── blog-logo.png
    │       ├── Logo.png
    │       ├── Navbar.jsx
    │       └── Navbar.module.scss
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── Blogpage
    │   │   ├── Blogpage.jsx
    │   │   └── Blogpage.module.scss
    │   └── Homepage
    │       ├── Homepage.jsx
    │       └── Homepage.module.scss
    ├── reportWebVitals.js
    ├── routing
    │   └── AppRouter.js
    └── setupTests.js

```
## Application View

* `/` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/blog-react/home-route.png)

* `/:blogId` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/blog-react/id-route.png)


## Scope and Functionality

#### Features:
* Displays Error Modal when server offline
* Fetches All blogs from server upon load of Application
* Fetches a single Blog content from server when a "View Full Blog" button of the Blog is Clicked
* Navigation between Different Related Blogs through Links provided on the Blog

## Referred Resources
* [React](https://reactjs.org/docs/getting-started.html)
* [React Routing](https://reactrouter.com/web/guides/quick-start)

## Contact

* Author - Saima Sayed 
* [Connect on LinkedIn](https://www.linkedin.com/in/saima-sayed-6482481b9/)
* [Project Resources](https://github.com/Saima422/Blog-Rendering-React)
* [Netlify Live Link](https://wizardly-benz-3fa500.netlify.app/)
