# Strati-Fi Client Manager

This project is a single-page application that allows users to authenticate and manage their clients.

## Technologies Used

- React with TypeScript
- React Router for navigation
- React Query
- Jest

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1. Clone the repository:
```
git clone https://github.com/jmaxshadow2/stratifi.git
```

2. Navigate into the project directory:
```
cd stratifi
```


### Running the Application

1. To start the application, run:
```
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

### Running Tests

To ensure the quality and correctness of the application, it includes a suite of automated tests using Jest.

To run the tests, execute the following command in your terminal:
```
npm test
```
This will launch Jest in interactive watch mode, automatically re-running tests as you make changes to the code.

To see a coverage report, you can run:
```
npm test -- --coverage
```
This command will provide a detailed coverage report, indicating which parts of your codebase are covered by tests.

## Available Routes

- `/login` - Login page
- `/clients` - Displays a list of clients
- `/clients/:id` - Displays details for a selected client

## Mock Data

The application uses mock data for clients and accounts, simulating a backend API.

Feel free to explore the `src/services/ApiService.ts` file to see how data is mocked.

