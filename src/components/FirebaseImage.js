import React from "react";
import { useState, useEffect } from "react";

import firebaseApp from "../firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export function FirebaseTest({imgClass, imgNum}){
const [imgUrl, setImgUrl] = useState(null);

useEffect(() => {
    const storage = getStorage(firebaseApp);
    const pathRef = ref(storage, `images/photo${imgNum}.png`);

    getDownloadURL(pathRef)
    .then((url) => setImgUrl(url))
}, []);


    return(
        <>
            {imgUrl && <img src={imgUrl} alt="Digital Art" className={imgClass}/>}
        </>
    )
}