import React from 'react'

const ContentBlock = ({logo, company, link, time, title, description}) => {
  return (
    <div className="flex flex-col font-app text-primary cursor-default py-4 max-w-lg">
      <div className="flex flex-row justify-between">
        <a className="cursor-pointer text-lg" href={link} target="_blank" rel="noopener noreferrer">{company}</a>
        <div className="text-sm">{time}</div>
      </div>
      <div className="text-xs">{title}</div>
      <div className="text-sm pt-4">{description}</div>
    </div>
  )
}

export default ContentBlock