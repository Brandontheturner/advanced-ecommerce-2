import React, { Component } from "react";
import PropTypes from "prop-types";

function TopNav(props) {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                props.changeCategory("headlights");
              }}
            >
              HeadLights
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                props.changeCategory("tires");
              }}
            >
              Tires
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                props.changeCategory("bumpers");
              }}
            >
              Bumpers
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                props.changeCategory("audio");
              }}
            >
              Audio
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                props.changeCategory("bumpers");
              }}
            >
              Truck Bumpers
            </a>
          </li>
          <li>
            <a href="contact.html">>Feedback</a>
          </li>
          <div className="clear"> </div>
        </ul>
      </div>
    </div>
  );
}

TopNav.PropTypes = {
  changeCategory: PropTypes.func
};

export default TopNav;
