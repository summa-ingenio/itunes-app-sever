# Itunes App

## Description

Allowing the user to search through the Itunes Database to return song names.

## Table of Contents

- [How to Use the App](#how-to-use-the-app)
- [Installation](#installation)
- [Testing](#testing)
- [Security Measures](#security-measures)
- [Deployed App](#deployed-app)

## How to Use the App

[Explanation of how users can interact with your app]

## Installation

To run this app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd [your-app-folder]
   ```

Install dependencies for the server:

````bash
Copy code
cd server
npm install
Install dependencies for the client:
```bash
Copy code
cd ../client
npm install
Start the server:
```bash
Copy code
cd ../server
npm start
Your server should now be running on http://localhost:3001.
Start the client:
```bash
Copy code
cd ../client
npm start
Your client should now be running on http://localhost:3000.
Testing

Backend (Jest for Express)
```bash
Copy code
cd server
npm test

Frontend (Jest for React)
```bash
Copy code
cd client
npm test
Security Measures

To ensure the security of this app, we have implemented various measures, including the use of the Helmet middleware for Express. Helmet helps secure your app by setting various HTTP headers to prevent common vulnerabilities.

API Key Handling
The app employs best practices for handling API keys securely. These measures include:

Environment Variables: API keys are stored as environment variables to keep them separate from the codebase and reduce the risk of exposure.
Restricted Access: Access to the API keys is restricted, and only necessary personnel have the required permissions.
Encryption: Any sensitive information, such as API keys, is encrypted to protect against unauthorized access.
Deployed App

For a live demonstration of the app, please visit the deployed app.
https://itunes-client-9389433d4071.herokuapp.com/
````
