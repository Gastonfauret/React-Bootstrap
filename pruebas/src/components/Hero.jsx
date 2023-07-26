import Image from 'react-bootstrap/Image';
import ImageMan from '../images/man-programming.jpg'
import '../styles/Hero.css'

function Hero() {
    return (
        <>
            <div className="container">
                <Image className='image-man-programming' src={ImageMan} fluid />;
            </div>
        </>
    )
}

export default Hero;