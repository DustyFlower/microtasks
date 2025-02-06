import './App.css'
import {Header} from './site/Header.tsx';
import {Body} from './site/Body.tsx';
import {Footer} from './site/Footer.tsx';

function App() {
    return (
        <>
            <Header titleForHeader={'NEW TITLE'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </>
    )
}

export default App
