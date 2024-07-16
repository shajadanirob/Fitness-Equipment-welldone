import React from 'react';
import Banner from '../../components/Ui/Banner';
import Category from '../../components/Ui/Category';
import FeaturedProducts from '../../components/Ui/FeaturedProducts';
import BenefitsSection from '../../components/Ui/Benifits';
import MosaicView from '../../components/Ui/MosainView';

const HomePage = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <FeaturedProducts/>
          <BenefitsSection/>
          <MosaicView/>
        </div>
    );
};

export default HomePage;