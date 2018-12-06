import React, { Component } from "react";
import { YoutubeCredentials } from "./credentials";
import YouTube from "react-youtube";
import Spinner from "./../common/Spinner";
import { frontEndOrigin } from "./../../utils/origin";

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], loading: true };
    this.handleThumbClick = this.handleThumbClick.bind(this);
  }
  handleThumbClick(video) {
    console.log("clicked thumb");
  }
  componentDidMount() {
    var that = this;
    var API_key = YoutubeCredentials;
    var channelID = "UCnOlgsOidQKN_3lkpmJ7UDA";
    var maxResults = 10;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&channelId=" +
      channelID +
      "&part=snippet,id&order=date&maxResults=" +
      maxResults;
    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ videos: data.items, loading: true });
      })
      .catch(error => {
        console.error(error);
      });
  }
  // video.thumbnails.default.url
  render() {
    let opts = {
      playerVars: {
        autoplay: 0,
        origin: "http://localhost:3000/"
      }
    };
    let { videos, loading } = this.state;

    let thumbContent = videos.map((video, i) => (
      <p
        className="lead whiteText"
        key={i}
        onClick={() => {
          this.handleThumbClick(video);
        }}
      >
        <img
          key={i}
          className="thumbImg"
          src={video.snippet.thumbnails.medium.url}
        />
        {video.snippet.title}
      </p>
    ));
    console.log(videos);
    if (loading) {
      return (
        <div className="centerSpinner">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="container-fluid text-center bees animated bounceInLeft">
        <h1 className="display-2">Watch</h1>
        <div className="youtubeContainer">
          <div className="videoWrapper">
            <YouTube
              videoId={videos[1].id.videoId}
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <a
            className="btn subscribeButton"
            href="https://www.youtube.com/channel/UCnOlgsOidQKN_3lkpmJ7UDA?sub_confirmation=1"
            target="_blank"
          >
            <span className="fab fa-youtube" /> Subscribe To B&amp;K Bees On
            Youtube
          </a>
        </div>
        <div className="thumbs">{thumbContent}</div>
      </div>
    );
  }
}
