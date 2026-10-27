function highlight() {
    const link = document.getElementById("link");
	link.addEventListener('mouseenter',() => {
		const strong = document.querySelectorAll(".strong");;
		strong.style.color = "green";
	});
}


function return_normal() {
    const link = document.getElementById("link");
	link.addEventListener('mouseenter',() => {
		const strong = document.querySelectorAll(".strong");;
		strong.style.color = "black";
	});

    
}
