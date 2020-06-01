import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const baseURL = "https://img.icons8.com/dusk/64/000000/";
const imagens = {
  stopwatch: baseURL + "stopwatch.png",
  clock: baseURL + "clock.png",
  alarmClock: baseURL + "alarm-clock.png",
};

export default class Clock extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  updateTime = () => {
    const date = new Date();

    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };

  componentDidMount() {
    setInterval(this.updateTime, 999);
  }

  render() {
    const { seconds, minutes, hours } = this.state;

    return (
      <section>
        <div className="clock">
          <span className="number">{hours}</span>
          <span className="space-number">:</span>
          <span className="number">{minutes}</span>
          <span className="space-number">:</span>
          <span className="number">{seconds}</span>
        </div>
        <div className="buttons">
          <Link to="/stopwatch">
            <img src={imagens.stopwatch} alt="/" active="false" />
          </Link>
          <Link to="/clock">
            <img src={imagens.clock} alt="/" active="true" />
          </Link>
          <Link to="/alarmclock">
            <img src={imagens.alarmClock} alt="/" active="false" />
          </Link>
        </div>
      </section>
    );
  }
}
