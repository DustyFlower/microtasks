import './App.css'
import {useState} from 'react';

function App() {

    //   let a = 1
    const [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(a + 1)
        console.log(a)
    }

    const onClickZeroHandler = () => {
        setA(0)
    }

    return (
        <>
            <div className={'App'}>
                <h1>{a}</h1>
                <button onClick={onClickHandler}>number</button>
                <button onClick={onClickZeroHandler}>0</button>
            </div>
        </>
    )
}

export default App
