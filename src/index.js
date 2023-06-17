import './style.css';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';

console.log('funguju!');

const pageElm = document.createElement('div')
pageElm.classList.add('page')

const mainElm = document.createElement('main')
mainElm.append(Banner(), Menu(), Gallery(), Contact())

pageElm.append(Header(), mainElm, Footer())

const appElm = document.querySelector('#app')
appElm.append(pageElm)

