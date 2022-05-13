/*
$('input').each(function (i) {
	let inputValue = $(this).val();
	let inputName = $(this).attr('name');
	if(inputValue().length < 1){
	  console.log('Please fill out the ' + inputName + ' field')
	}
});
*/

function newItem() {
	// 1. Add a new item to the list of items
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		let list = $('#list');
		list.append(li);
	}

	// 2. Cross out an item from the list of items
	function crossOut() {
		li.addClass('strike');
	}

	li.on('dblclick', crossOut);

	// 3(i). Add the delete button 'X'
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	// 3(ii). Add class .delete (display: none) from the css
	function deleteListItem() {
		li.addClass('delete');
	}

	crossOutButton.on('click', deleteListItem);

	// 4. Reorder the items
	$('#list').sortable();
}