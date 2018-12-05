import React, { Component } from "react";
import { YoutubeCredentials } from "./credentials";
import YouTube from 'react-youtube';
import Spinner from "./../common/Spinner";

export default class Videos extends Component {
  state = { videos: [], loading: true };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentMounted, prepping youtube shit");
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
console.log(url);

fetch(url)
.then(function(response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
})
.then(function(data) {
  that.setState({ videos: data.items, loading: false });
  console.log(data.items);
})
.catch(error => {
  console.error(error);
});
  }

  render() {
    let {videos, loading} = this.state;
    if (loading){
      return <Spinner/>;
    }

    return <div>Youtube Like a maddafukka 
      <YouTube
          videoId={videos[1].id.videoId}
          opts={{
            height: "390",
            width: "640",
            playerVars: {
              autoplay: 1
            }
          }}
          onReady={this._onReady}
        />
    </div>;
  }
}
