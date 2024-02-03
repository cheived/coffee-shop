import './MainHeader.scss'
function Header(props) {
    return (
        <div className="header">
            <img className='logo' src={props.black ? "/img/logoBlack.svg" : "/img/Logo.svg"} alt="imageError" />
            <a style={{ color: props.black ? "black" : "white" }} href='localhost'>Our coffee</a>
            <a style={{ color: props.black ? "black" : "white" }} href='localhost'>For your pleasure</a>

        </div>
    )
}

export default Header