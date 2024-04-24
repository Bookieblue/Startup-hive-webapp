import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import IsSupport from './isSupport/page';
import {
  EXPLORE_STARTUPS,
  ISSUPPORT,
  STARTUPS,
  TRENDING_STARTUPS,
} from '@/app/constants';
import SocialIcons from './social-icons/page';
import UserReaction from './user-reaction/page';
import EachOverviewStack from './overview/page';
import ServiceRender from './service/page';
import Reviews from './review/page';
import IsStarred from './isStarred/page';
import IsSupportCard from './isSupportCard/page';
import { TrendingStartupItem } from '@/components/trending-startup/page';
import Footer from '@/components/footer';
import { ExploreStartupItem } from '@/components/explore-startup/page';

const SingleStartup = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="container-fluid">
        <section className="light-section padding-container max-container mt-28 md:mt-40">
          <div className="flexStart flex-col-reverse md:gap-11 md:flex-row ">
            <Image
              src="/assets/pastack_logo.svg"
              alt="pastack_logo"
              width={25}
              height={29}
              className="w-[20%] md:w-[9%] relative max-sm:-top-5"
            />

            <Image
              src="/assets/banner.svg"
              alt="banner"
              width={253}
              height={29}
              className="w-[100%] lg:w-[87%] overflow-hidden"
            />
          </div>

          <div className="mt-[1vw] ">
            <div className="flexStart flex-col md:flex-row gap-2">
              <div className="flex flex-row gap-2">
                <h1 className="text-lg font-[lato] bold-24 md:bold-34 text-gray-20">
                  Paystack
                </h1>
                <Image
                  src="/assets/bxs_badge.svg"
                  alt="bxs_badge_logo"
                  width={25}
                  height={29}
                />
              </div>
              <p className="font-[lato] regular-16 md:regular-14 text-gray-30">
                Fintech
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-7 md:flex-row md:gap-20 justify-between">
              <div className="">
                <p className="text-center md:text-start text-gray-20 font-regular-18 font-[lato]">
                  Easy to setup payment gateway for online & offline business
                </p>
                <div className="flex flex-col md:flex-row items-center  md:mt-7 gap-2">
                  <div className="flex justify-center mt-6 md:mt-0 md:justify-start gap-2">
                    <Image
                      src="/assets/location_map.svg"
                      alt="location_map_logo"
                      width={25}
                      height={29}
                      className="w-[13%] md:w-[13%]"
                    />
                    <p className="text-gray-20 font-regular-14 font-[lato]">
                      Lagos, Nigeria
                    </p>
                  </div>

                  <SocialIcons />
                </div>

                <UserReaction />
              </div>

              <div className="">
                <div className="flex gap-4 md:gap-10 justify-center mt-5 md:mt-12">
                  <Link href="/">
                    <div className="px-7 py-2 border-2 border-gray-20 md:px-7 rounded-sm flex flex-row">
                      <Image
                        src="/assets/visit_arrow_icon.svg"
                        alt="visit_vector_logo"
                        width={25}
                        height={29}
                        className="w-[26%] md:w-[26%] "
                      />
                      &nbsp;&nbsp;
                      <button className="text-gray-20 font-regular-16 font-[inter]">
                        Visit
                      </button>
                    </div>
                  </Link>

                  <IsSupport supports={ISSUPPORT.supports} />
                </div>

                <div className="mt-3 flex justify-center md:justify-start">
                  <a href="" className="text-lightred-50 underline text-center">
                    Claim company profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section max-container padding-container bg-gray-20 mt-5 md:mt-10">
          <div className="divider flex flex-col justify-between pt-11 pb-14 text-white lg:flex-row ">
            <div className="right-section flex-col ">
              <div className="top_card flex flex-col md:flex-row py-5 border-t border-b border-gray-30 gap-5">
                <Image
                  src="/assets/jumia_logo.svg"
                  alt="jumia_logo"
                  width={55}
                  height={29}
                />

                <div className="flex-col justify-start">
                  <h6 className="">
                    {' '}
                    <span className="semi-medium-18 font-[lato]">
                      Jumia
                    </span>{' '}
                    &nbsp;{' '}
                    <span className="regular-12 text-gray-40 ">Ecommerce</span>
                  </h6>
                  <p className="md:w-[24rem] mt-3 regular-12 text-gray-40 font-[lato]">
                    Automated security compliance for your business in weeks
                  </p>
                  <p className="regular-12 text-white font-[lato]">
                    Lagos, Nigeria
                  </p>
                </div>

                <IsSupportCard supports={1234} />
              </div>
              {/* end of top cards */}

              <div className="overview mt-7">
                <h1 className="regular-20 font-[candal]">Paystack Overview</h1>

                <div className="stack mt-3">
                  <EachOverviewStack />

                  <div className="grid grid-cols-3 md:grid-cols-4 ">
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      Payment Gateway
                    </p>
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      POS Terminal
                    </p>
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      Virtual account
                    </p>
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      ATM card
                    </p>
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      Virtual account
                    </p>
                    <p className="px-2 py-1 mt-2 regular-14 font-[lato] text-white w-fit border border-yellow-50 rounded-full">
                      ATM card
                    </p>
                  </div>
                </div>
              </div>
              {/* overview section end */}

              <div className="about mt-8">
                <h1 className="regular-20 font-[lato] text-white">
                  About Paystack
                </h1>

                <p className="text-justify w-fit md:w-[35rem] mt-4 regular-18 lato text-gray-40">
                  Paystack aimed to simplify the process of accepting online
                  payments for businesses, particularly in Nigeria and other
                  African countries. The platform offered a range of payment
                  options, including card payments, bank transfers, and mobile
                  money, making it easier for businesses to receive payments
                  from their customers. .Paystack aimed to simplify the process
                  of accepting online payments for businesses, particularly in
                  Nigeria and other African countries. The platform offered a
                  range of payment options, including card payments, bank
                  transfers, and mobile money, making it easier for businesses
                  to receive payments from their customers.
                </p>
              </div>
              {/* about section end */}

              <div className="service mt-8">
                <h1 className="semi-medium-20 text-white font-[lato]">
                  Services render by Paystack
                </h1>

                <ServiceRender />
              </div>

              <div className="reviews mt-8">
                <h1 className="semi-medium-20 text-white font-[lato]">
                  Reviews on Paystack
                </h1>

                <p className="mt-3 regular-14 font-[lato] text-gray-40">
                  2 reviews so far
                </p>

                <Reviews />
              </div>
              {/* review section end */}

              <div className="comment mt-4 px-4 py-4 bg-cream-50 mr-10 w-full md:w-[35rem] text-black">
                <div className="">
                  <div className="flex flex-row">
                    <Image
                      src="/assets/pastack_logo.svg"
                      alt="pastack_logo"
                      width={58}
                      height={29}
                      className=" relative max-sm:-top-1"
                    />
                    <div className="ml-4">
                      <h6 className="pt regular-18 font-[Candal] text-gray-20">
                        What’s your opinion about Paystack?
                      </h6>
                      <p className="mt-3 regular-14 font-[Candal] text-gray-20">
                        Other people will love to hear your opinion.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-5 gap-1">
                    <IsStarred />
                    <IsStarred />
                    <IsStarred />
                    <IsStarred />
                    <IsStarred />
                  </div>

                  <textarea
                    className="col resize-y rounded-md bg-cream-50 border-2 border-gray-40 mt-4 p-4 h-32 w-full regular-16 text-gray-20 font-[lato]"
                    name=""
                    id=""
                    placeholder="write review"
                  ></textarea>

                  <div className="flex flex-row mt-4 gap-5">
                    <button className="w-fit py-2 px-2 border-2 border-gray-40 regular-16 text-gray-20 font-[lato] rounded-sm max-sm:hidden hover:opacity-[0.6]">
                      Log to comment
                    </button>
                    <button className="w-fit py-2 px-2 border-2 border-gray-40 regular-16 text-gray-20 font-[lato] rounded-sm hover:opacity-[0.6]">
                      Write review
                    </button>
                  </div>
                </div>
              </div>
              {/* comment section end */}

              <div className="related_company mt-8 ">
                <h1 className="regular-20 text-white font-[Candal]">
                  Paystack alternatives or related companies
                </h1>
              </div>
              <div className="mt-6 lg:mt-14 lg:mb-40">
                {EXPLORE_STARTUPS.map((Startup) => (
                  <Link href={Startup.url} key={Startup.name}>
                    <div className="hover:bg-gray-30 hover:shadow-md hover:px-5 hover:rounded-sm transform hover:scale-105 transition duration-300 ease-in-out">
                      <ExploreStartupItem
                        name={Startup.name}
                        icon={Startup.icon}
                        field={Startup.field}
                        location={Startup.location}
                        description={Startup.description}
                        supports={Startup.supports}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-20 lg:w-[35%] h-full p-5 mb-10 ">
              <Image
                src="/ad-pic.svg"
                alt="ads"
                width={400}
                height={100}
                className=""
              />
              <h3 className="text-white medium-20 mt-10 ">
              Trending Startups
              </h3>
              <div className="mt-14">
                {TRENDING_STARTUPS.map((TrendingStartup) => (
                  <TrendingStartupItem
                    key={TrendingStartup.name}
                    name={TrendingStartup.name}
                    icon={TrendingStartup.icon}
                    field={TrendingStartup.field}
                    location={TrendingStartup.location}
                    description={TrendingStartup.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SingleStartup;
