import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Slider from '../components/slider';
import ShopInfo from '../components/ShopInfo';
import LeftAside from '../components/homelayout/Topside';
import Topside from '../components/homelayout/Topside';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main>
          <section>
            <Slider></Slider>
            <ShopInfo></ShopInfo>
          </section>
          <div className="max-w-11/12 mx-auto my-5">
            <Topside>
            </Topside>
          </div>
          <div className="max-w-11/12 mx-auto my-5 grid grid-cols-3">
            <section className="main">
              <Outlet></Outlet>
            </section>
          </div>
        </main>
      </div>
    );
};

export default HomeLayout;