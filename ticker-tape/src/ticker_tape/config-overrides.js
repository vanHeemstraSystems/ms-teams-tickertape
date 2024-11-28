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