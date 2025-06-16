import { useEffect, useState } from "react";
import FormatCurrency from "../../utilities/FormatCurrency";
import { Check } from "lucide-react";
import { toast } from "sonner";

const product = {
  title: "One Life Graphic T-Shirt",
  price: 2000,
  originalPrice: 3000,
  description:
    "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  brand: "Killer",
  material: "Cotton",
  sizes: ["S", "M", "L", "X-L"],
  colors: ["Red", "Blue", "Green"],
  rating: 4.5,
  images: [
    {
      url: "https://picsum.photos/id/101/300",
      altText: "One Life Graphic T-Shirt-1",
    },
    {
      url: "https://picsum.photos/id/102/300",
      altText: "One Life Graphic T-Shirt-2",
    },
    {
      url: "https://picsum.photos/id/103/300",
      altText: "One Life Graphic T-Shirt-3",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImage(product.images[0].url);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
    }, 500);
  };

  const discount = (a = product.originalPrice, b = product.price) => {
    return ((a - b) / a) * 100;
  };

  return (
    <div className="p-4 lg:px-25 lg:mt-6">
      <div className="md:flex">
        <div className="flex flex-col md:flex-row  gap-2  ">
          {/* small thumbnails large screen */}
          <div className="hidden md:flex flex-col mr-3 gap-3  ">
            {product.images.map((image) => (
              <div
                className={`w-39 h-43 rounded-xl overflow-hidden border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-transparent"
                } `}
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  className="w-full h-full object-cover"
                  onClick={() => setMainImage(image.url)}
                />
              </div>
            ))}
          </div>
          <div className="md:w-113 md:h-135 w-full h-75  rounded-xl overflow-hidden  ">
            <img
              src={mainImage}
              alt={product.images[0].altText}
              className=" w-full h-full  object-cover"
            />
          </div>
          {/* small thumbnails small screen */}
          <div className="md:hidden mt-3 flex gap-3">
            {product.images.map((image) => (
              <div
                className={`w-1/3 h-27 rounded-xl overflow-hidden border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  className="w-full h-full object-cover"
                  onClick={() => setMainImage(image.url)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="md:px-10 md:mt-0 mt-3">
          <h1 className="font-extrabold uppercase text-2xl md:text-3xl xl:text-5xl xl:tracking-wider">
            {product.title}
          </h1>
          {/* Price */}
          <div className="flex items-center gap-2 text-xl font-semibold mt-3 md:mt-6">
            <span>{FormatCurrency(product.price)}</span>
            <span className="line-through text-gray-500 text-sm">
              {FormatCurrency(product.originalPrice)}
            </span>
            <span className="bg-red-200 rounded-lg px-1 py-1/2 text-red-500 font-light text-sm">
              -{Math.floor(discount())}%
            </span>
          </div>
          {/* Description */}
          <p className="mt-4 text-gray-600 lg:text-xl">{product.description}</p>
          <div className="w-full border-b border-gray-200 mt-5"></div>
          {/* Select Colors */}
          <div className="mt-3">
            <h1 className="text-gray-500">Select Colors</h1>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <div
                  className="rounded-full w-10 h-10 flex justify-center items-center "
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  <div className="flex w-8 h-8 justify-center items-center">
                    {selectedColor === color && (
                      <Check size={25} className="text-white " />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b border-gray-200 mt-5"></div>
          {/* Select Size */}
          <div className="mt-3">
            <h1 className="text-gray-500">Choose Size</h1>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <div
                  className={` px-5 py-2 rounded-2xl ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-400"
                  } `}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b border-gray-200 mt-5"></div>
          {/* Add button */}
          <div className="mt-3">
            <button
              onClick={handleAddToCart}
              className="rounded-3xl md:w-1/4 p-2 w-full bg-black text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
