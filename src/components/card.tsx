import React, { ReactElement, useEffect, useRef, } from 'react'

import gasp from "gsap";
interface Props {
    title: string,
    image: string,
    currentIndex: number,
    index: number,



}

const Card = (props: Props) => {
    //refrence 
    let rectangle = useRef(null);
    useEffect(() => {

    }, [])

    function enterAnimation() {
        gsap.to(rectangle, {
            css: {
                height: "16.666667%",
            }
        })
    }
    function leaveAnimation() {
        gsap.to(rectangle, {
            css: {
                height: "0",
            }
        })
    }

    return (
        <div>

            <div ref={rectangle} className={` bg-white  absolute top-0 w-full z-0  ${props.currentIndex == props.index ? enterAnimation : leaveAnimation}`}></div>
            <h1 className={`"font-bold font-sans z-30  absolute  top-14 mx-auto left-0 right-0  ${props.currentIndex == props.index ? 'text-black' : 'text-white'}`}>{props.title}</h1>

        </div>
    )
}

export default Card
