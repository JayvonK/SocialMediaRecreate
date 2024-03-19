import '../App.css';
import instagramLogo from '../Assets/icon-instagram.svg';
import facebookLogo from '../Assets/icon-facebook.svg';
import twitterLogo from '../Assets/icon-twitter.svg';
import youtubeLogo from '../Assets/icon-youtube.svg';
import upArrow from '../Assets/icon-up.svg';
import downArrow from '../Assets/icon-down.svg'
import FollowerCardComponent from './FollowerCardComponent';
import { useState } from 'react';

function HomePageComponent() {
    const [bg, setBg] = useState<string>('bgLight');
    const [rectangle, setRectangle] = useState<string>('bgRectangleLight');

    const handleClick = () => {
        if(bg === 'bgLight'){
            setBg('bgDark');
            setRectangle('bgRectangleDark');
        } else {
            setBg('bgLight');
            setRectangle('bgRectangleLight');
        }
    }

  return (
    <div className={'xl:px-44 pt-3 px-5 minH bgLight'}>
        <div className={'bgRectangleLight'}>
        </div>
      <div className='grid xl:grid-cols-2 mb-5 relative'>
        <div>
          <h1 className='interBold lightTxt2'>Social Media DashBoard</h1>
          <p className='interBold lightTxt1'>Total Followers: 23,004</p>
        </div>
        <div className='flex justify-end'>
            <h1>Dark Mode</h1>
            <button onClick={handleClick}>Change</button>
            </div>
      </div>

      <div className='grid xl:grid-cols-4 gap-8 relative'>
        <FollowerCardComponent bar={'facebookBar'} logo={facebookLogo} arrow={upArrow}  username={'@nathanf'}  number={'1987'}  type={'FOLLOWERS'}  update={'12 Today'}  color={'green'}/>
        
      </div>

      <h1 className='mt-10 mb-5'>Overview - Today</h1>

      <div className='grid xl:grid-cols-4 gap-8 mb-10'>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>
        <div className="boxLight min-h-40">

        </div>


      </div>

      <div className='grid xl:grid-cols-4 gap-8'>
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

export default HomePageComponent;

