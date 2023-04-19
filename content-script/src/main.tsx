import { createRoot } from 'react-dom/client';
import App from './App'
const body = document.querySelector('body')?.parentElement

const app = document.createElement('div')

app.id = 'content-script-root';

if (body) {
  body.prepend(app)
}

const container = document.getElementById('content-script-root');
const root = createRoot(container!);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
