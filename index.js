function buttonclick() {

	var head = document.getElementById('head');
	var	head = head.value;
	var desc = document.getElementById('desc');
	var desc = desc.value;
	var newdiv = document.createElement('div');
	newdiv.innerHTML = ('<br>' + head + '<br>' + desc);
	var rectangle = document.getElementsByClassName('rectangle')[0];
	rectangle.appendChild(newdiv);
}