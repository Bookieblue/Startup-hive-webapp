'use client';
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/button';


const Navbar = () => {

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <nav className="flexBetween max-container padding-container w-full z-30 py-5 lg:py-6 bg-cream-50 fixed 2xl:relative">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={253}
          height={29}
          className="w-[80%] lg:full"
        />
      </Link>
      <div className="flexEnd gap-5 lg:gap-8">
        {isSearchExpanded ? (
          <div className="flex absolute max-sm:ml-[6%] max-lg:right-16 lg:relative items-center justify-center bg-gray-20 p-1 pr-2 rounded-sm">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="w-full xs:w-32 lg:px-4 py-2 pl-10 lg:pl-8 outline-none xl:w-44 text-cream-50 bg-gray-20 placeholder:text-cream-50"
            />
            <Image
              src="/search.svg"
              alt="search"
              width={17}
              height={17}
              className="absolute left-4 top-1 lg:top-[3px] lg:left-3 mt-3"
            />
            <Button
              type="button"
              title="Search"
              variant="btn_lightred2"
              isLoading={isLoading}
              onClick={handleButtonClick}
              icon="/search.svg"
            />
          </div>
        ) : (
          <Image
            src="/search-icon.svg"
            alt="arrowdown"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={handleSearchIconClick}
          />
        )}
        <ul className="hidden h-full gap-5 lg:flex">
          <div className="flex gap-1 cursor-pointer">
            <Image
              src="/african-icon.svg"
              alt="arrowdown"
              width={20}
              height={20}
            />
            <p className="text-gray-30 regular-16">All African</p>
            <Image
              src="/dropdown-menu.svg"
              alt="arrowdown"
              width={20}
              height={20}
            />
          </div>
          <Link href="/login">
            <p className="text-gray-30 regular-16">Login</p>
          </Link>
        </ul>
        <div className="lg:flexCenter hidden">
          <Button type="button" title="Submit Startup" variant="btn_black" isLoading={isLoading}/>
        </div>
        <Image
          src={isMenuOpen ? '/close.svg' : '/hamburger.svg'} // Dynamically change the icon based on menu state
          alt="menu"
          width={30}
          height={30}
          className="hidden lg:inline-block cursor-pointer"
          onClick={handleMenuClick}
        />
        {isMenuOpen && (
          <div className="bg-gray-20 hidden lg:block gap-4 mb-8 items-center p-3 rounded-md absolute top-16">
            {Navbar_LINKS.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className={
                  'flex flex-col regular-12 md:regular-14 lg:regular-16 text-cream-50 hover:text-lightred-50'
                }
              >
                {link.title}
                <hr className="w-full my-3 border-gray-30"></hr>
              </Link>
            ))}
          </div>
        )}
        {/* mobile menu starts here */}
        <Image
          src={isOpen ? '/close.svg' : '/hamburger.svg'} // Dynamically change the icon based on menu state
          alt="menu"
          width={20}
          height={20}
          className="inline-block lg:hidden cursor-pointer"
          onClick={handleOpenMenu}
        />
        {isOpen && (
          <div className="block lg:hidden w-[60%] sm:w-[30%] bg-gray-20 absolute p-3 top-[60px] right-0 shadow-2xl rounded-md">
            <ul className="flex gap-3 flex-col items-center justify-center">
              <li>
                <div className="flex gap-1 cursor-pointer">
                  <Image
                    src="/african-icon.svg"
                    alt="arrowdown"
                    width={20}
                    height={20}
                  />
                  <p className="text-cream-50 regular-14">All African</p>
                  <Image
                    src="/dropdown-menu.svg"
                    alt="arrowdown"
                    width={20}
                    height={20}
                  />
                </div>
              </li>
              <li>
                <Link href="/login">
                  <p className="text-cream-50 regular-14">Login</p>
                </Link>
              </li>
              <li>
                <Button
                  type="button"
                  title="Submit Startup"
                  variant="btn_black"
                  isLoading={isLoading}
                  onClick={() => router.push('/submit-startup')}
                />
              </li>
              <li>
                  {Navbar_LINKS.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className={
                        'flex flex-col items-center regular-14 lg:regular-16 text-cream-50 hover:text-lightred-50'
                      }
                    >
                      {link.title}
                      <hr className="w-full my-2 border-gray-30"></hr>
                    </Link>
                  ))}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
