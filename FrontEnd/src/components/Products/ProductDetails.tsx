import { Star } from "lucide-react";

const ProductDetails = () => {
  const product = {
    title: "One Life Graphic T-Shirt",
    price: 260,
    originalPrice: 300,
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

  return (
    <div className="p-6">
      <div className="flex gap-2">
        {/* small thumbnails large screen */}
        <div className=" flex flex-col gap-2">
          {product.images.map((image) => (
            <div className=" w-30 h-30 ">
              <img
                src={image.url}
                alt={image.altText}
                className="rounded-xl "
              />
            </div>
          ))}
        </div>
        <div>
          <img src={product.images[0].url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
