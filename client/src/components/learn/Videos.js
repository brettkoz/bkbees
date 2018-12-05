import React, { Component } from "react";
import { YoutubeCredentials } from "./credentials";
import axios from "axios";

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

    axios
      .get(url)
      .then(res => {
        this.setState({ videos: res.items, loading: false });
        console.log(res.data);
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  }

  render() {
    return <div>Youtube Like a maddafukka {this.state.videos} </div>;
  }
}
