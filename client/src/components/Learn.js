import React, { Component } from 'react'
import articles from './../assets/article.png';
import videos from './../assets/video.png';
import calendar from './../assets/calendar.png';

export default class Learn extends Component {

    onClickCategory = (which) =>{
        switch(which){
            case 'articles':
            this.props.history.push('/learn/articles');
            break;
            case 'videos':
            this.props.history.push('/learn/videos');
            break;
            case 'calendar':
            this.props.history.push('/learn/calendar');
        }
    }
  render() {
    return (
      <div>
        <div className="container container-fluid text-center">
        <h1>Learn</h1>
        <div className="categories">
          <div
            className="category card articles"
            onClick={e => {
              this.onClickCategory("articles");
            }}
          >
            <h3>Articles</h3>
            <img src={articles} className="categoryPic" />
          </div>
          <div
            className="category card videos"
            onClick={() => {
              this.onClickCategory("videos");
            }}
          >
            <h3>Videos</h3>
            <img src={videos} className="categoryPic" />
          </div>
          <div
            className="category card calendar"
            onClick={() => {
              this.onClickCategory("calendar");
            }}
          >
            <h3>Calendar</h3>
            <img src={calendar} className="categoryPic" />
          </div>
        </div>
      </div>
      </div>
    )
  }
}
