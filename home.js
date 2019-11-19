window.onload = toHomepage();
function toHomepage(){
	clearClick();
	homepage.classList.add("home-1");
	obj.classList.add("home-2");
	obj2.classList.add("home-4");
	obj3.classList.add("home-3");
	btn.classList.add("setDisplay");
}

document.getElementById("m_story").onclick = function() {clickStory()};

function clickStory() {
	clearClick();
	btn.classList.remove("setDisplay");
	btn.classList.add("lightGreen-b");
	homepage.classList.add("story");
	obj.classList.add("obj-s");
	obj2.classList.add("obj-s2");
	obj3.classList.add("obj-s3");
	m_story.classList.add("clickMenu");
	m_story.classList.add("lightGreen");
	captionText.innerText = "“เรื่องย่อพระราชนิพนธ์"+"\n"+"พระมหาชนกของพระบาทสมเด็จ"+"\n"+"พระปรมินทรมหาภูมิพลอดุลเดช”";
	captionText.classList.add("lightGreen");
	abtn.href = "story.html";
}

document.getElementById("m_history").onclick = function() {clickHistory()};

function clickHistory() {
	clearClick();
	btn.classList.remove("setDisplay");
	btn.classList.add("lightOrange-b");
	homepage.classList.add("history");
	obj.classList.add("obj-h");
	obj2.classList.add("obj-h2");
	obj3.classList.add("obj-h3");
	m_history.classList.add("clickMenu");
	m_history.classList.add("lightOrange");
	captionText.classList.add("lightOrange");
	captionText.innerText = "“ประวัติความเป็นมาของพระราชนิพนธ์พระมหาชนกและผลงานการประพันธ์ของ"+"\n"+"พระบาทสมเด็จพระปรมินทร-"+"\n"+"มหาภูมิพลอดุลเดช”";
	abtn.href = "history.html";

}

document.getElementById("m_media").onclick = function() {clickMedia()};

function clickMedia() {
	clearClick();
	btn.classList.remove("setDisplay");
	btn.classList.add("darkOrange-b");
	homepage.classList.add("media");
	obj.classList.add("obj-m");
	obj2.classList.add("obj-m2");
	obj3.classList.add("obj-m3");
	m_media.classList.add("clickMenu");
	m_media.classList.add("darkOrange");
	captionText.classList.add("darkOrange");
	captionText.innerText = "“ผลงานฉบับตีพิมพ์ ผลงานการ์ตูน"+"\n"+"และแอนิเมชั่น”";
	abtn.href = "media.html";
}

document.getElementById("m_artist").onclick = function() {clickArtist()};

function clickArtist() {
	clearClick();
	btn.classList.remove("setDisplay");
	btn.classList.add("green-b");
	homepage.classList.add("artist");
	obj.classList.add("obj-a");
	obj2.classList.add("obj-a2");
	m_artist.classList.add("clickMenu");
	m_artist.classList.add("green");
	captionText.classList.add("green");
	captionText.innerText = "“คลังภาพรวบรวมศิลปินที่ถวายผลงานภาพประกอบพระราชนิพนธ์พระมหาชนก”";
	abtn.href = "artist.html";
}

function clearClick(){
	captionText.innerText = "";
	obj.classList.remove("obj-scale");
	homepage.classList.remove("home-1");
	obj.classList.remove("home-2");
	obj2.classList.remove("home-4");
	obj3.classList.remove("home-3");
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
	obj2.classList.remove("obj-h2");
	obj3.classList.remove("obj-h3");
	obj.classList.remove("obj-s");
	obj2.classList.remove("obj-s2");
	obj3.classList.remove("obj-s3");
	obj.classList.remove("obj-a");
	obj2.classList.remove("obj-a2");
	obj.classList.remove("obj-m");
	obj2.classList.remove("obj-m2");
	obj3.classList.remove("obj-m3");
	captionText.classList.remove("green");
	captionText.classList.remove("lightGree");
	captionText.classList.remove("lightOrange");
	captionText.classList.remove("darkOrange");
	btn.classList.remove("green-b");
	btn.classList.remove("lightGree-b");
	btn.classList.remove("lightOrange-b");
	btn.classList.remove("darkOrange-b");
	abtn.href = "#";
}

/*function goIntoStory(){
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

function goIntoNo() {
	location.href = "#";
}*/

