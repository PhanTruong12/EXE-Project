import { GetServerSideProps } from 'next'

import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
// import { server } from '../../utils/server'; 

// types
import { ProductType } from 'types';
import { getData } from 'utils/services';

type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid; // Lấy pid từ query
  const product = await getData(`/Products/GetProductById/${pid}`); // Gọi API để lấy sản phẩm

  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState('description');
  const [feedbacksCount, setFeedbacksCount] = useState<number | null>(null);
  const handleFeedbackAdded = () => {
    setFeedbacksCount((feedbacksCount ? feedbacksCount:0)+1);
  };
  useEffect(() => {
    setFeedbacksCount(product.feedbacks.length);
  }, []);
  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery productImages={product.productImages} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews ({feedbacksCount})</button>
            </div>

            <Description product={product} show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} onFeedbackAdded={handleFeedbackAdded}/>
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
