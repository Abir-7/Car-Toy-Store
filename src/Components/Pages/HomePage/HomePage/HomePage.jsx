import useTitle from '../../../../Hooks/useTitle';
import Catagory from '../Catarogy/Catagory';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import CustomerQues from './CustomerQues/CustomerQues';
import './HomePage.css'

const HomePage = () => {
    useTitle('Car Toy Store/Home')
    return (
        <div className="homepage mt-3">
            <Slider></Slider>
            <h1 className='mt-10 mb-5 text-center font-bold text-5xl text center text-success '>Toy Gallery</h1>
            <Gallery></Gallery>
            <Catagory></Catagory>
            <div className='text-4xl  underline underline-offset-4 text-center text-success my-5'>Customer Review</div>
            <Reviews></Reviews>
         <CustomerQues></CustomerQues>

        </div>
    );
};

export default HomePage;