document.querySelectorAll('.menu_item').forEach(el => {
	el.addEventListener("click", (e) => {
		document.querySelector('.menu_item.active').classList.remove('active');
		el.classList.add("active");
	})
})
