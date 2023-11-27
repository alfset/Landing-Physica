/* eslint-disable react/prop-types */

const DropdownItem = (props) => {
  const {
    icon,
    children = 'Home',
    target,
    url = 'https://comunity-node.gitbook.io/planq-network-dapps-team/building-overview/dex-service/liquidity-pools-and-swap-function',
  } = props;

  return (
    <li>
      <a
        href={url}
        target={target}
        className={`block px-4 py-2 text-sm w-full`}
        role="menuitem"
      >
        <div className="flex items-center w-full gap-3 flex-nowrap">
          {icon}
          {children}
        </div>
      </a>
    </li>
  );
};

export default DropdownItem;
