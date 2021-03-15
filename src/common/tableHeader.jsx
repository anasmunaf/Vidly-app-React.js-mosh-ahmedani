import React from "react";
const TableHeader = (props) => {
  const { head, sorting, movies } = props;
  return (
    <thead>
      <tr key={Math.random()}>
        {head.map((item) => {
          return (
            <th key={item.path} onClick={() => sorting(movies, item.path)}>
              {item.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
