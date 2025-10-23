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
        <header className="max-w-16/16 mx-auto">
          <Header></Header>
        </header>
        <main className="max-w-16/16 mx-auto">
          <section>
            <Slider></Slider>
            <ShopInfo></ShopInfo>
          </section>
          <div className="max-w-11/12 mx-auto my-5">
            <Topside></Topside>
          </div>
          <div>
            <section className="max-w-11/12 mx-auto my-5">
              <Outlet></Outlet>
            </section>
          </div>
        </main>
      </div>
    );
};

export default HomeLayout;