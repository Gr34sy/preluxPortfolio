import React from "react";
import { GalleryItem } from './GalleryItem';

export function Gallery(){
    return(
        <section className="gallery">
            <div className="gallery__container">
                <GalleryItem imgNum='1'  format="png"/>
                <GalleryItem imgNum='2'  format="jpg"/>
                <GalleryItem imgNum='3'  format="jpg"/>
                <GalleryItem imgNum='4'  format="jpg"/>
                <GalleryItem imgNum='5'  format="png"/>
            </div>
        </section>
    )
}