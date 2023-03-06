import React from "react";
import { GalleryItem } from './GalleryItem';

export function Gallery(){
    return(
        <section className="gallery" id="gallery">
            <h2 className="gallery__title">Gallery</h2>
            <div className="gallery__container">
                <GalleryItem imgNum='1'  format="png"/>
                <GalleryItem imgNum='2'  format="jpg"/>
                <GalleryItem imgNum='3'  format="jpg"/>
                <GalleryItem imgNum='4'  format="jpg"/>
                <GalleryItem imgNum='5'  format="png"/>
                <GalleryItem imgNum='1'  format="png"/>
                <GalleryItem imgNum='2'  format="jpg"/>
                <GalleryItem imgNum='3'  format="jpg"/>
                <GalleryItem imgNum='4'  format="jpg"/>
                <GalleryItem imgNum='5'  format="png"/>
            </div>
        </section>
    )
}