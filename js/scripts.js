/* NOTES FOR LATER USE
$('input').each(function (i) {
	let inputValue = $(this).val();
	let inputName = $(this).attr('name');
	if(inputValue().length < 1){
	  console.log('Please fill out the ' + inputName + ' field')
	}
});
*/

function newItem() {
	// Add a new item to the list of items
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		$('#list').append(li);
	}

	// Cross out an item from the list of items
	li.on('dblclick', function() {
		li.toggleClass('strike');
	});

	// Add the delete button 'X'
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	// Delete list item when delete botton clicked
	crossOutButton.on('click', function() {
		li.addClass('delete');
	});

	// Allow list items to be sortable
	$('#list').sortable();
}