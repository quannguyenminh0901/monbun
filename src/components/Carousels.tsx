import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Mon from '../../public/next.svg'
import Bun from '../../public/next.svg'
import D from '../../public/next.svg'

function Carousels() {
    return (
        <Carousel data-bs-theme="dark" className='my-2'>
            <Carousel.Item>
                <div className='w-full h-full flex justify-center'>
                    <Image
                        className="w-60 h-60 object-cover"
                        src={D}
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption className="absolute bottom-0 bg-neutral-500 bg-opacity-50">
                    <div className='text-neutral-100'>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='w-full h-full flex justify-center'>
                    <Image
                        className="w-60 h-60 object-cover"
                        src={Mon}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption className="absolute bottom-0 bg-neutral-500 bg-opacity-50">
                    <div className='text-neutral-100'>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='w-full h-full flex justify-center'>
                    <Image
                        className="w-60 h-60 object-cover"
                        src={Bun}
                        alt="Third slide"
                    />
                </div>
                <Carousel.Caption className="absolute bottom-0 bg-neutral-500 bg-opacity-50">
                    <div className='text-neutral-100'>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;