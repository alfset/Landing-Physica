import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ecosystem = [
    {
      url: '#',
      name: 'Trade',
    },
    {
      url: '#',
      name: 'Bridge',
    },
    {
      url: '#',
      name: 'Earn',
    },
    // {
    //   url: '#',
    //   name: 'NFTs',
    // },
    {
      url: '#',
      name: 'Tokenomics',
    },
  ];

  const developers = [
    // {
    //   url: '#',
    //   name: 'Bug Bounty',
    // },
    {
      url: '#',
      name: 'Contributing',
    },
    {
      url: '#',
      name: 'Github',
    },
    {
      url: '#',
      name: 'Partnerships',
    },
  ];

  const supports = [
    {
      url: '#',
      name: 'Contact',
    },
    {
      url: '#',
      name: 'Documentation',
    },
    {
      url: '#',
      name: 'Troubleshooting',
    },
  ];

  const about = [
    {
      url: '#',
      name: 'Term of Use',
    },
    {
      url: '#',
      name: 'Privacy',
    },
    {
      url: '#',
      name: 'Planq Network',
    },
    {
      url: '#',
      name: 'Medium',
    },
    {
      url: '#',
      name: 'Reddit',
    },
  ];

  const icons = [
    {
      url: 'https://twitter.com/PlanqFoundation',
      faIcon: <FaTwitter size={24} />,
    },
    {
      url: 'https://discord.com/invite/planq-network',
      faIcon: <FaDiscord size={24} />,
    },
    {
      url: 'https://t.me/planqnetwork',
      faIcon: <FaTelegramPlane size={24} />,
    },
  ];

  const renderLinks = (title, items) => (
    <nav className="flex flex-col" key={title}>
      <header className="text-blue-900 footer-title dark:text-gray-200">
        {title}
      </header>
      {items.map((item, index) => (
        <Link to={item.url} className="link link-hover" key={index}>
          {item.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <footer className="p-10 px-5 md:px-10 lg:px-20 mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/10 to-white dark:from-blue-800/90 dark:to-primary dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] text-blue-950 dark:text-neutral">
        <div className="flex flex-col gap-6">
          <div className="footer">
            <aside className="items-center max-w-xs grid-flow-col">
              <div className="flex flex-col">
                <div>
                  <img src="./favicon.svg" width={50} height={50} alt="" />
                  <p className="text-xl font-semibold">Planq Network</p>
                </div>
                <p className="py-2 text-sm font-medium text-blue-900/90 dark:text-gray-400">
                  Planq network opens up the full blockchain potential of your
                  phone with easy accessibility.
                </p>
              </div>
            </aside>
            {renderLinks('Ecosystem', ecosystem)}
            {renderLinks('Developers', developers)}
            {renderLinks('Supports', supports)}
            {renderLinks('About', about)}
          </div>
          <div className="footer">
            <aside className="items-center grid-flow-col">
              <p>
                POWERED BY PLANQ® NETWORK <br />
                <span className="text-sm text-blue-900/80 dark:text-gray-400">
                  Copyright ® 2023, Planq Dev B. V.
                </span>
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                {icons.map((icon, index) => (
                  <Link to={icon.url} key={index} target="_blank">
                    {icon.faIcon}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
