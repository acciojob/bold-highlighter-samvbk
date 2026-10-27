function highlight() {
    const link = document.getElementById("link");
	link.addEventListener('mouseenter',() => {
		const strong = document.querySelectorAll(".strong");
		strong.forEach((element) => {
			strong.style.color = "green";
		});
	});
}


function return_normal() {
    const link = document.getElementById("link");
	link.addEventListener('mouseleave',() => {
		const strong = document.querySelectorAll(".strong");;
		strong.forEach((element) => {
			strong.style.color = "black";
		});
	});

    
}
