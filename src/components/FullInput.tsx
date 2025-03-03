import {ChangeEvent, FC, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput:FC<FullInputPropsType> = ({addMessage}) => {

    const[title, setTitle] = useState<string>('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};