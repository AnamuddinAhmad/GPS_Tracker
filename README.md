# Real-Time Tracker

This is a real-time tracker application built with Node.js, Express, Socket.IO, EJS for templating, and Leaflet for map visualization. This project allows users to track locations in real-time on a map.

## Features

- Real-time location tracking
- Dynamic map visualization using Leaflet
- WebSockets for real-time communication
- Templating with EJS

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v12 or later)
- npm (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anamuddinahmad/realtime-tracker.git
   cd realtime-tracker

## Folder Herarchy
**realtime-tracker** <br>
│
├── public             
│   ├── css<br>
│   ├── js<br>
│   └── images<br>
│<br>
├── views<br>
│   ├── index.ejs<br>
│   └── layout.ejs<br>
│
├── routes<br>
│   └── index.js<br>
│
├── .gitignore            <br>
├── package.json          <br>
├── README.md              <br>
└── app.js              <br>


2. **Navigate into the cloned project directory:** 
- Run the following command to install all necessary dependencies:
  ```bash
  cd realtime-tracker
  
3. **Install dependencies:** 
- Run the following command to install all necessary dependencies:
  ```bash
  npm install
  
4. **Set up environment variables:** 
- Create a .env file in the root directory of the project and add any necessary environment variables. For example:
  ```bash
  PORT=3000
  
5. **Start the server:** 
- Run the following command to start the server:
  ```bash
  npm start
  
6. **Open the application:** 
- Open your browser and navigate to:
  ```bash
  [npm install](http://localhost:3000)
  
**2 Install dependencies:** 
- Run the following command to install all necessary dependencies:
  ```bash
  npm install

## Dependencies
- The project uses the following main dependencies:
- express: Fast, unopinionated, minimalist web framework for Node.js.
- socket.io: Enables real-time, bidirectional, and event-based communication.
- ejs: Embedded JavaScript templating (if needed).
- leaflet: An open-source JavaScript library for mobile-friendly interactive maps.

## Usage
**Real-time location tracking:**
- Open the application in your browser.
- The map will update in real-time as locations are tracked.

**WebSocket communication:**
- The application uses Socket.IO to handle real-time communication between the server and clients.
 
## Configuration
  - You can configure the application by modifying the server.js and route files according to your needs. The default port is 3000, but you can change this in the .env file if needed.
 
## License
  - This project is licensed under the MIT License - see the LICENSE file for details.
    
## Acknowledgements
- Leaflet for the amazing mapping library.
- Socket.IO for the real-time communication.
- EJS for the simple yet powerful templating engine.
- Express for the fast and flexible Node.js web framework.


### Explanation

- **Project Overview:** The README provides a brief overview of the project and its features.
- **Prerequisites:** Lists the required software to run the project.
- **Installation:** Step-by-step instructions to set up the project.
- **Dependencies:** Lists the main dependencies used in the project.
- **Project Structure:** Provides a visual representation of the project's file structure.
- **Usage:** Explains how to use the application.
- **Configuration:** Details on how to configure the application.
- **License and Acknowledgements:** Information about the project's license and acknowledgements for used libraries and frameworks.

This `README.md` provides a clear and comprehensive guide to setting up, running, and understanding your real-time tracker project.
