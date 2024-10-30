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
  const featImage = productImages

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {productImages.map(productImages => (
          <div key={productImages.imageName} className="product-gallery__thumb">
            {/* <img src={productImages} alt="" /> */}
            <img src={`data:image/png;base64,${productImages ? productImages.imageData : ''}`} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={`data:image/png;base64,${featImage[0].imageData ?? ''}`} alt="Product" />
      </div>
    </section>
  );
};
  
export default Gallery;
  