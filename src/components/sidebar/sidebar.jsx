import React from 'react';
import { useState } from 'react';
import './sidebar.css';
import Bolt from '../ressources/bolt';



function sidebar() {


  return (
    <div className='sidebar'>
        {/* logo*/}
        <div className="header1">
            <div className="container">
                <img className='logo' src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="Avatar" />
                <div className='containerCon'>
                  <p>Orizon Academy</p> 
                  <span className='span'>Learning with fun</span>
                </div>
            </div>
        </div>
        <div className='menu'>
          <div className='menuItems'>
          <div>
            My courses
          </div>
          <div>
            Bookmarks
          </div>
          <div>
          Trending Courses
          </div>
          <div>
            Help Articles
          </div>
          <div>
            Completed Courses
          </div>
          </div>
        </div>
        <div className='menuItem'>
          <div className='name'> My Tutors</div>
             <div className='lines'>
                <img className='img' src='https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' alt=''/>
                <div className='line'>
                  <div className='nameCon'>
                    <div className='name'>Kathryn Murphy</div> 
                    <div className='box'>bonjour</div>
                  </div>
                <div className='post'>PHP Developer</div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default sidebar;