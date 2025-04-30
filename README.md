# My Portfolio Website

Welcome to the **Portfolio Website** built with **Next.js**, **React**, **Redux**, **MUI**, **Framer Motion**, and **TypeScript**. This is a modern, feature-rich portfolio that showcases my skills, projects, and professional journey. The website is designed with smooth animations, interactive components, and a user-friendly experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Next.js**: Framework for React that provides SSR, static generation, and API routes.
- **React**: JavaScript library for building interactive user interfaces.
- **Redux Toolkit**: State management for global state handling, such as theme switching and font size.
- **MUI (Material-UI)**: React component library for Material Design styles.
- **Framer Motion**: Animation library for React to add dynamic motion and transitions.
- **TypeScript**: Superset of JavaScript that enables type safety in the application.
- **Node.js**: Backend server for handling API requests (e.g., contact form submissions).
- **Resend**: Service for sending emails from the contact form.

## Features

- **Hero Section**: An animated introduction with a typing effect.
- **Skills Section**: Categorized skills with logos and smooth animation when visible.
- **Featured Projects**: Showcases your best projects in animated cards with expandable details.
- **Download Resume**: A button to download the resume as a PDF.
- **Contact Form**: Submitting the form sends an email using **Resend API**.
- **Dark Mode**: Toggle between light and dark themes using Redux state.
- **Responsive Design**: Mobile-first design that adapts to different screen sizes.

## Setup

### Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   If using npm:

   ```bash
   npm install
   ```

   If using Yarn:

   ```bash
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add the necessary environment variables. For example:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   RESEND_API_KEY=your-resend-api-key-here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   Now, open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Running the Application Locally

- Start the app with `npm run dev` (or `yarn dev`) to run the app locally in development mode.
- The app will automatically reload if you make changes to the code.
- For API routes, the development server will handle them locally, and you can test your contact form or other endpoints.

### Building the Application

To build the app for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

Then start the production server:

```bash
npm start
```

or

```bash
yarn start
```

### Testing

If you'd like to add tests, you can integrate **Jest** or **React Testing Library**. This project does not have tests set up by default, but they can be added easily.

## Folder Structure

Here’s a quick overview of the folder structure:

```
/src
  ├── /components/          # Reusable components (e.g., ProjectCards, SkillsSection)
  ├── /pages/               # Pages in Next.js (e.g., index.tsx, about.tsx)
  ├── /styles/              # Custom styles (e.g., global styles, theme)
  ├── /data                 # Static data (e.g., skills, project info)
  ├── /api                  # API routes (e.g., contact form submission)
  ├── /store                # Redux store and slices (e.g., theme, font size)
  ├── /types                # TypeScript types
  ├── /hooks                # Custom React hooks
  └── /utils                # Utility functions (e.g., SEOHead, helpers)
/next.config.js             # Next.js configuration
/package.json               # Project dependencies and scripts
/tsconfig.json              # TypeScript configuration
/.env.local                # Environment variables
```

## Contributing

If you’d like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request with your changes. Make sure to follow the coding standards and include tests where necessary.

## License

This project is licensed under the MIT License.
