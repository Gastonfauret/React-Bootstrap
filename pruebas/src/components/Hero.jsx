import Image from 'react-bootstrap/Image';
import ImageMan from '../images/man-programming.jpg'
import '../styles/Hero.css'
import Card from './CardNews'

function Hero(props) {
    return (
        <>
            <div className="container-hero">
                <div className="cards-container">
                    <Card
                        title='"Los errores en mi vida"'
                        secundaryTitle='Por Adrian Calo'
                        content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here. '
                    />
                    <Card
                        title='Nota a Marcelo Ramos'
                        secundaryTitle='Project Manager de Gula'
                        content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. .'
                    />
                </div> nm
                <Image className='image-man-programming' src={ImageMan} fluid />;
                <div className="cards-container">
                    <Card
                        title='Programacion Web'
                        secundaryTitle='El trabajo del 2023.'
                        content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here. '
                    />
                    <Card
                        title='Nueva version de Python'
                        secundaryTitle='Se lanzo la 2.4.5'
                        content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. .'
                    />
                </div>
            </div>
        </>
    )
}

export default Hero;