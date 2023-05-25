import { Outlet} from "react-router-dom";

import NavigationBar from "../Pages/SharePages/NavigationBar/NavigationBar";
import Footer from "../Pages/SharePages/Footer/Footer";


const MainPage = () => {


    return (
        <div>
          <NavigationBar></NavigationBar>
           <div style={{minHeight:'78vh'}}>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;