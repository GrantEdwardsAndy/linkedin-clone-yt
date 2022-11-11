import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import './Widget.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Widget = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
            <FiberManualRecordIcon />
            </div>

            <div className="widget_articleRight">
                <h4>{heading} </h4>
                <p>{subtitle} </p>
            </div>
        </div>
    )
  return (
      <div className='widget'>
          <div className="widget_header">
              <h2>LinkedIn News</h2>
              <InfoIcon />
          </div>

          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          {newsArticle("Tesla is dope", "Cars & Auto - 33,9930 readers")}
          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          {newsArticle("Ashbury is back", "Top news - 10,000 readers")}
          
    </div>
  )
}

export default Widget