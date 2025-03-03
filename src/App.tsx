import './App.css'
import {useState} from 'react';
import {Input} from './components/Input.tsx';
import {Button} from './components/Button.tsx';

type messageType = {
    message: string;
}

function App() {

    const [message, setMessage] = useState<messageType[]>([
        {message: 'message1'},
        {message: 'message1'},
        {message: 'message1'}
    ]);

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage: messageType = {message: title}
        setMessage([newMessage, ...message])

    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input setTitle={setTitle} title={title}/><Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App
