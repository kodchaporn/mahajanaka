//window.onload = checkWidth();
window.addEventListener('resize', checkWidth);
function checkWidth(){
	console.log('gg')
	let chkWidth = document.body.getBoundingClientRect();
	if (chkWidth.width < 420) {
		myTopnav.classList.add("topnav");
		// myTopnav.style.display = "block";
		// logo.outerHTML = "";
	}
	else{
		myTopnav.classList.remove("topnav")
		// myTopnav.style.display = "none";
		logo.src = `img/home/logo.svg`;
	}
}

