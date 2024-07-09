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
realtime-tracker/
│
├── public/                # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/                 # EJS templates
│   ├── index.ejs
│   └── layout.ejs
│
├── routes/                # Express routes
│   └── index.js
│
├── .gitignore             # Git ignore file
├── package.json           # NPM package file
├── README.md              # Project documentation
└── server.js              # Main server file
