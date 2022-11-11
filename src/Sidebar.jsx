import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import './Sidebar.css'

const Sidebar = () => {
    const user = useSelector(selectUser );
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p className="topic">{topic}</p>
        </div>
    );
  return (
      <div className='sidebar'>
          <div className="sidebar_top">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
              <Avatar className='sidebar_avatar' src= {user.photoUrl}>{user.displayName[0]} </Avatar>
              <h2>{user.displayName} </h2>
              <h4>{user.email} </h4>
          </div>

          <div className="sidebar_stats">
              <div className="sidebar_stat">
                  <p>who viewed you</p> 
                  <p className="sidebar_statNumber">
                      <p>8,967</p>
                  </p>
              </div>
              <div className="sidebar_stat">
                  <p>views on post</p> 
                  <p className="sidebar_statNumber">
                      10,000,000
                  </p>
              </div>
          </div>
                  <div className="sidebar_bottom">
              <p>Recent</p>
              {recentItem('reactjs')}
              {recentItem('programming')}
              {recentItem('softwareengineering')}
              {recentItem('web design')}
              {recentItem('front end')}
              {recentItem('back end')}

                  </div>
    </div>
  )
}

export default Sidebar