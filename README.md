# role-dashboard-backend - Coding Exercise Submission

## Introduction

This repository contains my submission for the coding exercise as part of my application for a position at Siemens Energy Global GmbH & Co. The project is developed in TypeScript and includes several components essential for the functionality outlined in the exercise.

## Project Structure

The repository includes the following TypeScript files:

- `RoleRoutes.ts` - Handles routing related to roles.
- `RoleRoutes.test.ts` - Contains tests for the role routing functionality.
- `index.ts` - The main entry point of the application.
- `swaggerDef.ts` - Definitions for Swagger documentation.
- `RoleAndPermissionTypes.ts` - Defines types related to roles and permissions.
- `RoleService.test.ts` - Tests for role service functionality.
- `RoleService.ts` - Implements the service logic for role management.

## Installation Instructions

To install and run this project, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the necessary dependencies.

## Usage Instructions

To run the project, execute the following command in the project directory:
```npm start```

To run the tests, use:
```npm test```

## API Endpoints

This application includes the following API endpoints:

- `GET /permissions:` Retrieve a list of permissions.
- `GET /roles/permissions:` Retrieve permissions associated with roles.
- `POST /roles/{roleId}/permissions:` Assign permissions to a specific role.
