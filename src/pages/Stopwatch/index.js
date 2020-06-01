import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const baseURL = "https://img.icons8.com/dusk/64/000000/";
const imagens = {
  stopwatch: baseURL + "stopwatch.png",
  clock: baseURL + "clock.png",
  alarmClock: baseURL + "alarm-clock.png",
};

export default class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    milis: 0,
    hours: 0,
    paused: true,
  };

  updateTime = () => {
    const state = this.state;
    let milis = state.milis;
    let seconds = state.seconds;
    let minutes = state.minutes;
    let hours = state.hours;

    if (!state.paused) {
      milis += 2;
      seconds = state.seconds;
      minutes = state.minutes;
    } else {
      return;
    }

    if (milis === 1000) {
      milis = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    this.setState({
      minutes,
      seconds,
      milis,
      hours,
    });
  };

  start = () => {
    const state = this.state;
    this.setState({ paused: !state.paused });
    setInterval(this.updateTime, 2);
  };

  clear = () => {
    this.setState({ seconds: 0, milis: 0, minutes: 0, hours: 0, paused: true });
  };

  componentDidMount() {}

  render() {
    const { milis, seconds, minutes, hours, paused } = this.state;

    return (
      <section>
        <div className="clock">
          <span className="number">{hours}</span>
          <span className="space-number">:</span>
          <span className="number">{minutes}</span>
          <span className="space-number">:</span>
          <span className="number">{seconds}</span>
          <span className="space-number">:</span>
          <span className="number">{milis}</span>
        </div>
        <div className="control">
          <button onClick={this.start}>
            {paused === true ? "Começar" : "Parar"}
          </button>
          <button onClick={this.clear}>Redefinir</button>
        </div>
        <div className="buttons">
          <Link to="/stopwatch">
            <img src={imagens.stopwatch} alt="/" active="true" />
          </Link>
          <Link to="/clock">
            <img src={imagens.clock} alt="/" active="false" />
          </Link>
          <Link to="/alarmclock">
            <img src={imagens.alarmClock} alt="/" active="false" />
          </Link>
        </div>
      </section>
    );
  }
}
