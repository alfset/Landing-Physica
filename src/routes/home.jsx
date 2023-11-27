/* eslint-disable react/jsx-no-duplicate-props */
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import Button from '../components/Button/index';
import Text from '../components/Typoghrapy/index';
import CustomCard from '../components/Card';
import CustomCarousel from '../components/Carousel/index';
import CardCta from '../components/Card/CardCta';
import Footer from '../components/Footer';
import CircleList from '../components/AnimatedBackground/circles';
import CoinAnimation from '../components/AnimatedBackground/coinImage';

function Page() {
  const cardsData = [
    {
      borderColor: 'border-purple-600',
      other: '',
      isBorder: true,
      img: './3dicons-1.svg',
      title: 'Trade',
      classCard: '',
      spaceY: 'space-y-3',
      titleClass: 'title-trade text-4xl justify-center',
      subtitle: 'Trade crypto instantly across multiple chains',
      component: (
        <Button
          btnType="px-8"
          url="#"
          other="bg-transparent border-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400"
        >
          <Text className="font-semibold title-trade hover:text-neutral">
            Trade Now
          </Text>
        </Button>
      ),
    },
    {
      borderColor: '',
      other: 'py-20',
      isBorder: false,
      img: './3dicons-2.svg',
      spaceY: 'space-y-6',
      titleClass: 'text-violet-400 text-4xl justify-center',
      title: 'Bridge',
      classCard: 'z-10',
      subtitle: 'Seamlessly transfer assets across chains',
      component: (
        <Button
          btnType="px-8"
          url="#"
          other="bg-violet-400 border-0 hover:bg-violet-600"
        >
          <Text className="font-semibold text-white dark:text-neutral">
            Bridge Now
          </Text>
        </Button>
      ),
    },
    {
      borderColor: 'border-info',
      other: '',
      isBorder: true,
      img: './3dicons-3.svg',
      spaceY: 'space-y-2',
      titleClass: 'title-earn text-4xl justify-center',
      title: 'Earn',
      classCard: '',
      subtitle: 'Provide liquidity to pools on Planq and earn fees on swaps',
      component: (
        <Button
          btnType="px-8"
          url="#"
          other="bg-transparent border-2 border-info hover:border-info hover:bg-info"
        >
          <Text className="font-semibold title-earn hover:text-neutral dark:hover:text-primary">
            Earn Now
          </Text>
        </Button>
      ),
    },
  ];

  const buttonData = [
    {
      url: 'https://twitter.com/PlanqFoundation',
      icon: <FaTwitter />,
      text: 'Follow Us!',
      bgColor: 'bg-black dark:bg-dark',
      btnClass: 'rounded-lg px-6 hover:bg-gray-800 shadow-lg border-0',
    },
    {
      url: 'https://discord.com/invite/planq-network',
      icon: <FaDiscord />,
      text: 'Join Now!',
      bgColor: 'bg-gradient-to-b from-blue-400 to-indigo-400',
      btnClass:
        'rounded-lg px-6 hover:bg-gradient-to-t from-blue-400 to-indigo-400 shadow-lg border-0',
    },
    {
      url: 'https://t.me/planqnetwork',
      icon: <FaTelegramPlane />,
      text: 'Join With Us!',
      bgColor: 'bg-[#0F9AD6]',
      btnClass: 'rounded-lg px-6 hover:bg-sky-400 shadow-lg border-0',
    },
  ];

  return (
    <>
      <section>
        <CircleList />
        <div className="hero min-h-screen bg-white dark:bg-primary">
          <div className="hero-content flex flex-col lg:flex-row-reverse justify-between items-center w-screen px-10 pb-20">
            <img
              src="/img-hero.svg"
              className="max-w-sm mb-6 lg:mb-0 lg:mr-12"
            />
            <div>
              <h1 className="text-5xl font-bold">
                <span className="text-blue-900 dark:text-neutral">Physica</span>{' '}
                <span className="text-blue-500 dark:text-info">Finance</span>
              </h1>
              <p className="py-6">The all-in-one DeFi hub on Planq</p>
              <Button
                url="swap"
                other="animate-bounce btn-sm px-4 h-10 inline-flex justify-center items-center gap-4 flex-shrink-0 bg-blue-800 hover:bg-blue-500 dark:bg-accent dark:hover:bg-blue-500 hover:shadow-info hover:text-primary shadow shadow-blue-800 dark:shadow-accent border-0"
              >
                <span className="text-white">Get Started</span>
                <span className="p-1 bg-white dark:bg-neutral rounded-full">
                  <FaChevronRight className="text-blue-800 dark:text-accent text-2xs" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen px-20 bg-white dark:bg-primary space-y-5">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-900 dark:text-neutral">
                Planq Native
              </span>{' '}
              <span className="text-blue-500 dark:text-info">DeFi Hub</span>
            </h1>
            <p className="py-6 text-black dark:text-neutral">
              Trade, earn, and bridge your assets with ease on the{' '}
              <b className="text-blue-500 dark:text-info">Planq’s</b> native
              one-stop DeFI hub.
            </p>
          </div>
          <div className="grid grid-cols-3 items-center">
            {cardsData.map((card, index) => (
              <div key={index}>
                <CustomCard
                  widtHeight="w-auto"
                  imgUrl={card.img}
                  isBorder={card.isBorder}
                  url={card.url}
                  title={card.title}
                  titleClass={card.titleClass}
                  subtitleClass="text-white dark:text-neutral py-2 px-6"
                  titleSize="text-xl justify-center"
                  subtitle={card.subtitle}
                  component={card.component}
                  align="justify-center"
                  borderColor={card.borderColor}
                  other={card.other}
                  spaceY={card.spaceY}
                  classCard={card.classCard}
                />
              </div>
            ))}
          </div>
          <div className="text-center py-5">
            <Button
              url="https://discord.com/invite/planq-network"
              target="_blank"
              other="animate-bounce px-10 text-white dark:text-primary text-xl bg-gradient-to-r from-info to-blue-900 hover:bg-gradient-to-l from-info to-blue-900 dark:bg-gradient-to-r from-info to-accent hover:dark:bg-gradient-to-l from-info to-accent  border-0"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen bg-white dark:bg-primary">
          <CoinAnimation />
          <div className="flex flex-col justify-center items-center text-center space-y-4 bg-transparent w-screen">
            <h1 className="text-5xl font-semibold text-blue-900 dark:text-neutral max-w-sm leading-normal z-10">
              Join Physica Finance Early!
            </h1>
            <p className="pb-10 text-neutral text-lg max-w-lg z-10">
              Become an early user of Physica Finance and unlock the full
              potential of DeFi
            </p>
            <Button
              url="https://bingx.com/en-us/spot/PLQUSDT/"
              target="_blank"
              other="animate-bounce btn-sm px-5 h-14 inline-flex justify-center items-center gap-4 flex-shrink-0 bg-blue-500 dark:bg-accent hover:bg-blue-400 hover:shadow-blue-400 hover:shadow-lg hover:text-primary shadow shadow-blue-800 dark:shadow-accent border-0"
            >
              <span className="text-white text-xl">Buy</span>
              <span className="px-3 py-1 bg-white dark:bg-neutral rounded-full">
                <p className="text-xl text-black">$PLQ</p>
              </span>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#072B75] dark:bg-lime">
        <div className="min-w-screen py-10 space-y-6 bg-[#072B75] dark:bg-lime overflow-hidden">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              <span className="text-white dark:text-neutral">
                Dive into the Planq Network
              </span>
              <br />
              <span className="text-[#0dd0bd]">Ecosystem</span>
            </h1>
            <div className="py-10">
              <CustomCarousel />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-primary">
        <div className="container mx-auto px-20 py-10 bg-white dark:bg-primary">
          <CardCta
            width="w-full justify-start"
            imgUrl="./bg-cta.svg"
            title="Join our Community
            Get involved with Planq"
            component={
              <>
                {buttonData.map((button, index) => (
                  <Button
                    key={index}
                    url={button.url}
                    bgColor={button.bgColor}
                    other={button.btnClass}
                    target="_blank"
                  >
                    <Text className="items-center font-semibold text-white hover:text-gray-100 flex flex-row justify-between gap-3">
                      {button.icon} {button.text}
                    </Text>
                  </Button>
                ))}
              </>
            }
          />
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-200 via-transparent to-blue-500">
        <Footer />
      </section>
    </>
  );
}

export default Page;
