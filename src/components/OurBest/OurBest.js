import "./OurBest.scss"
import OurBestItem from "../OurBestItem/OurBestItem"
function OurBest() {
    return (
        <div className="mainContent">Our best
            <div className="items">
                <OurBestItem />
                <OurBestItem />
                <OurBestItem />
            </div>

        </div>
    )
}

export default OurBest