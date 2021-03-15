import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
class TableBody extends Component {
  render() {
    const { paginatedList, head } = this.props;
    return (
      <tbody>
        {paginatedList.map((arr) => (
          <tr key={arr._id}>
            {head.map((head) => {
              if (head.path === "title") {
                return (
                  <td key={head.path || head.key}>
                    <Link to={`/movies/${arr._id}`}>
                      {this.renderList(arr, head)}
                    </Link>
                  </td>
                );
              } else {
                return (
                  <td key={head.path || head.key}>
                    {this.renderList(arr, head)}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
  renderList = (arr, head) => {
    if (head.label) return _.get(arr, head.path);
    else return head.content(arr);
  };
}

export default TableBody;
