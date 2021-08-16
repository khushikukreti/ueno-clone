
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Floatingpage from './Floatingpage';
import Header from './Header';

import Homepage2 from './Homepage2';
import Loading from './Loading';

function App() {
  const[loader,setLoader]=useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoader(false)
      console.log('This will run after 1 second!')
    }, 5000);
  },[])

  return (
    <AnimateSharedLayout>
    <AnimatePresence exitBeforeEnter>

   
    {loader?<Loading></Loading>:
    <div className="App">
      <Header></Header>
     {/* <HomePage></HomePage> */}
    <Homepage2></Homepage2>   
   
    </div>}
    </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
