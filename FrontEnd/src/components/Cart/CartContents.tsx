import { Trash2 } from "lucide-react";
import FormatCurrency from "../../utilities/FormatCurrency";

const CartContents = () => {
  const cartItems = [
    {
      id: 1,
      name: "Men's Slim Fit T-Shirt",
      size: "M",
      color: "Black",
      quantity: 2,
      price: 1499,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Women's Denim Jacket",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 2449,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Unisex Hoodie",
      size: "XL",
      color: "Grey",
      quantity: 1,
      price: 896,
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: "Kids' Cotton Shorts",
      size: "S",
      color: "Red",
      quantity: 3,
      price: 990,
      image: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      name: "Women's Leggings",
      size: "M",
      color: "Purple",
      quantity: 2,
      price: 1199,
      image: "https://picsum.photos/200?random=5",
    },
  ];
  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-between py-4 shadow "
        >
          <div className="flex items-start">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Size: {item.size} | Color: {item.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border w-8 h-8 mr-2 rounded font-medium ">
                  +
                </button>
                <p className="text-sm text-gray-600">{item.quantity}</p>
                <button className=" border ml-2 w-8 h-8  rounded font-medium">
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>{FormatCurrency(item.price)}</p>
            <button>
              <Trash2 className="h-6 w-6 mt-2 text-red-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
