/* eslint-disable react/prop-types */
const CardCta = (props) => {
  const {
    title,
    imgUrl,
    width = 'w-96',
    bgColor = 'bg-white',
    other = 'cursor-pointer',
    padding = 'p-4',
    component,
  } = props;

  return (
    <div className={`relative ${width} ${bgColor} ${other} rounded-4xl`}>
      <img
        src={imgUrl}
        alt=""
        className="w-full h-48 object-cover rounded-3xl"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-start px-10 text-center ${padding}`}
      >
        <div className="flex justify-between items-center w-full">
          <h2
            className={`text-white font-semibold leading-normal text-3xl text-left flex-wrap max-w-sm`}
          >
            {title}
          </h2>
          <div className="space-x-6 max-w-full">{component}</div>
        </div>
      </div>
    </div>
  );
};

export default CardCta;
