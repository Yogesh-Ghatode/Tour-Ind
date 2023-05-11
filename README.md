# Tour-Ind

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A tourism website showcasing popular destinations and travel information.

## Description

The Tourism Website is a web application designed to provide users with information about various travel destinations. It offers a user-friendly interface where users can browse destinations, view attractions, find accommodations, and plan their trips. The website aims to inspire and assist travelers in exploring new places and creating memorable experiences. It also showcasing the undiscoverable places.


## Features

- Browse and search for tourism destinations
- View detailed information about each destination, including attractions, accommodations, and activities
- Leave reviews and ratings for destinations
- Interactive maps to showcase the location of destinations and attractions
- Travel blog with articles, tips, and personal experiences
- User registration and authentication for personalized experiences
- User can make thier own tourism places

## Technologies Used

- Front-end: HTML, CSS, JavaScript, Ejs
- Back-end: Node.js, Express.js
- Database: MongoDB
- Authentication: Passport
- Maps: Mapbox 
- Deployment: Heroku

## Installation

1. Clone the repository:
  `shell
  git clone https://github.com/your-username/Tour-Ind.git

2. Navigate to the project directory:
  `Git-Base
  
3. Copy code
  `cd Tour-Ind
  
4. Install the dependencies:
   `npm install
   
5. Set up the required environment variables :

   - `CLOUDINARY_CLOUD_NAME=Your_Cloudinary_userName`
   
   - `CLOUDINARY_KEY=Your_cloudinary_key`
   
   - `CLOUDINARY_SECRET=Your_cloudinary_secret`
   
   - `MAPBOX_TOKEN=Your_mapbox_token`
   
   - `SECRET=Your_secrete_value`
   

## Project Structure

  - client/: Contains the front-end code, including React components, stylesheets, and static assets.
  
  - server/: Includes the back-end code, including server configuration, routing, and API endpoints.
  
  - models/: Defines the MongoDB models for storing destination information, user data, reviews, etc.
  
  - controllers/: Implements the logic for handling requests and generating responses.
 
  - views/: Contains the server-side views if server-side rendering is used. 
  
  - public/: Static assets such as images, icons, and fonts.
  
  - scripts/: Scripts for database seeding, deployment, or other utility tasks.

## Configuration

The application can be configured using environment variables. Create a .env file in the project root directory and provide the necessary configuration values. Some possible configuration variables include:

- PORT: Port number on which the server will listen (default is 3000).

- MONGODB_URI: MongoDB connection URI.

- MAPBOX_API_KEY: API key for Mapbox services.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License.
