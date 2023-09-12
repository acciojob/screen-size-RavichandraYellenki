//your JS code here. If required.
function updateWindowSize(){
	const width = window.innerWidth;
	const height = window.innerHeight;

	document.getElementById('h1tag').innerText =`Width: ${width} and Height: ${height} `;
}
updateWindowSize();

window.addEventListener('resize',updateWindowSize);