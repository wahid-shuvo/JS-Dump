var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var msg = document.getElementById('msg')

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItem);

window.addEventListener('load', (e) => {
    const data = JSON.parse(localStorage.getItem('key'));
    if (data) {
        data.forEach((element) => {
            listBuilder(element)
        });
    }

    var state = history.state || {};
    var reloadCount = state.reloadCount || 0;
    if (performance.navigation.type === 1) { // Reload
        state.reloadCount = ++reloadCount;
        history.replaceState(state, null, document.URL);
    } else if (reloadCount) {
        delete state.reloadCount;
        reloadCount = 0;
        history.replaceState(state, null, document.URL);
    }
    if (reloadCount >= 2) {
        // Now, do whatever you want...
        localStorage.clear()
    }

})

//Add item
function addItem(e) {

    //Get Input value
    var newItem = document.getElementById('item').value;

    if (newItem != '') {
        let data = Array.from(JSON.parse(localStorage.getItem("key")) || []);

        data.push(newItem)
        localStorage.setItem("key", JSON.stringify(data));
        listBuilder(newItem)
    } else {
        msg.classList = "alert alert-danger alert-dismissible fade show"
        msg.innerHTML = 'Please Enter The Value'
        setTimeout(() => msg.remove(), 3000)
        e.preventDefault()
        return false
    }

}

function listBuilder(newItem) {
    //Create a new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //Append Text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn)

    //Append li to list
    itemList.appendChild(li);

}

//Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//Filter Items
function filterItem(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get list
    var items = itemList.getElementsByTagName('li');
    // console.log(items)

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}



