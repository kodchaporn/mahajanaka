window.onload = toHomepage();
function toHomepage(){
	clearClick();
	homepage.classList.add("home-1");
	obj.classList.add("home-2");
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick()
	// caption.innerText = "เรื่องย่อพระราชนิพนธ์พระมหาชนก";
	homepage.classList.add("story");
	obj.classList.add("obj-s");
	obj.classList.add("obj-scale");
	m_story.classList.add("clickMenu");
	m_story.classList.add("lightGreen");
	document.getElementById("obj").onclick = function() {window.location.href = "story.html";};
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick();
	// caption.innerText = "ประวัติความเป็นมาของพระราชนิพนธ์พระมหาชนก และผลงานการประพันธ์ของพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลเดช";
	homepage.classList.add("history");
	obj.classList.add("obj-h");
	obj.classList.add("obj-scale");
	m_history.classList.add("clickMenu");
	m_history.classList.add("lightOrange");
	document.getElementById("obj").onclick = function() {window.location.href = "history.html";};

}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick()
	// caption.innerText = "ผลงานฉบับตีพิมพ์ ผลงานการ์ตูน และ แอนิเมชั่น";
	homepage.classList.add("media");
	obj.classList.add("obj-m");
	obj.classList.add("obj-scale");
	m_media.classList.add("clickMenu");
	m_media.classList.add("darkOrange");
	document.getElementById("obj").onclick = function() {window.location.href = "media.html";};
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick()
	// caption.innerText = "คลังภาพรวบรวมศิลปินที่ถวายผลงานภาพประกอบพระราชนิพนธ์พระมหาชนก";
	homepage.classList.add("artist");
	obj.classList.add("obj-a");
	obj.classList.add("obj-scale");
	m_artist.classList.add("clickMenu");
	m_artist.classList.add("green");
	document.getElementById("obj").onclick = function() {window.location.href = "artist.html";};
}

function clearClick(){
	// caption.innerText = "";
	obj.classList.remove("obj-scale");
	homepage.classList.remove("home-1");
	obj.classList.remove("home-2");
	m_story.classList.remove("clickMenu");
	m_story.classList.remove("lightGreen");
	m_history.classList.remove("clickMenu");
	m_history.classList.remove("lightOrange");
	m_media.classList.remove("clickMenu");
	m_media.classList.remove("darkOrange");
	m_artist.classList.remove("clickMenu");
	m_artist.classList.remove("green");
	homepage.classList.remove("story");
	homepage.classList.remove("history");
	homepage.classList.remove("media");
	homepage.classList.remove("artist");
	obj.classList.remove("obj-h");
	obj.classList.remove("obj-s");
	obj.classList.remove("obj-a");
	obj.classList.remove("obj-m");
}

function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}


