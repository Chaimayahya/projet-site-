import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Contact from './Contact';

const Home=()=>{
    return(
        <div>
            <div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://logos-world.net/wp-content/uploads/2023/03/Fashion-Nova-Logo-2006.png"
                        alt="First slide"
                        style={{width:'1000px', height:'600px'}}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://img.freepik.com/photos-gratuite/achats-mode-ligne-ordinateur_23-2150400628.jpg"
                        alt="Second slide"
                        style={{width:'1000px', height:'600px'}}
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn6.aptoide.com/imgs/a/d/7/ad73873c1afc888272f19ff68f4dd743_fgraphic.png"
                        alt="Third slide"
                        style={{width:'1000px', height:'600px'}}
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div>
                <Footer/>
            </div> */}
            <br/>
            <div>
                <Contact/>
            </div>
        </div>
    )
}
export default Home