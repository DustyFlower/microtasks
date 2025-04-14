type ButtonPropsType = {
    name: string
    onClick: () => void
};

export const Button = ({name, onClick}: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        onClick();
    }

    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};