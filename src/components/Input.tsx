import {ChangeEvent, FC} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    value: string
}

export const Input: FC<InputPropsType> = ({setTitle, value}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return (
        <input value={value} onChange={onChangeInputHandler}/>
    );
};
