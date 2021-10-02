import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Socials = ({urls}) => {
  return (
    <div className="flex flex-row">
      {
        urls.map((url) => 
          <div key={url} className="pr-1">
            <SocialIcon url={url} bgColor="#FFFFFA" style={{ height: 25, width: 25 }}/>
          </div>
        )
      }
    </div>
  )
}

export default Socials