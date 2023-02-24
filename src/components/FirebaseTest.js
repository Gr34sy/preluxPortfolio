import React from "react";
import { useState, useEffect } from "react";

import firebaseApp from "../firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export function FirebaseTest(){
const [imagesRefs, setImagesRefs] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const storage = getStorage(firebaseApp);
    const listRef = ref(storage, 'images');

    listAll(listRef)
    .then((res) => {
        setImagesRefs([...res.items]);
        setIsLoaded(true);
    })
    .catch((error) => {
        console.error(error);
    })
}, []);

    return(
        <section style = {{backgroundColor: 'white'}}>
            {isLoaded && imagesRefs.map(
                async (imageRef, id) => {
                    const url = await getDownloadURL(imageRef)
                    return <img src={url} alt="Digital Art" key={id}/>
                }
            )}
        </section>
    )
}