import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  items: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    /** Basic Gallery Example */

    // Creat gallery items
    // this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    // /** Lightbox Example */

    // // Get a lightbox gallery ref
    // const lightboxRef = this.gallery.ref('lightbox');

    // // Add custom gallery config to the lightbox (optional)
    // lightboxRef.setConfig({
    //   imageSize: ImageSize.Cover,
    //   thumbPosition: ThumbnailsPosition.Top
    // });

    // // Load items into the lightbox gallery ref
    // lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/certificates/1.png',
    previewUrl: 'assets/certificates/1.png'
  },
  {
    srcUrl: 'assets/certificates/2.png',
    previewUrl: 'assets/certificates/2.png'
  },
  {
    srcUrl: 'assets/certificates/3.png',
    previewUrl: 'assets/certificates/3.png'
  },
  {
    srcUrl: 'assets/certificates/4.png',
    previewUrl: 'assets/certificates/4.png'
  },
  {
    srcUrl: 'assets/certificates/5.png',
    previewUrl: 'assets/certificates/5.png'
  },
  {
    srcUrl: 'assets/certificates/6.png',
    previewUrl: 'assets/certificates/6.png'
  },
  {
    srcUrl: 'assets/certificates/7.png',
    previewUrl: 'assets/certificates/7.png'
  },
  {
    srcUrl: 'assets/certificates/8.png',
    previewUrl: 'assets/certificates/8.png'
  },
  {
    srcUrl: 'assets/certificates/9.png',
    previewUrl: 'assets/certificates/9.png'
  },
  {
    srcUrl: 'assets/certificates/10.jpg',
    previewUrl: 'assets/certificates/10.jpg'
  },
  {
    srcUrl: 'assets/certificates/11.png',
    previewUrl: 'assets/certificates/11.png'
  },
  {
    srcUrl: 'assets/certificates/12.png',
    previewUrl: 'assets/certificates/12.png'
  },
  {
    srcUrl: 'assets/certificates/13.png',
    previewUrl: 'assets/certificates/13.png'
  },
  {
    srcUrl: 'assets/certificates/14.png',
    previewUrl: 'assets/certificates/14.png'
  },
  {
    srcUrl: 'assets/certificates/15.png',
    previewUrl: 'assets/certificates/15.png'
  }
];