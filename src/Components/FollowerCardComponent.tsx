import React from 'react'

const FollowerCardComponent = (props: {bar: string, logo: string, arrow: string, username: string, number: string, type: string, update: string, color: string}) => {
  return (
    <div className="boxLight ">
          <div className={'h-1 barRadius mb-1 ' + props.bar}></div>

          <div className='p-5'>

            <div className='flex justify-center items-center'>
              <img className='h-full mr-1' src={props.logo} alt="" />

              <h1 className='username interBold lightTxt1'>{props.username}</h1>
            </div>

              <div className='text-center interBold followersNum lightTxt2'>{props.number}</div>

              <h4 className='text-center followers interLight username lightTxt1'>{props.type}</h4>

            <div className='flex justify-center mt-5'>
              <div className='flex flex-wrap-reverse content-center mr-1'>
                <img className='h-[5px]' src={props.arrow} alt="" />
              </div>
              <h4 className={'interBold username ' + props.color}>{props.update}</h4>
            </div>

          </div>

        </div>
  )
}

export default FollowerCardComponent
