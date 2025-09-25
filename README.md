# Responsive Groups App

A responsive ReactJS application built with Bootstrap v5 that displays groups in a mobile-friendly layout.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bootstrap v5**: Modern UI components and responsive grid system
- **Search Functionality**: Search through groups by title or description
- **Filter Options**: Filter groups by category
- **Statistics Dashboard**: Display total groups, members, and active groups
- **Interactive Cards**: Hover effects and action buttons for each group

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Technologies Used

- React 18
- Bootstrap 5.2.3
- CSS3 with custom responsive styles
- Font Awesome icons

## Components

- `Header`: Main page header with title and description
- `SearchSection`: Search input and filter buttons
- `StatsSection`: Statistics display
- `GroupsList`: Container for group cards
- `GroupCard`: Individual group display card

## Deployment

The app is ready for deployment to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
