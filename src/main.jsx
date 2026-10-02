import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./cssfile/navbar.css";
import "./cssfile/hero.css";
import "./cssfile/about.css";
import "./cssfile/skills.css";
import "./cssfile/resume.css";
import "./cssfile/projects.css";
import "./cssfile/testimonials.css";
import "./cssfile/contact.css";
import "./cssfile/footer.css";
import "./app.css";
import "./index.css";

import App from './App'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
