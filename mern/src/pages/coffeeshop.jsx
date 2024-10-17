import React from 'react';

import image from '../assets/cinnacocoa.svg';
import imagea from '../assets/drizzwcar.svg';
import imageb from '../assets/burstingblue.svg';
import imagec from '../assets/greenc.svg';
import imaged from '../assets/brownc.svg';
import imagee from '../assets/coff3.svg';

export default function CoffeeShop() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/6 bg-gray-100 p-4">
        <div className="flex flex-col items-center">
          <div className="bg-brown-500 p-4 rounded-full mb-4">
            <i className="fas fa-coffee text-white text-2xl"></i>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-brown-500 font-bold">Cappuccino</a>
            <a href="#" className="text-gray-600">Latte</a>
            <a href="#" className="text-gray-600">Americano</a>
            <a href="#" className="text-gray-600">Espresso</a>
            <a href="#" className="text-gray-600">Flat White</a>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-2/3">
            <input
              type="text"
              placeholder="Browse your favourite coffee here.."
              className="bg-gray-200 outline-none flex-grow"
            />
            <i className="fas fa-search text-gray-600"></i>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <i className="fas fa-shopping-cart text-brown-500 text-2xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </div>
            <span className="text-brown-500 font-bold">ORDER STATUS</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-2 border-brown-500">
            <img src={image} alt="Cinnamon and Cocoa" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Cinnamon and Cocoa</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹299</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={imagea} alt="Drizzled with Caramel" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Drizzled with Caramel</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹99</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={imageb} alt="Bursting Blueberry" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Bursting Blueberry</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹99</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={imagec} alt="Coffee Image" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Coffee Name</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹99</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={imaged} alt="Coffee Image" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Coffee Name</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹99</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={imagee} alt="Coffee Image" className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Coffee Name</h3>
            <div className="flex items-center justify-between">
              <span className="text-brown-500 font-bold">₹99</span>
              <button className="bg-red-500 text-white rounded-full p-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
