document.addEventListener('DOMContentLoaded', () => {
    // 모든 내비게이션 링크를 가져옴
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 즉시 이동 막기
            event.preventDefault();

            // href 속성에서 대상 섹션의 ID 가져옴
            const targetId = this.getAttribute('href');

            // "Home" 링크인 경우 특별 처리: 페이지 맨 위로 스크롤
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // active 클래스도 바로 전환
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            } else {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // 모든 active 클래스 제거
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 스크롤 이벤트 발생 시 active 클래스 전환
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            // 섹션의 상단 위치와 뷰포트의 상단을 기준으로 현재 섹션 파악
            // 뷰포트의 상단에서 내비게이션 바 높이(예: 50px)를 빼서 정확도를 높일 수 있음
            const navHeight = document.querySelector('nav').offsetHeight;
            const sectionTop = section.offsetTop - navHeight;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 페이지 로드 시 초기 active 상태 설정
    // (새로고침 시 현재 스크롤 위치에 따라 active 링크를 설정)
    // 즉시 실행 함수로 감싸서 변수 스코프를 제한
    (function() {
        let initialCurrent = '';
        const navHeight = document.querySelector('nav').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        if (initialCurrent) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(initialCurrent)) {
                    link.classList.add('active');
                }
            });
        } else {
            // 페이지 로드 시 스크롤이 맨 위에 있을 경우 첫 번째 링크 활성화
            if (pageYOffset === 0 && navLinks.length > 0) {
                navLinks[0].classList.add('active');
            }
        }
    })
})