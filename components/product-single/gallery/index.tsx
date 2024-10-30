import { useState } from "react";

type GalleryProductType = {
  productImages: GalleryProductImagesType[];
}
type GalleryProductImagesType = {
  imageId: string;
  productId: string;
  imageName: string;
  imageData: string;
}

const Gallery = ({ productImages }: GalleryProductType) => {
  const [selectedImage, setSelectedImage] = useState(productImages[0].imageData);

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {productImages.map(productImage => (
          <div key={productImage.imageName} onClick={() => setSelectedImage(productImage.imageData)} className="product-gallery__thumb">
            {/* <img src={productImages} alt="" /> */}
            <img src={`data:image/png;base64,${productImage ? productImage.imageData : ''}`} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
      <img src={`data:image/png;base64,${selectedImage}`} alt="Product" />
      </div>
    </section>
  );
};
  
export default Gallery;
  