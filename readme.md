Itunes App

Allowing the user to search through the Itunes Database to return song names.

## Table Of Contents

```bash
- [How to Use the App](#how-to-use-the-app)
- [Installation](#installation)
- [Testing](#testing)
- [Security Measures](#security-measures)
- [Deployed App](#deployed-app)

```

## Run Locally

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Usage/Examples

```bash

Your server should now be running on http://localhost:3001

Your client should now be running on http://localhost:3000
```

##Overview

## Security Measures

```bash

To ensure the security of this app, we have implemented various measures, including the use of the Helmet middleware for Express. Helmet helps secure your app by setting various HTTP headers to prevent common vulnerabilities.
```

## API Key Handling

```bash
The app employs best practices for handling API keys securely. These measures include:
```

## Environment Variables

```bash
API keys are stored as environment variables to keep them separate from the codebase and reduce the risk of exposure.
Restricted Access: Access to the API keys is restricted, and only necessary personnel have the required permissions.
Encryption: Any sensitive information, such as API keys, is encrypted to protect against unauthorized access.
```

## Deployed App

```bash
For a live demonstration of the app, please visit the deployed app.
https://itunes-client-9389433d4071.herokuapp.com/
```
