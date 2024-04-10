# React + Vite

## Installations:
```
Tailwind link - https://tailwindcss.com/docs/installation/using-postcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### React-Router
```
npm install react-router-dom
```


### Server folder installations:
```
cloudinary to store images
cors for cross-origin requests
dotenv for secrets
npm install cloudinary cors dotenv express mongoose nodemon openai
openai in package.json must be "openai": "^3.1.0"
/* "openai": "^4.28.4" */
```

Utilized MongoDB Atlas, Cloudinary
### Backend deployed on Render
```
-Root Directory: server
-Start Command: npm run start
```

### Frontend deployed on Netlify
Build settings
```
-Base directory: client
-Build command: npm run build
-Publish directory: client/dist (dist is gotten from)
Manually run "npm run build" locally to create the dist file in the repository.
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
