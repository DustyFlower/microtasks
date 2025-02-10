type ButtonType = {
    name: string
    callBack: () => void
};
export const Button = ({name, callBack}: ButtonType) => {

    const onClickHandler = () => {
        return callBack();
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};