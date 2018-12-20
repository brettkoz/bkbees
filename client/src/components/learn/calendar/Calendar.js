import React, { Component } from "react";
import axios from "axios";
import Product from "./../../Product";
import config from "./../../../config/config";
import calendarInfo from "./calendarInfo";
import "./calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.buyCalendar = this.buyCalendar.bind(this);
    this.clickedCalendarNav = this.clickedCalendarNav.bind(this);
    this.state = {
      activeMonth: ""
    };
  }
  componentDidMount() {
    let productId = { productId: "688" };
    axios
      .post(config.BACKEND_URL + "/api/sales/products", productId)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    let nowDate = new Date(Date.now());
    let nowMonth = nowDate.getMonth();
    this.setState({ activeMonth: nowMonth });
    console.log("month: " + nowMonth);
  }

  clickedCalendarNav(which) {
    console.log("clicked calendar nav, which is: " + which);
    let currentMonth = this.state.activeMonth;
    let newMonth;
    switch (which) {
      case "previous":
        //clicked previous
        if (currentMonth === 0) {
          newMonth = 11;
        } else {
          newMonth = currentMonth - 1;
        }
        this.setState({ activeMonth: newMonth });
        break;
      case "next":
        //clicked next
        if (currentMonth === 11) {
          newMonth = 0;
        } else {
          newMonth = currentMonth + 1;
        }
        this.setState({ activeMonth: newMonth });
        break;
      default:
        break;
    }
  }
  buyCalendar() {
    console.log("clicked buyCalendar");
    let reqBody = { productId: "688", quantity: 1 };
    axios
      .post("http://localhost:5000/api/sales/purchase", reqBody)
      .then(res => {
        console.log(res);
        window.location = res.data.url;
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let display;
    console.log("active month is: " + this.state.activeMonth);
    switch (this.state.activeMonth) {
      case 0:
        //january
        display = calendarInfo.january;
        break;
      case 1:
        //february
        display = calendarInfo.february;
        break;
      case 2:
        //march
        display = calendarInfo.march;
        break;
      case 3:
        //april
        display = calendarInfo.april;
        break;
      case 4:
        //may
        display = calendarInfo.may;
        break;
      case 5:
        //june
        display = calendarInfo.june;
        break;
      case 6:
        //july
        display = calendarInfo.july;
        break;
      case 7:
        //august
        display = calendarInfo.august;
        break;
      case 8:
        //september
        display = calendarInfo.september;
        break;
      case 9:
        //october
        display = calendarInfo.october;
        break;
      case 10:
        //november
        display = calendarInfo.november;
        break;
      case 11:
        //december
        display = calendarInfo.december;
        break;
      default:
        break;
    }
    return (
      <div className="container container-fluid calendarContainer">
        <h1 className="display-5">Beekeeping Calendar</h1>
        <p className="lead">
          A month by month overview of what to expect from your bees and what
          you should be doing for them
        </p>
        <div className="row row-space calendarRow card">
          <div
            className="previous col-md-1"
            onClick={() => {
              this.clickedCalendarNav("previous");
            }}
          >
            <i className="fas fa-chevron-left" />
            Previous
          </div>
          <div className="col-md-10 calendarContent">{display}</div>
          <div
            className="next col-md-1"
            onClick={() => {
              this.clickedCalendarNav("next");
            }}
          >
            <i className="fas fa-chevron-right" />
            Next
          </div>
        </div>
        <Product productId="688" />
        <button className="btn btn-large" onClick={() => this.buyCalendar()}>
          Buy Calendar
        </button>
      </div>
    );
  }
}
