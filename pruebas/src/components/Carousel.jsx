import Carousel from 'react-bootstrap/Carousel';
import Foto1 from '../images/foto1.jpg';
import Foto2 from '../images/foto2.jpg';
import Foto3 from '../images/foto3.jpg';

function Carousel2() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='landscape-image' src={Foto1} alt="Foto 1" text="First slide" />
                <Carousel.Caption>
                    <h3>Glaciar Perito Moreno</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className='landscape-image' src={Foto2} alt="Foto 1" text="Second slide" />
                <Carousel.Caption>
                    <h3>Villa La Angostura</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='landscape-image' src={Foto3} alt="Foto 3" text="Third slide" />
                <Carousel.Caption>
                    <h3>Cataratas del Iguasu</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousel2;