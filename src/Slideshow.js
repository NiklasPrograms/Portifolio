import { Carousel, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Slideshow = () => {
    return (
            <Carousel className="mb-3">
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/1019/1200/300"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/1022/1200/300"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/1026/1200/300"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default Slideshow;