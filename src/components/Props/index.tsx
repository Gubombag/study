import Image from "next/image"
import Alexa from "../../../public/images/Alexa.png"
import { useState } from "react";
import Properties from "./props"
import Home from "@/pages/index"

let nome = [
    {
        subject: "Gustavo",
        ImageId: "0101",
    },
    {
        subject:"Artur",
        ImageId: "01010101"
    }
]

const Profile = (props:Properties, handleClick) => {
    return(
        <>
            <div>
                <Image 
                    width={300}
                    height={300}
                    alt="Teste"
                    src={Alexa}
                />
                <p>{nome[0].subject} {nome[0].ImageId}</p>
                <button onChange={() => handleClick()}></button>
            </div>   
        </>
    )
}

export default Profile;