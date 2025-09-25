# Deployment Guide

## Local Testing

The application is currently running locally on port 3001. You can access it at:
http://localhost:3001

## Free Hosting Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag and drop the `build` folder to deploy
4. Your app will be live at a custom netlify URL

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up for a free account
3. Connect your GitHub repository or upload the `build` folder
4. Deploy with one click

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to repository settings
3. Enable GitHub Pages
4. Select source as GitHub Actions
5. Create a workflow file for deployment

### Option 4: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Select the `build` folder as public directory
4. Run `firebase deploy`

## Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
serve -s build -l 3001
```

## Responsive Testing

To test responsiveness:
1. Open the application in your browser
2. Use browser developer tools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1200px, 1440px
5. Or manually resize the browser window

## Features Demonstrated

- ✅ Responsive design with Bootstrap v5
- ✅ Mobile-first approach
- ✅ Smooth transitions between breakpoints
- ✅ Search functionality
- ✅ Filter options
- ✅ Interactive group cards
- ✅ Statistics dashboard
- ✅ Modern UI with hover effects
