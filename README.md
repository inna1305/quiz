# Quiz

This project is a small Single-Page Application (SPA) that implements a user data collection form. The form allows users to input their personal information, and it utilizes webpack, Sass, and native JavaScript. The application also utilizes the browser's Local Storage to save the form's state and the entered data, ensuring that the values persist even if the user navigates away from the page or refreshes the browser.

## Features

- Interactive user data collection form.
- Form pages can be navigated forward and backward.
- Entered values are automatically saved and restored using Local Storage.

## Technologies Used

The project is built using the following technologies:

- Webpack: A module bundler used to bundle all the JavaScript modules, stylesheets, and assets.
- Sass: A CSS preprocessor used to write modular and maintainable styles.
- Native JavaScript: The core programming language used to implement the form's functionality.
- Local Storage: A web browser API used to store and retrieve data locally on the user's device.

## Deploy
https://inna1305.github.io/quiz/

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/inna1305/quiz
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz
   ```

3. Install the dependencies using a package manager like npm or yarn:

   ```bash
   npm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Open the `index.html` file in your preferred web browser.

## Usage

Once the project is set up and running, you can use the user data collection form as follows:

1. Fill in the required fields on each page of the form.
2. Use the navigation buttons to move forward or backward between form pages.
3. The entered values will be automatically saved and restored when you revisit the form.
4. If you navigate away from the form or refresh the page, the form's state and the entered data will persist.
