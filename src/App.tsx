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

    const [title, setTitle] = useState<string>('');

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message]);
        setTitle('');
    }

    return (
        <div className={'App'}>
            {/* <FullInput addMessage={addMessage}/>*/}
            <Input value={title} setTitle={setTitle}/>
            <Button name={'ADD'} callBack={() => addMessage(title)}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App
