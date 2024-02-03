import './MainBg.scss'
import Header from '../MainHeader/MainHeader'
function MainBg() {
    return (
        <div className="wrapper">
            <div className='headerPlace'>
                <Header />
            </div>
            <div className='text'>
                <div className='mainTitle'>Everything You Love About Coffee
                    <img className='beansLogo' src='/img/beansLogo.svg' alt='beansLogo'></img>
                </div>

                <div className='secondTitle'>
                    <span>We makes every day full of energy and taste</span>
                    <span>Want to try our beans?</span>
                    <button>More</button>
                </div>

            </div>

        </div>




    )
}

export default MainBg