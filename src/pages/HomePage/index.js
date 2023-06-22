import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';

export const HomePage = () => {

    const pageElm = document.createElement('div')
    pageElm.classList.add('page')

    const mainElm = document.createElement('main')
    mainElm.append(Banner(), Menu({drinks: 'loading'}), Gallery(), Contact())

    pageElm.append(Header(), mainElm, Footer())

    return pageElm
}