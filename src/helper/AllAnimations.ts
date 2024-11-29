import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const animateBlogCards = (cards: any, card2: any) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });

    tl.fromTo(
        cards,
        { y: 100, opacity: 0, scale: 0, rotateY: 180, duration: 5 },
        { y: 0, opacity: 1, scale: 1, rotateY: 0, stagger: 0.2, duration: 8 }
    );

    tl.fromTo(
        card2,
        { y: 100, opacity: 0, scale: 0, duration: 4 },
        { y: 0, opacity: 1, scale: 1, duration: 4 }
    );

};

export const animationArticles = (cards: any) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: cards,
            start: 'top 100%',
            end: 'top 50%',
            scrub: true,
        },
    });
    tl.fromTo(cards, {
        y: 100,
        opacity: 0,
        duration: 2,
        scale: 0,
        rotateX: 360
    }, {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.2,
        scale: 1,
        rotateX: 0
    })
}

export const animationAbout = (title: any, heading: any, para: any, btn: any, image: any) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });

    tl.fromTo(title,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
    )
        .fromTo(heading,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2 }, '-=2'
        )
        .fromTo(para,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2 }, '-=1'
        )
        .fromTo(btn,
            { x: -100, scale: 0, opacity: 0 },
            { x: 0, scale: 1, opacity: 1, duration: 1.5 }, '-=1'
        )
        .fromTo(image,
            { x: 100, scale: 0, rotate: 90, opacity: 0 },
            { x: 0, opacity: 1, duration: 3, scale: 1, rotate: 0 }, '-=3'
        );
}

export const animationNews = (card: any) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 2,
        },
    });
    tl.fromTo(card, {
        x: 2000,
        opacity: 0,
        duration: 3,
        scale: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 8,
        scale: 1,
        stagger: 4
    })
}