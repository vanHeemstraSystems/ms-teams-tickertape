# 500 - Use the TickerTape Component

1. TO DO: Write the creation of the following:

1) ticker_tape/config directory with content
2) ticker_tape/forms directory with content
3) ticker_tape/models directory with content
4) ticker_tape/routes directory with content
5) ticker_tape/static directory with content
6) ticker_tape/templates directory with content
7) ticker_tape/utils directory with content
8) ticker_tape/workflows directory with content

2. Add the file '.babelrc':

```bash
$ cd ticker_tape
$ touch .babelrc
```

3. Add the following to '.babelrc':

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    ["@babel/preset-react", {}]
  ]
}
```

4. Add the file '.gitattributes':

```bash
$ cd ticker_tape
$ touch .gitattributes
```

5. Add the following to '.gitattributes':

```text
# Auto detect text files and perform LF normalization
* text=auto
```

6. Add the file '.gitignore':

```bash
$ cd ticker_tape
$ touch .gitignore
```

7. Add the following to '.gitignore':

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# Python cache files
app/__pycache__
__pycache__/
*__pycache__*
*.py[cod]

# Virtual environment
venv/
env/
ENV/
.venv/

# Flask instance folder
instance/

# Configuration files
*.env

# Database files
*.sqlite3
*.db

# Migrations
migrations/
*.pyc

# IDE and editor files
.idea/
.vscode/
*.swp

# Logs
*.log

# node modules
*node_modules*
/node_modules

# Coverage reports
.coverage
htmlcov/
/coverage

# Jupyter Notebook checkpoints
.ipynb_checkpoints

# Miscellaneous
*.DS_Store
*.egg-info/
*.egg
.env.local
.env.development.local
.env.test.local
.env.production.local

templates/public/bundle.js
templates/public/index.html

# dependencies
/.pnp
.pnp.js

# production
/build

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

8. Add the file '__about__.py':

```bash
$ cd ticker_tape
$ touch __about__.py
```

9. Add the following to '__about__.py':

```python
# ticker-tape/src/ticker_tape/__about__.py

# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT
__version__ = "0.0.1"
```

10. Add the file '__init__.py':

```bash
$ cd ticker_tape
$ touch __init__.py
```

11. Add the following to '__init__.py:

```python
# ticker-tape/src/ticker_tape/__init__.py

# SPDX-FileCopyrightText: 2024-present Willem van Heemstra <wvanheemstra@icloud.com>
#
# SPDX-License-Identifier: MIT
```

12. Add the file 'app.py':

```bash
$ cd ticker_tape
$ touch app.py
```

13. Add the following to 'app.py':

```python
# ticker-tape/src/ticker_tape/app.py
import os
from utils import create_app

app = create_app()

if __name__ == "__main__":
    app.run(
        debug=True, host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5000))
    )
```

14. Add the following file 'package.json':

```bash
$ cd ticker_tape
$ touch package.json
```

15. Add the following to 'package.json':

```json
{
  "name": "ticker_tape",
  "version": "0.1.0",
  "private": true,
  "description": "Ticker Tape application",
  "author": "Willem van Heemstra",
  "license": "ISC",
  "main": "index.js",
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "react-test-renderer": "^18.3.1",
    "serialize-javascript": "^6.0.2",
    "simple-datatables": "^9.2.1",
    "styled-components": "^6.1.13",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "dev-build": "webpack --progress -d --config webpack.config.js",
    "watch": "webpack --progress -d --config webpack.config.js --watch",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@babel/preset-env": "^7.26.0",
    "@babel/preset-react": "^7.25.9",
    "babel-core": "^6.26.3",
    "babel-loader": "^9.2.1",
    "flowbite": "^2.5.2",
    "html-webpack-plugin": "^5.6.3",
    "react-app-rewired": "^2.2.1",
    "tailwindcss": "^3.4.15",
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

16. Add the file 'run.py':

```bash
$ cd ticker_tape
$ touch run.py
```

17. Add the following to 'run.py':

```python
from templates import app
#Load this config object for development mode
from config import DevelopmentConfig as config # DevelopmentConfig | ProductionConfig
app.config.from_object(config)
app.run()
```

18. Add the file 'tailwind.config.js

```bash
$ cd ticker_tape
$ touch tailwind.config.js
```

19. Add the following to 'tailwind.config.js':

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/templates/**/*.html',
    './app/static/**/*.{css,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')({
      datatables: true
    })
    // ... other plugins
  ]
}
```

20. Add the file 'webpack.config.js':

```bash
$ cd ticker_tape
$ touch webpack.config.js
```

21. Add the following to 'webpack.config.js';

```javascript
// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const config = {
  entry: './components/index.js',
  devtool: 'inline-nosources-cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: './static/js'
    }
  }
}

module.exports = config
```

22. Update the file 'components/index.js':

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import TickerTape from './TickerTape'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

// Temporarily hard coded, make dynamic import
const messagesJson = [{ id: 1, message: 'Hello, World!' }]

root.render(
  <React.StrictMode>
    <TickerTape messagesJson={messagesJson} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

23. Add the file 'components/TickerTape.test.js':

```bash
$ cd ticker_tape
$ touch components/TickerTape.test.js
```

24. Add the following to 'components/TickerTape.test.js':

```javascript
import React from 'react';
import TestRenderer from 'react-test-renderer';
import TickerTape from './TickerTape';

it('renders correctly', () => {
  const tree = TestRenderer(<TickerTape />).toJSON();
  expect(tree).toMatchSnapshot();
});
```


