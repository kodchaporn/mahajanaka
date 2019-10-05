function toHomepage(){
	clearClick()
	homepage.classList.add("home");
	content.style.zIndex = -3;
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick()
	homepage.classList.add("story");
	m_story.classList.add("clickMenu");
	content.style.zIndex = 4;
	content.innerHTML = `Lorem ipsum dolor sit amet, consectetur 
	adipisicing elit, sed do eiusmod<br><button>Read more</button>`;
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick()
	homepage.classList.add("history");
	m_history.classList.add("clickMenu");
	content.style.zIndex = 4;
	content.innerHTML = `tempor incididunt ut labore et dolore magna 
	aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
	laboris nisi ut aliquip ex ea <br><button>Read more</button>`;
}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick()
	homepage.classList.add("media");
	m_media.classList.add("clickMenu");
	content.style.zIndex = 4;
	content.innerHTML = `ด่หก้ดหหวน่ดฟนร<br><button>Read more</button>`;
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick()
	homepage.classList.add("artist");
	m_artist.classList.add("clickMenu");
	content.style.zIndex = 4;
	content.innerHTML = `sdjfhsaihfak;hf;a<br><button>Read more</button>`;
}

function clearClick(){
	m_story.classList.remove("clickMenu");
	m_history.classList.remove("clickMenu");
	m_media.classList.remove("clickMenu");
	m_artist.classList.remove("clickMenu");
	homepage.classList.remove("story");
	homepage.classList.remove("history");
	homepage.classList.remove("media");
	homepage.classList.remove("artist");
}