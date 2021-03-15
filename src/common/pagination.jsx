import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  render() {
    let list = Math.ceil(this.props.listLength / this.props.listNum);
    let page = _.range(1, list + 1);
    return (
      <nav style={{ margin: "2em" }} aria-label="Page navigation example">
        <ul className="pagination">
          {page.map((num) => {
            return (
              <li
                onClick={() => this.props.pageHandler(num)}
                key={num}
                className={
                  this.props.currentPage === num
                    ? "page-item active"
                    : "page-item "
                }
              >
                <a href="#/"  className="page-link">{num}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
