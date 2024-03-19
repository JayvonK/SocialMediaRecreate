import '../App.css';
import instagramLogo from '../Assets/icon-instagram.svg';
import facebookLogo from '../Assets/icon-facebook.svg';
import twitterLogo from '../Assets/icon-twitter.svg';
import youtubeLogo from '../Assets/icon-youtube.svg';
import upArrow from '../Assets/icon-up.svg';
import downArrow from '../Assets/icon-down.svg'
import FollowerCardComponent from './FollowerCardComponent';
import { useState } from 'react';
import OverviewCardComponent from './OverviewCardComponent';

function HomePageComponent() {
    const [bg, setBg] = useState<string>('bgLight');
    const [rectangle, setRectangle] = useState<string>('bgRectangleLight');
    const [cardClass, setCardClass] = useState<string>('boxLight');
    const [text1, setText1] = useState<string>('lightTxt1');
    const [text2, setText2] = useState<string>('lightTxt2');

    const handleClick = () => {
        if (bg === 'bgLight') {
            setBg('bgDark');
            setRectangle('bgRectangleDark');
            setCardClass('boxDark');
            setText1('darkTxt1');
            setText2('darkTxt2');
        } else {
            setBg('bgLight');
            setRectangle('bgRectangleLight');
            setCardClass('boxLight');
            setText1('lightTxt1');
            setText2('lightTxt2');
        }
    }

    return (
        <div className={'xl:px-44 pt-3 px-6 minH ' + bg}>
            <div className={rectangle}>
            </div>
            <div className='grid xl:grid-cols-2 mb-5 relative'>
                <div className='mt-6 mb-7'>
                    <h1 className={'interBold sm:title text-[23.5px] ' + text2}>Social Media DashBoard</h1>
                    <p className={'interBold heading ' + text1}>Total Followers: 23,004</p>
                </div>
                <hr />
                <div className='flex justify-end'>
                    <h1>Dark Mode</h1>
                    <button onClick={handleClick}>Change</button>
                </div>
            </div>

            <div className='grid xl:grid-cols-4 gap-8 relative'>
                <FollowerCardComponent bar={'facebookBar'} logo={facebookLogo} arrow={upArrow} username={'@nathanf'} number={'1987'} type={'FOLLOWERS'} update={'12 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2}/>

                <FollowerCardComponent bar={'twitterBar'} logo={twitterLogo} arrow={upArrow} username={'@nathanf'} number={'1044'} type={'FOLLOWERS'} update={'99 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2}/>

                <FollowerCardComponent bar={'igBar'} logo={instagramLogo} arrow={upArrow} username={'@nathanf'} number={'11k'} type={'FOLLOWERS'} update={'1099 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2}/>

                <FollowerCardComponent bar={'youtubeBar'} logo={youtubeLogo} arrow={downArrow} username={'Nathan F.'} number={'8239'} type={'SUBSCRIBERS'} update={'144 Today'} color={'red'} cardClass={cardClass} text1={text1} text2={text2}/>

            </div>

            <h1 className='mt-10 mb-5 title interBold lightTxt1'>Overview - Today</h1>

            <div className='grid xl:grid-cols-4 gap-8 mb-10'>
                <OverviewCardComponent type={'Page Views'} logo={facebookLogo} number={'87'} percent={'3%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Likes'} logo={facebookLogo} number={'52'} percent={'2%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Likes'} logo={instagramLogo} number={'5462'} percent={'2257%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Profile Views'} logo={instagramLogo} number={'52k'} percent={'1375%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
            </div>

            <div className='grid xl:grid-cols-4 gap-8 mb-3'>
                <OverviewCardComponent type={'Retweets'} logo={twitterLogo} number={'117'} percent={'303%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Likes'} logo={twitterLogo} number={'507'} percent={'553%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Likes'} logo={youtubeLogo} number={'107'} percent={'19%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
                <OverviewCardComponent type={'Total Views'} logo={youtubeLogo} number={'1407'} percent={'12%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
            </div>
        </div>
    );
}

export default HomePageComponent;

