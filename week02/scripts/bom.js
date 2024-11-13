button.addEventListener('click', function() {
    const button = document.querySelector('button')
  });

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });

  input.value = '';

  input.focus();












const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textCintent = input.value;
deleteButton.textContent = 'X';
list.append(li);
