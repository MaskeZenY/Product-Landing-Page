import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  currencySymbol: string;
  features: { name: string; available: boolean }[];
  purchaseLink: string;
  bestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  currencySymbol,
  features,
  purchaseLink,
  bestseller = false,
}) => {
  return (
    <div
      className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-1 ${
        bestseller ? 'scale-105' : ''
      }`}
    >
      {/* Bestseller Badge */}
      {bestseller && (
        <div className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full z-20">
          Bestseller
        </div>
      )}

      {/* Shine Animation */}
      {bestseller && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-blue-500 opacity-20 animate-shine z-0 pointer-events-none animate-pulse"></div>
      )}

      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 z-10 relative">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white z-10 relative">
        <span className="text-3xl font-semibold">{currencySymbol}</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>
      <ul role="list" className="space-y-5 my-7 z-10 relative">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${
              feature.available ? '' : 'line-through decoration-gray-500'
            }`}
          >
            <svg
              className={`flex-shrink-0 w-4 h-4 ${
                feature.available
                  ? 'text-blue-700 dark:text-blue-500'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={purchaseLink}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center z-10 relative pointer-events-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy now
      </a>
    </div>
  );
};

export default ProductCard;
