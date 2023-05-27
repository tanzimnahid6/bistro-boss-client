import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../src/assets/home/01.jpg'
import img2 from '../../../src/assets/home/02.jpg'
import img3 from '../../../src/assets/home/03.png'
import img4 from '../../../src/assets/home/04.jpg'

const Banner = () => {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={img1} />
                
                </div>
                <div>
                    <img src={img2}/>
                 
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4}/>  
                </div>
            </Carousel> 
        </div>
    );
};

export default Banner;