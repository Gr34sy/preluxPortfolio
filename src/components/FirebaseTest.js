import React from "react";
import { useState, useEffect } from "react";

import firebaseApp from "../firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export function FirebaseTest(){
const [imageUrl, setImageUrl] = useState(null);

useEffect(() => {
    const storage = getStorage(firebaseApp);
    const listRef = ref(storage, 'images');
    const pathRef = ref(storage, 'images/photo1.png');

    getDownloadURL(pathRef)
    .then((url) => setImageUrl(url))
}, []);


    return(
        <section style = {{backgroundColor: 'white'}}>
            
            <img src={imageUrl} alt="Digital Art"/>
                
        </section>
    )
}