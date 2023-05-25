

import { Link } from 'react-router-dom';
import b1 from '../../../../assets/b1.png'
const Slider = () => {
return (
    <div className="hero shadow-2xl  min-h-[60vh]">
  <div className="hero-content flex-col lg:flex-row-reverse p-10">
    <img src={b1}className="w-[60vh] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl text-success font-bold">WellCome To Car Store</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button  className="btn btn-success text-white"><Link to='/alltoys'>Get Started</Link></button>
    </div>
  </div>
</div>
    );
};

export default Slider;