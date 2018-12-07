import React, { Component } from "react";
import { YoutubeCredentials } from "./credentials";
import YouTube from "react-youtube";
import Spinner from "./../common/Spinner";

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: true,
      nextPageToken: "",
      pageTokens: [],
      page: 0,
      activeVideo: ""
    };
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.getLatestVideos = this.getLatestVideos.bind(this);
    this.getMoreVideos = this.getMoreVideos.bind(this);
    this.getPreviousVideos = this.getPreviousVideos.bind(this);
  }
  handleThumbClick(video) {
    console.log("clicked thumb");
    console.log(video);
    this.setState({ activeVideo: video.id.videoId });
  }
  getPreviousVideos() {
    let tokens = [...this.state.pageTokens];
    let page = this.state.page;
    let prevToken = tokens[page - 2];
    tokens.splice(page - 1);
    console.log(prevToken);
    if (this.state.page <= 2) {
      this.getLatestVideos();
      return;
    }
    page = page - 1;
    this.setState({ loading: true });
    let that = this;
    var API_key = YoutubeCredentials;
    let PAGE_TOKEN = prevToken;
    console.log("PREVTOKEN " + PAGE_TOKEN);
    if (PAGE_TOKEN === "") {
      this.getLatestVideos();
      return;
    }
    var channelID = "UCnOlgsOidQKN_3lkpmJ7UDA";
    var maxResults = 12;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&pageToken=" +
      PAGE_TOKEN +
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
        console.log(data);
        that.setState({
          videos: data.items,
          loading: false,
          nextPageToken: data.nextPageToken,
          pageTokens: tokens,
          page: page
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getMoreVideos() {
    const currentToken = this.state.nextPageToken;
    let tokens = [...this.state.pageTokens];
    tokens.push(currentToken);
    console.log(tokens);
    let prevToken;
    if (this.state.currentPageToken === "latest") {
      prevToken = "latest";
    } else {
      prevToken = "";
    }
    let page = this.state.page + 1;
    if (page <= 2) {
      prevToken = "";
    } else {
      prevToken = currentToken;
    }
    console.log(
      "GET MORE VIDEOS, PREVTOKEN:" +
        prevToken +
        " Current Token " +
        currentToken
    );
    this.setState({ loading: true });
    let that = this;
    var API_key = YoutubeCredentials;
    let PAGE_TOKEN = this.state.nextPageToken;
    var channelID = "UCnOlgsOidQKN_3lkpmJ7UDA";
    var maxResults = 12;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&pageToken=" +
      PAGE_TOKEN +
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
        console.log(data);
        that.setState({
          videos: data.items,
          loading: false,
          nextPageToken: data.nextPageToken,
          pageTokens: tokens,
          page: page
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getLatestVideos() {
    let tokens = [...this.state.pageTokens];
    tokens.push("");
    console.log(tokens);
    let that = this;
    var API_key = YoutubeCredentials;
    var channelID = "UCnOlgsOidQKN_3lkpmJ7UDA";
    var maxResults = 12;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&channelId=" +
      channelID +
      "&part=snippet,id&order=date&maxResults=" +
      maxResults;
    console.log(url);
    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({
          videos: data.items,
          loading: false,
          activeVideo: data.items[0].id.videoId,
          nextPageToken: data.nextPageToken,
          currentPageToken: "latest",
          previousPageToken: null,
          pageTokens: tokens,
          page: 1
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.getLatestVideos();
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
          alt={video.snippet.title}
        />
        <span className="subTitle">{video.snippet.title}</span>
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
    //videos[0].id.videoId
    return (
      <div className="container-fluid text-center bees animated bounceInLeft">
        <h1 className="display-2">Watch</h1>
        <div className="youtubeContainer">
          <div className="videoWrapper">
            <YouTube
              videoId={this.state.activeVideo}
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <a
            className="btn subscribeButton"
            href="https://www.youtube.com/channel/UCnOlgsOidQKN_3lkpmJ7UDA?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fab fa-youtube" /> Subscribe To B&amp;K Bees On
            Youtube
          </a>
        </div>
        <p className="subTitle">Latest Videos On B&amp;K Bees</p>
        <div className="thumbs">{thumbContent}</div>
        <button className="btn btn-primary" onClick={this.getPreviousVideos}>
          Back
        </button>
        <button className="btn btn-primary" onClick={this.getMoreVideos}>
          More
        </button>
      </div>
    );
  }
}
