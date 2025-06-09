const left = document.getElementById("left")
const right = document.getElementById("right")
const img = document.getElementById("img")

const imgs = document.querySelectorAll('.img');


for (const img of imgs) {
  left.addEventListener('click', () => {
		if (img.classList.contains('toLeft')) {
			img.classList.remove('toLeft');
			left.innerText = "왼쪽으로 돌리기";
			return;
		}
		if (img.classList.contains('toRight')) {
			img.classList.remove('toRight');
			right.innerText = "오른쪽으로 돌리기";
		}
		img.classList.add('toLeft');
		left.innerText = "멈추기";
	});

	right.addEventListener('click', () => {
		if (img.classList.contains('toRight')) {
			img.classList.remove('toRight');
			right.innerText = "오른쪽으로 돌리기";
			return;
		}
		if (img.classList.contains('toLeft')) {
			img.classList.remove('toLeft');
			left.innerText = "왼쪽으로 돌리기";
		}
		img.classList.add('toRight');
		right.innerText = "멈추기";
	});
}