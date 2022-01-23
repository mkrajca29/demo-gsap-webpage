document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    //===== Block 1

    gsap.fromTo("#path-11", {
        scale: 0.8,
        opacity: 0.5,
        transformOrigin: '50% 0%'
    },
        {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back(8)",
            scrollTrigger: {
                start: "150 top",
                end: "400 top",
                toggleActions: "play pause resume reset",
            }
        });


    gsap.fromTo("#arrow_1", {
        scale: 1.5,
        opacity: 0.5,
        rotation: -90,
        transformOrigin: '50% 50%'
    },
        {
            scale: 1,
            rotation: 0,
            opacity: 1,
            scrollTrigger: {
                start: "150 top",
                end: "400 top",
                scrub: true
            }
        }
    );

    gsap.fromTo("#data_people_icon",
        {
            opacity: 0,
            transformOrigin: '50% 100%'
        },
        {
            opacity: 1,
            scrollTrigger: {
                start: "150 top",
                end: "450 top",
                scrub: true,
            }
        }
    );

    gsap.fromTo("#Ataccamers",
        {
            x: 100,
            opacity: 0,
        },
        {
            x: 30,
            opacity: 1,
            scrollTrigger: {
                start: "100 top",
                end: "400 top",
                toggleActions: "restart",
                scrub: true
            }
        }
    );

    gsap.fromTo("#pill_1",
        {
            opacity: 0,
            x: 100
        },
        {
            opacity: 1,
            x: 320,
            scrollTrigger: {
                start: "300 top",
                end: "400 top",
                scrub: true,
                toggleActions: "restart",

            }
        }
    );

    gsap.fromTo("#planet_icon",
        {
            opacity: 0,
            rotation: 0,
            x: -400,
            transformOrigin: '50% 50%'
        },
        {
            opacity: 1,
            rotation: 720,
            x: 0,
            scrollTrigger: {
                start: "400 top",
                end: "600 top",
                toggleActions: "restart",
                scrub: true,

            }
        }
    );

    //===== Block 2

    gsap.to("#path-9",
        {
            scale: 1.2,
            opacity: 1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            scrollTrigger: {
                start: "550 top",
                end: "1000 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );

    gsap.fromTo("#path-9", {
        opacity: 0.6
    },
        {
            opacity: 1,
            scrollTrigger: {
                start: "550 top",
                end: "1000 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );

    gsap.fromTo("#nationalities",
        {
            x: -200,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                start: "550 top",
                end: "800 top",
                scrub: true
            }
        }
    );

    gsap.fromTo("#pill_2",
        {
            opacity: 0,
            x: 400
        },
        {
            opacity: 1,
            x: 100,
            scrollTrigger: {
                start: "600 top",
                end: "700 top",
                scrub: true,
                toggleActions: "restart",

            }
        }
    );

    //===== Block 3

    gsap.to("#path-7",
        {
            scale: 1.2,
            opacity: 1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            transformOrigin: '50% 50%',
            scrollTrigger: {
                start: "900 top",
                end: "1200 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );

    gsap.fromTo("#path-7", {
        opacity: 0.6
    },
        {
            opacity: 1,
            scrollTrigger: {
                start: "900 top",
                end: "1200 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );

    gsap.fromTo("#office_icon",
        {
            scaleY: 0,
            transformOrigin: '50% 100%'
        },
        {
            scaleY: 1,
            scrollTrigger: {
                start: "900 top",
                end: "1200 top",
                scrub: true,
            }
        }
    );

    gsap.fromTo("#offices",
        {
            x: 200,
            opacity: 0,
        },
        {
            x: 20,
            opacity: 1,
            scrollTrigger: {
                start: "900 top",
                end: "1200 top",
                toggleActions: "restart",
                scrub: true
            }
        }
    );

    gsap.fromTo("#pill_3",
        {
            opacity: 0,
            x: -200
        },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                start: "1100 top",
                end: "1200 top",
                scrub: true,
                toggleActions: "restart",

            }
        }
    );

    gsap.fromTo("#arrow_2", {
        opacity: 0,
        scale: 0,
        transformOrigin: '50% 50%'
    },
        {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                start: "1250 top",
                end: "1350 top",
                scrub: true,

            }
        }
    );

    gsap.fromTo("#arrow_2", {
        scale: 1,
        rotation: 180,
        transformOrigin: '50% 50%'
    },
        {
            scale: 1.5,
            rotation: 90,
            scrollTrigger: {
                start: "1400 top",
                end: "1500 top",
                scrub: true,

            }
        }
    );

    //===== Block 4

    gsap.to("#path-5",
        {
            scale: 1.2,
            opacity: 1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            transformOrigin: '50% 50%',
            scrollTrigger: {
                start: "1500 top",
                end: "1700 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );

    gsap.fromTo("#path-5", {
        opacity: 0.6
    },
        {
            opacity: 1,
            scrollTrigger: {
                start: "1500 top",
                end: "1700 top",
                toggleActions: "restart pause resume reset",
            }
        }
    );


    gsap.fromTo("#rocket_icon",
        {
            y: 50,
            x: -300,
            rotation: 50,
            opacity: 0,
            transformOrigin: '50% 100%'
        },
        {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scrollTrigger: {
                start: "1300 top",
                end: "1500 top",
                scrub: true,
            }
        }
    );

    gsap.fromTo("#clients",
        {
            x: -200,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                start: "1300 top",
                end: "1500 top",
                toggleActions: "restart",
                scrub: true
            }
        }
    );

    //===== Screenshot

    gsap.fromTo("#screenshot-img",
        {
            x: -200,
        },
        {
            x: 0,
            scrollTrigger: {
                trigger: "#screenshot-img",
                scrub: true
            }
        }
    );

    gsap.fromTo("#data-catalog",
        {
            scale: 0,
            transformOrigin: "50% 50%"
        },
        {
            scale: 1,
            scrollTrigger: {
                trigger: "#screenshot-img",
                scrub: true
            }
        }
    );

    gsap.fromTo("#data-quality",
        {
            scale: 0,
            transformOrigin: "50% 50%"
        },
        {
            scale: 1,
            scrollTrigger: {
                trigger: "#screenshot-img",
                scrub: true
            }
        }
    );

    //===== Draw path

    let pathLine1 = document.querySelector('#Line_1');
    let lengthLine1 = pathLine1.getTotalLength();
    TweenMax.set(pathLine1, { strokeDasharray: lengthLine1 });
    TweenMax.fromTo(pathLine1, 3, { strokeDashoffset: lengthLine1 }, {
        strokeDashoffset: 0,
        scrollTrigger: {
            start: "300 top",
            end: "600 top",
            toggleActions: "restart",
            scrub: true
        }
    });

    let pathLine2 = document.querySelector('#Line_2');
    let lengthLine2 = pathLine2.getTotalLength();
    TweenMax.set(pathLine2, { strokeDasharray: lengthLine2 });
    TweenMax.fromTo(pathLine2, 3, { strokeDashoffset: lengthLine2 }, {
        strokeDashoffset: 0,
        scrollTrigger: {
            start: "600 top",
            end: "900 top",
            toggleActions: "restart",
            scrub: true
        }
    });

    let pathLine3 = document.querySelector('#Line_3');
    let lengthLine3 = pathLine3.getTotalLength();
    TweenMax.set(pathLine3, { strokeDasharray: lengthLine3 });
    TweenMax.fromTo(pathLine3, 3, { strokeDashoffset: lengthLine3 }, {
        strokeDashoffset: 0,
        scrollTrigger: {
            start: "1100 top",
            end: "1400 top",
            toggleActions: "restart",
            scrub: true
        }
    });

    //===== Horizontal slider

    let arrowL = document.querySelector('#arrow-left');
    let arrowR = document.querySelector('#arrow-right');
    let cardsArray = document.querySelectorAll(".card");
    arrowL.addEventListener("click", moveRight);
    arrowR.addEventListener("click", moveLeft);
    let activeIndex = 0;

    function moveLeft() {

        if (activeIndex < cardsArray.length - 3) {
            activeIndex++;
            gsap.to(".content", { x: '-=' + 510 });
            console.log(activeIndex);
        }
        if (activeIndex == cardsArray.length - 3) {
            arrowR.src = "style/images/Arrow left.png";
            gsap.to("#arrow-right", { rotation: 180 });
        }
        if (activeIndex > 0) {
            arrowL.src = "style/images/Arrow right.png"
            gsap.to("#arrow-left", { rotation: 180 });
        }


    }
    function moveRight() {

        if (activeIndex > 0) {
            activeIndex--;
            gsap.to(".content", { x: '+=' + 510 });
        }
        if (activeIndex <= cardsArray.length - 3) {
            arrowR.src = "style/images/Arrow right.png";
            gsap.to("#arrow-right", { rotation: 0 });
        }
        if (activeIndex == 0) {
            arrowL.src = "style/images/Arrow left.png";
            gsap.to("#arrow-left", { rotation: 0 });
        }


    }

});