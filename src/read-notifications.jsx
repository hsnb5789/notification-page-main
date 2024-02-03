// import App from "./App";

// import React from 'react'

// const ReadNotifications = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ReadNotifications


// import { useState } from 'react'
import './App.css'
import markImg from '../images/avatar-mark-webber.webp'
import angellImg from '../images/avatar-angela-gray.webp'
import jacobImg from '../images/avatar-jacob-thompson.webp'
import rizkiImg from '../images/avatar-rizky-hasanuddin.webp'
import kimberlyImg from '../images/avatar-kimberly-smith.webp'
import nathanImg from '../images/avatar-nathan-peterson.webp'
import annaImg from '../images/avatar-anna-kim.webp'

function App() {
  const markAllAsRead = () => {
    const notifications = document.querySelectorAll(".notification")
    notifications.forEach((notification) => {
      notification.classList.remove("new-notification")
    })
  }


  return (
    <>
    <main className="notification-container">
      <div className="notification">
          <h3>Notification <span className='highlight-text'>3</span></h3>
          <button type="button" className="mark-all-read" onClick={markAllAsRead}>Mark all as read</button>
        </div>
      <div className="notification-section">
        <div className="notification-content">
          <div className="image-container"><img src={markImg}></img></div>
          <div className='notification-info'>
            <div className="user-action"><span className='name'>Mark Webber</span> reacted to your recent post <span className='grey-Text'>My first tournament today!<span className='new-notification-highlight-symbols'></span></span></div>
            <span className="time">1m ago</span>
          </div>
        </div>

        <div className="notification-content">
          <div className="image-container"><img src={angellImg}></img></div>
          <div className='notification-info'>
            <div className="user-action"><span className='name'>Angela Gray</span> followed you <span className='grey-Text'><span className='new-notification-highlight-symbols'></span></span> </div>
            <span className="time">5m ago</span>
          </div>
        </div>

        <div className="notification-content">
          <div className="image-container"><img src={jacobImg}></img></div>
          <div className='notification-info'>
            <div className="user-action"><span className='name'>Jacob Thompson</span> has joined your group <span className='chess'>Chess Club<div className='new-notification-highlight-symbols'></div></span></div>
            <div className="time">1 day ago</div>
          </div>
        </div>
        <div className="notification-content rizky">
        <div className="image-container"><img src={rizkiImg}></img></div>
          <div className='notification-info'>
              <div className="user-action"><span className='name'>Rizky Hasanuddin</span> sent you a private message</div>
              <span className="time">5 days ago</span>
              <div className="private-message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</div>
          </div>
        </div>
        <div className="notification-content">
          <div className="image-container"><img src={kimberlyImg}></img></div>
          <div className='notification-info'> 
              <div className="user-action"><span className='name'>Kimberly Smith</span> commented on your picture</div>
              <span className="time">1 week ago</span>
              <div className="image-container"><img src=''></img></div>      
            <div className="Kimberly">
            </div>
          </div>
        </div>
        <div className="notification-content">
          <div className="image-container"><img src={nathanImg}></img></div>
          <div className='notification-info'>
            <div className="user-action"><span className='name'>Nathan Peterson</span> reacted to your recent post <span className='grey-Text'>5 end-game strategies to increase your win rate</span></div>
            <span className="time">2 weeks ago</span></div>
          </div>
        <div className="notification-content">
          <div className="image-container"><img src={annaImg}></img></div>
          <div className='notification-info'>
            <div className="user-action"><span className='name'>Anna Kim</span> left the group <span className='chess'>Chess Club</span></div>
            </div>
        </div>
      </div>
  {/* </div> */}
</main>
    </>
  )
}

export default App


