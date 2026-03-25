import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";

const ProductCard = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
}) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const buttonLoader = false;
  const [selectedViewProduct, setSelectedViewProduct] = useState("");
  const isAvailable = quantity && Number(quantity) > 0;

  const handleOpenProductViewModal = (product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(true);
  };

  return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
      <div
        onClick={() => {
          handleOpenProductViewModal({
            id: productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
          });
        }}
        className="w-full overflow-hidden aspect-3/2"
      >
        <img
          className="w-full h-full  cursor-pointer transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={productName}
        />
      </div>
      <div className="p-4">
        <h2
          onClick={() => {
            handleOpenProductViewModal({
            id: productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
          });
          }}
          className="text-lg font-semibold mb-2 cursor-pointer"
        >
          {productName}
        </h2>
        <div className="min-h-20 max-h-20">
          <p className="text-gray-600 text-sm mb-4 overflow-hidden">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          {specialPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm line-through">
                {Number(price).toFixed()}đ
              </span>
              <span className="text-xl font-bold text-red-500">
                {Number(specialPrice).toFixed()}đ
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">
                {"  "}
                {Number(price).toFixed()}đ
              </span>
            </div>
          )}

          <button
            disabled={!isAvailable || buttonLoader}
            onClick={() => {}}
            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600 cursor-pointer" : "opacity-70"}
            text-white px-4 py-2 rounded transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed flex items-center justify-center`}
          >
            <FaShoppingCart className="mr-2" />
            {isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailable={isAvailable}
      />
    </div>
  );
};

export default ProductCard;
