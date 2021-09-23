import React, { useState } from 'react'
import Card from '../components/card'
// import gsap from "gsap";

interface Props {

}


let cardData: { title: string, image: string, }[] = [
    {
        title: "kakashi",
        image: "https://images2.alphacoders.com/108/thumb-1920-108142.jpg"

    },
    {
        title: "Madara",
        image: "https://images2.alphacoders.com/508/thumb-1920-508287.jpg"

    },
    {
        title: "Obito",
        image: "https://images5.alphacoders.com/528/thumb-1920-528725.jpg"

    },
    {
        title: "Sasuke",
        image: "https://images3.alphacoders.com/820/thumb-1920-82029.jpg"

    },
    {
        title: "Itachi",
        image: "https://images2.alphacoders.com/120/thumb-1920-120600.png"

    },

];

const HomePage = (props: Props) => {
    let imgs = "https://images2.alphacoders.com/108/thumb-1920-108142.jpg"
    const [currentImage, SetCurrentImage] = useState(cardData[0]["image"]);
    const [state, setstate] = useState(0);


    function handleMouseEnter(index: number) {
        SetCurrentImage(cardData[index]["image"]);
        setstate(index);
    }
    return (
        <div className="w-full h-4/5 " style={{ backgroundImage: `url(${currentImage})` }} >
            {/* <img src={imgs} alt="" /> */}
            <div className="grid grid-cols-5   h-full">
                {
                    cardData.map((item, index) => {
                        return <div key={index} className="border-r border-gray-500 relative" onMouseEnter={() => handleMouseEnter(index)}> <Card title={item.title} image={item.image} currentIndex={state} index={index} /></div>
                    })
                }

            </div>

        </div>
    )
}

export default HomePage
