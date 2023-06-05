window.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".btn-toggle").addEventListener("click", function(){
		document.querySelector("body").classList.toggle("dark-theme");
	});
});