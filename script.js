document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector('app input');
    var button = document.querySelector('app button');
    var dynamic = document.getElementById('dynamic');

    button.addEventListener('click', function() {
        var userInput = input.value;
        if (userInput) {
            var newItem = document.createElement('p');
            newItem.textContent = userInput;
            dynamic.appendChild(newItem);
            input.value = '';
        }
    });
});