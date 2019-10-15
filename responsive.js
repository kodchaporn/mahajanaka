window.onload = checkWidth();
function checkWidth(){
	let chkWidth = document.body.getBoundingClientRect();
	if (chkWidth.width < 400) {
		myTopnav.classList.add("topnav");
		// logo.outerHTML = "";
	}
	else{
		myTopnav.outerHTML = "";
		logo.src = `img/home/logo.svg`;
	}
}

