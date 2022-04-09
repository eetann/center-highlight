console.log('Center Highlight!')

import ReactDOM from 'react-dom'
import App from './App'

const body = document.querySelector('body')
const app = document.createElement('div')
app.id = 'center-highlight-extension-root'

if (body) {
  body.prepend(app)
}
ReactDOM.render(
  <App />,
  document.getElementById('center-highlight-extension-root'),
)
