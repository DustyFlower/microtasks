type HeaderType = {
    titleForHeader: string,
}

export const Header = ({titleForHeader}: HeaderType) => {
    return (
        <> {titleForHeader} </>
    )
}