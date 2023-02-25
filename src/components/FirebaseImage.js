import React from "react";
import { useState, useEffect } from "react";

import firebaseApp from "../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export function FirebaseImage({imgClass, imgNum, format}){
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        const storage = getStorage(firebaseApp);
        const pathRef = ref(storage, `images/photo${imgNum}.${format}`);
    
        getDownloadURL(pathRef)
        .then((url) => setImgUrl(url))
        .catch((error) => {
            setImgUrl('error');
            console.error(error);
            console.error('Probably there is no such an image in storage');
        });
    
        return setImgUrl(null);
    }, []);

    return(
        <>
            {imgUrl && <img src={imgUrl} alt="Digital Art" className={imgClass}/>}
        </>
    )
}