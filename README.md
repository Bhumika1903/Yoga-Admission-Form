# Yoga Class Admission Form

Welcome to the Yoga Class Admission Form project! This is a simple web application where people can sign up for monthly yoga classes. The project consists of a user-friendly form (front-end) built with React and a server (back-end) developed with Node.js.

## Features

- **User Enrollment:** Individuals can enroll by providing their name, age, and selecting a preferred class time.
- **Basic Validation:** The form ensures participants are aged between 18 and 65.
- **Flexible Batches:** Users can choose different class times each month.
- **Payment Simulation:** The system simulates the payment process for the monthly fees.

## Project Structure

- `frontend/`: This folder holds the React front-end code.
- `backend/`: The Node.js back-end code is stored here.
- `er_diagram.png`: Check out this image for an overview of the database structure.

## How to Get Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/yoga-class-admission-form.git
   cd yoga-class-admission-form

2. **Install dependencies:**
   ```bash
   # Go to the frontend folder
   cd frontend
   npm install

   # Move to the backend folder
   cd ../backend
   npm install

## Entity-Relationship Diagram For YogaClasses
![E-R UCL](https://user-images.githubusercontent.com/41137189/142236305-6f978ae1-c0ca-49d4-8568-bcf8b1570de6.jpg)


## Usage

1. **Start the backend server:**
   ```bash
   # In the backend directory
   npm start

2. **Start the Frontend Development Server:**
   ```bash
   # In the frontend directory
   npm start

## Backend Configuration
- Modify backend settings in the `backend/config.js` file.
- Update database connection details, payment API information, or any other configuration as needed.

## Deployment
- Deploy the frontend on platforms like Netlify, Vercel, or GitHub Pages.
- For the backend, platforms like Heroku or others are suitable.

## Optional Features
Feel free to explore additional features like containerizing the application, implementing performance improvements, or designing a highly scalable architecture. Check the documentation for more details.

## Contributing
Contributions are welcome! Please follow the contribution guidelines.

## License
This project is licensed under the MIT License.
