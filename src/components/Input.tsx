import {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    value: string
}

export const Input = ({setTitle, value}: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return (
        <input onChange={onChangeInputHandler} value={value}/>
    );
};