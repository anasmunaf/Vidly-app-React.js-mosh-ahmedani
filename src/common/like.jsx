import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as empty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filled } from "@fortawesome/free-solid-svg-icons";
class Like extends Component {
  render() {
    if (this.props.likes)
      return (
        <FontAwesomeIcon
          className="click"
          onClick={this.props.onClick}
          icon={empty}
        />
      );
    else
      return (
        <FontAwesomeIcon
          className="click"
          onClick={this.props.onClick}
          icon={filled}
        />
      );
  }
}

export default Like;
