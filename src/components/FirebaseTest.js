import React from "react";
import { useState, useEffect } from "react";

import firebaseApp from "../firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export function FirebaseTest(){
const [imagesRefs, setImagesRefs] = useState([]);

useEffect(() => {
    const storage = getStorage(firebaseApp);
    const listRef = ref(storage, 'images');

    listAll(listRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
            setImagesRefs([ ...imagesRefs, itemRef]);
        })
    })
    .then(() => {
        console.log(imagesRefs);
    })
    .catch((error) => {
        console.error(error);
    })
}, []);

    return(
        <section style = {{backgroundColor: 'white'}}>
            {imagesRefs.map(
                (imageRef) => {
                    return <img src={imageRef} alt="Digital Art"/>;
                }
            )}
        </section>
    )
}