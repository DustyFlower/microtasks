import './App.css'
import {useState} from 'react';
import {Input} from './components/Input.tsx';
import {Button} from './components/Button.tsx';

function App() {

    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message1'},
        {message: 'message1'}
    ]);

    const [title, setTitle] = useState<string>('');

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} onClick={callBackButtonHandler}/>
            {/* <FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


export default App
