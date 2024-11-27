function add() {
    var addItems = document.getElementById('text').value;
    if (addItems.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    var divv = document.createElement('div');
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'ul');
    var li = document.createElement('li');

    var delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('onclick', "delette(this)");
    delBtn.setAttribute('class', "delete");

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('onclick', 'edit(this)');
    editBtn.setAttribute('class', "edit");

    li.textContent = addItems;
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    divv.appendChild(ul);

    document.getElementById('container').appendChild(divv);
    document.getElementById('text').value = '';
  }

  function delette(delBtn) {
    delBtn.parentNode.remove();
  }

  function delall() {
    var con = document.getElementById('container');
    con.innerHTML = '';
  }

  function edit(editBtn) {
    var old = editBtn.parentNode.firstChild.textContent;
    var neww = prompt("Update your task", old);
    if (neww !== null && neww.trim() !== '') {
      editBtn.parentNode.firstChild.textContent = neww;
    }
  }