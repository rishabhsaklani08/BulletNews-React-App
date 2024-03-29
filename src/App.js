import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        {/* <News setProgress={this.setProgress}  pageSize={4} country='in' category='science' /> */}
        <BrowserRouter>
          <Navbar title='DevNews' />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/general' element={<News setProgress={this.setProgress} apikey={this.apikey} key='general' pageSize={this.pageSize} country='in' category='general' />} />
            <Route path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey} key='business' pageSize={this.pageSize} country='in' category='business' />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />} />
            <Route path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} key='health' pageSize={this.pageSize} country='in' category='health' />} />
            <Route path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} key='science' pageSize={this.pageSize} country='in' category='science' />} />
            <Route path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key='sports' pageSize={this.pageSize} country='in' category='sports' />} />
            <Route path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key='technology' pageSize={this.pageSize} country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
