import React from 'react';

import { LogIn } from './LogIn';
import Header from './Header';
import Question from './Question';

export default React.createClass({
  render() {
    return (
      <div className='main'>
        <Header appName='React Quiz - Components Demo' />
        <ul>
          <li><a href='#header-component'>Header</a></li>
          <li><a href='#login'>LogIn</a></li>
        </ul>
        <div id='header-component' className='component-demo'>
          <h3>Header</h3>
          <div className='javascript'>
            {"<Header appName='name' />"}
          </div>
          <Header appName='React Quiz' />
        </div>
        <div id='login-component' className='component-demo'>
          <h3>LogIn</h3>
          <div className='javascript'>
            {"<LogIn />"}
          </div>
          <LogIn />
        </div>
        <div id='question-component' className='component-demo'>
          <h3>Question</h3>
          <div className='javascript'>
            {"<Question question='Is this a question?' />"}
          </div>
          <Question question='Is this a question?' />
        </div>
      </div>
    );
  }
});
