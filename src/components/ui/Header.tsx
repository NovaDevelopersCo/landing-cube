'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1Cube');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="bg-gray-800 text-white ">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Your Logo</h1>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === '1Cube' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
              onClick={() => handleTabClick('1Cube')}
            >
              1Cube
            </button>
          </Link>
          <Link href="/cubeCss">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === '2Cube' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
              onClick={() => handleTabClick('2Cube')}
            >
              2Cube
            </button>
          </Link>
          <Link href="/3">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === '3Cube' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
              onClick={() => handleTabClick('3Cube')}
            >
              3Cube
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
