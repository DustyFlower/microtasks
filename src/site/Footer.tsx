
type FooterType = {
    titleForFooter: string,
}

export const Footer = ({titleForFooter}: FooterType) => {
    return (
        <footer>{titleForFooter}</footer>
    );
};