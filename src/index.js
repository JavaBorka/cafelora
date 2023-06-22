import './style.css';

import { HomePage } from "./pages/HomePage";

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}