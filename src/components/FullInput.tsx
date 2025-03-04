import {ChangeEvent, FC, useState} from 'react';

type InputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput: FC<InputPropsType> = ({addMessage}) => {

    const [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>ADD</button>
        </div>
    );
};