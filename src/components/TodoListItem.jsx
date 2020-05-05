import React from 'react';


const TodoListItem = (props) => {
    const {title} = props;

    return (
        <li class="list-group-item">
        <div class="app-list-item d-flex justify-content-between important like">
          <span class="app-list-item-label" id="list1">
          {title}
          </span>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center">
              <button type="button" class="btn-check btn-sm">
                <i class="fa fa-check"></i>
              </button>
              <button type="button" class="btn-trash btn-sm">
                <i class="fa fa-trash-o"></i>
              </button>
              <i class="fa fa-heart"></i>
            </div>
          </div>
        </div>
      </li>
    )
};

export default TodoListItem; 