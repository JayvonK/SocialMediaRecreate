import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import igLogo from './Assets/icon-instagram.svg';
import upArrow from './Assets/icon-up.svg';

function App() {
  return (
    <div className='xl:px-60 pt-3 px-5'>
      <div className='grid xl:grid-cols-2 mb-5'>
        <div>
          <h1>Social Media DashBoard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className='flex justify-end'>Dark Mode</div>
      </div>

      <div className='grid xl:grid-cols-4 gap-10'>

        <div className="boxLight min-h-60 inter">
          <div className='h-2 igBar'></div>
          <div className='p-8'>
            <div className='flex justify-center'>
              <img className='h-full mr-1' src={igLogo} alt="" />
              <h1 >@nathanf</h1>
            </div>
            <div>
              <h1 className='text-center inter followers bold'>1987</h1>
            </div>
            <div>
              <h4 className='text-center regular'>FOLLOWERS</h4>
            </div>
            <div className='flex justify-center'>
              <div className='flex flex-wrap-reverse content-center mr-1'>
                <img className='h-[6px]' src={upArrow} alt="" />
              </div>
              
              <h4 className='green'>12 today</h4>
            </div>
          </div>

        </div>



        <div className="boxLight min-h-60">

        </div>
        <div className="boxLight min-h-60">

        </div>
        <div className="boxLight min-h-60">

        </div>
      </div>

      <h1 className='mt-10 mb-5'>Overview - Today</h1>

      <div className='grid xl:grid-cols-4 gap-10 mb-10'>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>


      </div>

      <div className='grid xl:grid-cols-4 gap-10'>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>


      </div>



    </div>
  );
}

export default App;
