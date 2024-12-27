'use client';

import Image from "next/image";
import carl from "../../public/randoms/carl.gif";
import catBoing from "../../public/randoms/cat-boing-magnet.gif";
import catExplosion from "../../public/randoms/cat-explosion.gif";
import nineteen from "../../public/randoms/cat-kitty.gif";
import feelThursday from "../../public/randoms/feel-that.gif";
import indianDrama from "../../public/randoms/indian-drama-soap-opera.gif";
import foil from "../../public/randoms/foiled.gif";
import seal from "../../public/randoms/seal-baikal-seal.gif";
import wall from "../../public/randoms/wall.gif";

let imageArray = [
    carl, catBoing, catExplosion, nineteen, feelThursday, indianDrama, foil, seal, wall
];

function pickImage() {
    let date = new Date();
    let rand = Math.floor(Math.random() * (imageArray.length - 1));

    //special days
    if (date.getDate() === 19) {
        return nineteen;
    } else if (date.getDay() === 3) {
        return feelThursday;
    } 

    return imageArray[rand];

}

export default function RandomImage() {

    let imgPath = pickImage();

    return(
        <>
            <Image
            src={imgPath}
            alt="random image :D" />
        </>
    );
}