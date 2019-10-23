window.onload = toHomepage();
function toHomepage(){
	clearClick();
	homepage.classList.add("home-1");
	obj.classList.add("home-2");
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick();
	homepage.classList.add("story");
	obj.classList.add("obj-s");
	obj.classList.add("obj-scale");
	m_story.classList.add("clickMenu");
	m_story.classList.add("lightGreen");
	captionText.innerText = "“เรื่องย่อพระราชนิพนธ์พระมหาชนกของพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลเดช”";
	captionText.classList.add("lightGreen");
	clickMe.addEventListener("click", goIntoStory);
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick();
	homepage.classList.add("history");
	obj.classList.add("obj-h");
	obj.classList.add("obj-scale");
	m_history.classList.add("clickMenu");
	m_history.classList.add("lightOrange");
	captionText.classList.add("lightOrange");
	captionText.innerText = "“ประวัติความเป็นมาของพระราชนิพนธ์พระมหาชนก และผลงานการประพันธ์ของพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลเดช”";
	clickMe.addEventListener("click", goIntoHistory);

}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick();
	homepage.classList.add("media");
	obj.classList.add("obj-m");
	obj.classList.add("obj-scale");
	m_media.classList.add("clickMenu");
	m_media.classList.add("darkOrange");
	captionText.classList.add("darkOrange");
	captionText.innerText = "“ผลงานฉบับตีพิมพ์ ผลงานการ์ตูน และ แอนิเมชั่น”";
	clickMe.addEventListener("click", goIntoMedia);
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick();
	homepage.classList.add("artist");
	obj.classList.add("obj-a");
	obj.classList.add("obj-scale");
	m_artist.classList.add("clickMenu");
	m_artist.classList.add("green");
	captionText.classList.add("green");
	captionText.innerText = "“คลังภาพรวบรวมศิลปินที่ถวายผลงานภาพประกอบพระราชนิพนธ์พระมหาชนก”";
	clickMe.addEventListener("click", goIntoArtist);
}

function clearClick(){
	captionText.innerText = "";
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
	captionText.classList.remove("green");
	captionText.classList.remove("lightGree");
	captionText.classList.remove("lightOrange");
	captionText.classList.remove("darkOrange");
}

function goIntoStory(){
	location.href = "story.html";
}

function goIntoHistory(){
	location.href = "history.html";
}
function goIntoMedia(){
	location.href = "media.html";
}
function goIntoArtist(){
	location.href = "artist.html";
}

