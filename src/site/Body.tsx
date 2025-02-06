type BodyType = {
    titleForBody: string,
}

export const Body = ({titleForBody}: BodyType) => {
    return (
        <div>{titleForBody}</div>
    );
};