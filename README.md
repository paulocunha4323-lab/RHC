# Jornal - RHC

## Project Structure

```plaintext
jornal-rhc/
├── src/                      # Source files
│   ├── components/          # React components
│   ├── pages/               # Application pages
│   ├── assets/              # Images, styles and other assets
│   └── utils/               # Utility functions
├── public/                   # Public files
│   ├── index.html           # Main HTML file
│   └── favicon.ico          # Favicon
├── README.md                # Project documentation
└── package.json             # Project metadata and dependencies
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/paulocunha4323-lab/RHC.git
   cd RHC
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
   Your application will be running at `http://localhost:3000`.

## Features

- Modern React components with hooks
- Responsive design for mobile and desktop
- Routing implemented with React Router
- Easy to customize theme and styles

## Deployment to GitHub Pages

1. **Install gh-pages package**:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Add homepage to package.json**:
   ```json
   "homepage": "https://<username>.github.io/RHC/"
   ```
3. **Update the scripts in package.json**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. **Deploy the application**:
   ```bash
   npm run deploy
   ```
   Your application will be live at the specified homepage URL.