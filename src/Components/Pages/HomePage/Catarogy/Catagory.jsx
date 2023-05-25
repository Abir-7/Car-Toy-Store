
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import Toycard from '../../AllToys/Toycard';

const Catagory = () => {

    let [category, setCat] = useState('Electric_Car')
    const [toysCar, setToys] = useState([])

    useEffect(() => {
        fetch(`https://car-toy-shop-server.vercel.app/alltoys?category=${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])

    return (
    <div>
        <h1 className='my-5 text-center text-4xl font-bold text-success'>Shop By Category</h1>
           <Tabs>
            <TabList className='text-center' >
                <Tab onClick={() => { setCat('Electric_Car') }}><button className='btn btn-sm btn-outline btn-success'>Electric Cars</button></Tab>
                <Tab onClick={() => { setCat('Remote_Control') }}> <button className='btn btn-sm btn-outline btn-success'>Remote Control Cars</button> </Tab>
                <Tab onClick={() => { setCat('Mini_Toy_Car') }}> <button className='btn btn-sm btn-outline btn-success'>Mini Cars</button> </Tab>
            </TabList>
            <hr />
            <TabPanel >
                <div className='flex justify-center'  data-aos="fade-down-right">
                    <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 gap-5 lg:gap-10' >
                        {
                            toysCar.map(toy => <Toycard key={toy._id} toy={toy}></Toycard>)
                        }
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
   
            <div className='flex justify-center' data-aos="fade-up-left">
                    <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 gap-5 lg:gap-10' >
                        {
                            toysCar.map(toy => <Toycard key={toy._id} toy={toy}></Toycard>)
                        }
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
            <div className='flex justify-center' data-aos="fade-up-left">
                    <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 gap-5 lg:gap-10' >
                        {
                            toysCar.map(toy => <Toycard key={toy._id} toy={toy}></Toycard>)
                        }
                    </div>
                </div>
            </TabPanel>

        </Tabs>
    </div>
    );
};

export default Catagory;