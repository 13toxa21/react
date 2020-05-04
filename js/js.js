
  fetch('https://todo-a7861.firebaseio.com/todos.json')
  .then(response => response.json())
  .then(title => document.getElementById('list1').innerHTML = (title[0].title));

  fetch('https://todo-a7861.firebaseio.com/todos.json')
  .then(response => response.json())
  .then(title => document.getElementById('list2').innerHTML = (title[1].title));

  fetch('https://todo-a7861.firebaseio.com/todos.json')
  .then(response => response.json())
  .then(title => document.getElementById('list3').innerHTML = (title[2].title));