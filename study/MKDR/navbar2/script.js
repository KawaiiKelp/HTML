const myTarget = document.querySelector(".target");
const links = document.querySelectorAll(".mynav a");
const colors = ['deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue'];

for (let i = 0; i < links.length; i++) {
    // a 링크의 기본 기능 사용하지 않게 하기
    links[i].addEventListener("click", (event) => {
        event.preventDefault();
    });
    // 마우스가 들어왔을 때
    links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc(event) {
    // 내가 선택한 요소에 active가 없다면 나머지에 있는 것도 전부 빼주기
    if (!event.target.parentNode.classList.contains("active")) {

        // 마우스가 올라가지 않은 다른 메뉴들마다 할 일
        for (let i = 0; i < links.length; i++) {

            // 부모 요소에 active가 있는 것만 active를 빼준다.
            if (links[i].parentNode.classList.contains("active")) {
                links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = "0.25" // 다른 메뉴들 투명도 조절
        }
        event.target.parentNode.classList.add("active"); // 마우스 올라간 애만 active
        event.target.style.opacity = "1"; // 마우스 올라간 애만 opacity = 1

        moveBorder(event)
    }
}

function moveBorder(event) {
    // 올라간 타겟의 높이, 너비를 알아야한다.
    const width = event.target.getBoundingClientRect().width;    // 너비 가져오기
    const height = event.target.getBoundingClientRect().height;    // 높이 가져오기
    // 스크롤 양을 가져와야 하는 이유 : 사용자가 스크롤을 움직이면 target의 위치가 바뀐다 그러므로
    // 타겟은 그냥 화면에서의 위치만 가져올뿐 스크롤은 또 따로 가져와야 하나봄 
    const left = event.target.getBoundingClientRect().left + window.pageXOffset;     // 왼쪽 + x축 스트롤 양까지 가져와야함
    const top = event.target.getBoundingClientRect().top + window.pageYOffset;        // 위쪽 + y 축스크롤 양
    const color = colors[Math.floor(Math.random() * (colors.length))];  // 칼라 랜덤으로 만들기

    myTarget.style.width = `${width}px`;
    myTarget.style.height = `${height}px`;
    myTarget.style.left = `${left}px`;
    myTarget.style.top = `${top}px`;
    myTarget.style.borderColor = color;
}

// 사용자가 위치를 바꾸면 브라우저의 위치가 바뀌므로 border의 위치를 다시 잡아줘야함
function resizeFunc() {
    // 사이즈가 바뀌면 active의 위치를 다시 잡는다
    const active = document.querySelector(".mynav li.active");

    // active가 있으면
    if (active) {
        const left = active.getBoundingClientRect().left + window.pageXOffset;     // 왼쪽 + x축 스트롤 양까지 가져와야함
        const top = active.getBoundingClientRect().top + window.pageYOffset;        // 위쪽 + y 축스크롤 양

        myTarget.style.left = `${left}px`;
        myTarget.style.top = `${top}px`;
    }
}

// 윈도우의 사이즈가 변경되면
window.addEventListener("resize", resizeFunc)