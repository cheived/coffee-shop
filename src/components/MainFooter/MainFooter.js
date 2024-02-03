import './MainFooter.scss'
import Header from '../MainHeader/MainHeader'
function MainFooter() {
    return (
        <div className='footer'>
            <Header black={true} />
            <img src='/img/beansLogoBlack.svg' alt='beansLogoBlack'></img>
        </div>
    )
}

export default MainFooter