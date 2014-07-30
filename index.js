function buttonclick() {

	var head = document.getElementById('head'),
		head = head.value,
	    desc = document.getElementById('desc'),
	    desc = desc.value,
	    newdiv = document.createElement('div');
	newdiv.innerHTML = ('<br>' + head + '<br>' + desc);

	var rectangle = document.getElementsByClassName('rectangle')[0],
		olddiv = rectangle.lastChild;
		
	rectangle.removeChild(olddiv);
	rectangle.appendChild(newdiv);
}