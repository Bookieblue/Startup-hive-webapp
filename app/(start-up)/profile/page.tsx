import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { STARTUPS, TRENDING_STARTUPS } from '@/app/constants';

const page = () => {
  return (
    <section className="max-container padding-container flex justify-between bg-cream-50 pt-7 lg:px-24 lg:gap-10 2xl:pt-10 ">
      <div className="pt-14 w-[55%]">
        <div className="flex gap-5">
          <Image
            src="/profile-pic.svg"
            alt="profile"
            width={70}
            height={70}
            className="mt-12 lg:mt-14"
          />
          <div>
            <h2 className="text-gray-20 regular-24 mt-12 lg:regular-34">
              Ifeoluwa Ajetomobi
            </h2>
            <p className="regular-16">Nigeria</p>
          </div>
        </div>
        <p className="bg-gray-20 text-cream-50 w-[400px] py-3 pl-5 rounded-md mt-5">
          Note! If you own a Startup, publish it from{' '}
          <Link href="/" className="text-yellow-50 underline">
            here
          </Link>
        </p>
        <p className="mt-8 regular-18">
          Discover Nigeria startups from{' '}
          <Link href="/" className="text-lightred-50 underline">
            here
          </Link>
        </p>
        <Tabs defaultValue="my-startups" className="mt-3">
          <TabsList>
            <TabsTrigger value="my-startups">My startups</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>
          <TabsContent
            value="my-startups"
            className="flex flex-col gap-2 mt-12"
          >
              {STARTUPS.map((Startup) => (
          <StartupItem
          key={Startup.name}
          name={Startup.name}
          icon={Startup.icon}
          field={Startup.field}
          location={Startup.location}
          description={Startup.description}
          likes={Startup.likes}
        />
        ))}
          </TabsContent>
          <TabsContent value="bookmarked" className="flex flex-col gap-2">
          {STARTUPS.map((Startup) => (
          <StartupItem
            key={Startup.name}
            name={Startup.name}
            icon={Startup.icon}
            field={Startup.field}
            location={Startup.location}
            description={Startup.description}
            likes={Startup.likes}
          />
        ))}
          </TabsContent>
        </Tabs>
      </div>
      <div className="bg-gray-20 w-[40%] h-full p-5 mb-10">
        <Image
          src="/ad-pic.svg"
          alt="ads"
          width={350}
          height={100}
          className="pt-[70px]"
        />
        <h3 className="text-white medium-20 mt-10 ">
          Discover trending Startups
        </h3>
        <div className='mt-14'>
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
    </section>
  );
};

type TrendingStartupItem = {
  name: string;
  icon: string;
  field: string;
  location: String;
  description: string;
};

const TrendingStartupItem = ({
  name,
  icon,
  field,
  location,
  description,
}: TrendingStartupItem) => {
  return (
    <li className="w-full items-start mb-3 list-none">
      <div className='flex'>
      <div className="rounded-full p-4 lg:p-7">
        <Image src={icon} alt="map" width={100} height={28} />
      </div>
      <div>
        <div className="flex gap-2">
          <p className="bold-18 text-white">{name}</p>
          <p className="text-gray-40 regular-12 mt-1.5">{field}</p>
        </div>
        <p className="regular-14 mt-5 text-gray-40">{description}</p>
        <p className="text-white regular-12">{location}</p>
      </div>
      </div>
      <hr className='border-gray-30 mt-5'/>
    </li>
    
  );
};

type StartupItem = {
  name: string;
  icon: string;
  field: string;
  location: String;
  description: string;
  likes: number;
};

const StartupItem = ({
  name,
  icon,
  field,
  location,
  description,
  likes,
}: StartupItem) => {
  return (
    <li className="w-full items-start mb-3 list-none">
      <div className='flex justify-between items-center'>
      <div className='flex'>
      <div className="rounded-full pr-3">
        <Image src={icon} alt="map" width={50} height={28} />
      </div>
      <div>
        <div className="flex gap-2">
          <p className="bold-18 text-gray-50">{name}</p>
          <p className="text-gray-30 regular-12 mt-1.5">{field}</p>
        </div>
        <p className="regular-14 mt-2 text-gray-30">{description}</p>
        <p className="text-gray-50 regular-12">{location}</p>
      </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
      <Image src='/non-active-select.svg' alt="map" width={30} height={28} className='cursor-pointer' />
      <p className='regular-16'>{likes}</p>
      </div>
      </div>
      <hr className='border-gray-40 mt-5'/>
    </li>
    
  );
};

export default page;
