import React from "react";

import "./ItemList.css";

const ItemList = (props) => {
    const { data, onSelectedItem, children } = props;
    console.log(props);

    return (
        <ul className="item-list list-group">
            {data.map((item) => {
                return (
                    <li
                        className="list-group-item"
                        key={item.id}
                        onClick={() => {
                            onSelectedItem(item.id);
                        }}
                    >
                        {children(item)}
                    </li>
                );
            })}
        </ul>
    );
};

export default ItemList;
