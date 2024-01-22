**react app with vite**

```
npm init -y

```

```
npm i -D vite @vitejs/plugin-react

```

```
npm i react react-dom

```

```
npm i -D prettier eslint eslint-config-prettier eslint-plugin-import

```

```
npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

```

**vite.config.js**

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
root: "src",
});

```

**App.jsx**

```
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

```

**package.json**

```
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"format": "prettier --write \"src/**/\*.{js,jsx}\"",
"lint": "eslint \"src/**/\*.{js,jsx}\" --quiet"
},

```

**.gitignore**

```

node_modules
.parcel-cache/
dist/
.env
.DS_Store
coverage/
.vscode/

```

**.prettierrc**

```

{}

```

**.eslintrc.json**

```

{
"extends": [
"eslint:recommended",
"plugin:import/errors",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended",
"plugin:react-hooks/recommended",
"prettier"
],
"rules": {
"react/prop-types": 0,
"react/react-in-jsx-scope": 0
},
"plugins": ["react", "import", "jsx-a11y"],
"parserOptions": {
"ecmaVersion": 2022,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"es6": true,
"browser": true,
"node": true
},
"settings": {
"react": {
"version": "detect"
},
"import/resolver": {
"node": {
"extensions": [".js", ".jsx"]
}
}
}
}

```

```

```
