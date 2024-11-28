# 200 - Create a New React App

You can create a new React application using Create React App, which sets up everything you need for a React project.

1. Open your terminal or command prompt.
2. Run the following command to create a new React app (replace `ticker_tape` with your desired project name):

   ```bash
   $ cd ticker-tape/src
   $ npx create-react-app ticker_tape
   ```

3. Navigate into your project directory:

   ```bash
   $ cd ticker_tape
   ```

4. Rename 'src' to 'components':

  ```bash
  $ cd ticker_tape
  $ mv src components
  ```

5. Rename 'public' to 'static':

  ```bash
  $ cd ticker_tape
  $ mv public static
  ```

6. Move 'index.html to 'templates' directory:

   ```bash
   $ cd ticker_tape
   $ mkdir templates
   $ mv static/index.html templates/index.html
   ```

7. Add the npm package 'react-app-rewired':

  ```bash
  $ cd ticker_tape
  $ npm install react-app-rewired --save-dev
  ```

8. Add a file 'config-overrides.js':

  ```bash
  $ cd ticker_tape
  $ touch config-overrides.js
  ```

9. Add the following content to 'config-overrides.js':

  ```javascript
  const paths = require('react-scripts/config/paths')
  const path = require('path')

  // Make the "components" folder be treated as the "src" folder
  paths.appSrc = path.resolve(__dirname, 'components')
  // Make the "components" folder be treated as the "src" folder
  paths.appTest = path.resolve(__dirname, 'components')
  // Tell the app that "src/index.js" has moved to "components/index.js"
  paths.appIndexJs = path.resolve(__dirname, 'components/index.js')
  // Make the "static" folder be treated as the "public" folder
  paths.appPublic = path.resolve(__dirname, 'static')
  // Tell the app that "src/index.html" has moved to "templates/index.html"
  paths.appHtml = path.resolve(__dirname, 'templates/index.html')
  ```