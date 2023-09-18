// import { MouseEvent } from 'react';

import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}


function ListGroup({items, heading}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  const getMessage = () => {
    return items.length === 0 ? <p>No Items found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;


