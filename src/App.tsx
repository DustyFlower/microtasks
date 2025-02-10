import './App.css'
import {Button} from './components/Button.tsx';

function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('I am stupid button')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Vasya', 21, 'live in Misnk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Ivan')}/>
            <Button name={'StupidButton'} callBack={Button3Foo}/>
        </div>
    )
}

export default App
