import './MainHeader.scss'
function Header(props) {
    return (
        <div className="header">
            <img className='logo' src={props.black ? "/coffee-shop/img/logoBlack.svg" : "/coffee-shop/img/Logo.svg"} alt="imageError" />
            <a style={{ color: props.black ? "black" : "white" }} href='localhost'>Our coffee</a>
            <a style={{ color: props.black ? "black" : "white" }} href='localhost'>For your pleasure</a>

        </div>
    )
}

export default Header