import declarative from "../../images/image1.png"
import components from "../../images/image2.png"
import singleWay from "../../images/image3.png"
import jsx from "../../images/image4.png"
import "./services.css"


function Services() {
    return (
        <section>
            <div className="cards">
                <img src={declarative} alt="declarative"></img>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div className="cards">
                <img src={components} alt="components"></img>
                <h3>Components</h3>
                <p>Build encapsulted componets that manage their state.</p>
            </div>

            <div className="cards">
                <img src={singleWay} alt="Single-Way"></img>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's</p>
            </div>

            <div className="cards">
                <img src={jsx} alt="JSX"></img>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </section>
    )
}


export default Services;