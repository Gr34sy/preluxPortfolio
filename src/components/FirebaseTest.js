import React from "react";
import firebaseApp from "../firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage(firebaseApp);
const listRef = ref(storage, 'images');

const imagesRefs = [];

listAll(listRef)
.then((res) => {
  res.items.forEach((itemRef) => {
    imagesRefs.push(itemRef);
  });
})
.then( () => {
    console.log(imagesRefs);
})
.catch((error) => {
  console.error(error);
});




export function FirebaseTest(){
    return(
        <section style = {{backgroundColor: 'white'}}>
            <img src='' alt='firebase image'/>
        </section>
    )
}