# Oli's Recipe Collection - Nuxt App

A modern, beautiful recipe collection website built with Nuxt 4 and Tailwind CSS.

## Features

- 🎨 Modern, gradient design with Tailwind CSS
- 📱 Fully responsive for mobile and desktop
- 🍔 9 delicious recipes including burgers, pancakes, chili, tacos, and more
- 🖼️ Photo galleries for each recipe
- ⚡ Fast page navigation with Nuxt routing
- 💅 Beautiful card-based layout with hover effects
- 🚀 Automatic deployment to GitHub Pages

## Recipes Included

1. **Oli's US Style Smashed Burger** - Proper U.S. style smashed burger
2. **Perfect US Style Pancakes** - Fluffy American pancakes
3. **Oli's Red Chili with Beans** - Spicy and hearty chili con carne
4. **Oli's German Street Tacos** - Authentic street-style tacos
5. **German Meat Balls (Buletten)** - Traditional German meatballs
6. **Lasagne** - Classic Italian lasagna
7. **Freshly Brewed U.S. Style Coffee** - Diner-style coffee recipe
8. **Guacamole Bacon Grilled Cheese** - Ultimate comfort sandwich
9. **Suppe** - Hearty German soup

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your recipe collection!

### Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Static Generation

Generate static site for deployment:

```bash
npm run generate
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` or `master` branch.

### Setup Instructions

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Deploy recipe app"
   git push origin main
   ```

3. **Wait for deployment**:
   - Go to the Actions tab to see the deployment progress
   - Once complete, your site will be live at: `https://<username>.github.io/<repo-name>/`

The GitHub Action will automatically:
- Install dependencies
- Build the static site
- Deploy to GitHub Pages

## Project Structure

```
recipe-app/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── app/
│   ├── app.vue              # Main app component with routing
│   └── pages/
│       ├── index.vue        # Home page with recipe grid
│       └── recipes/         # Individual recipe pages
│           ├── burger.vue
│           ├── pancakes.vue
│           ├── chili.vue
│           ├── street-tacos.vue
│           ├── buletten.vue
│           ├── lasagna.vue
│           ├── coffee.vue
│           ├── grilled-cheese.vue
│           └── suppe.vue
├── public/                  # Static assets (images)
│   └── .nojekyll           # Tells GitHub Pages to serve all files
└── nuxt.config.ts          # Nuxt configuration (with GitHub Pages preset)
```

## Technologies Used

- **Nuxt 4** - The Intuitive Vue Framework
- **Vue 3** - Progressive JavaScript Framework
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Free static site hosting

## Customization

You can easily customize the app by:

- **Changing colors**: Edit Tailwind classes in components
- **Adding recipes**: Create new `.vue` files in `app/pages/recipes/` and add to the recipes array in `index.vue`
- **Updating images**: Replace images in the `public/` directory
- **Modifying layout**: Edit the grid layout and Tailwind classes

## License

Personal recipe collection - Enjoy!
