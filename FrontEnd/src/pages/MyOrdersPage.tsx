import { useEffect, useState } from "react";
import FormatCurrency from "../utilities/FormatCurrency";

type OrderItem = {
  name: string;
  image: string;
};

type ShippingAddress = {
  city: string;
  state: string;
  country: string;
};

type Orders = {
  id: string;
  createdAt: Date;
  shippingAddress: ShippingAddress;
  orderItems: OrderItem[];
  totalPrice: number;
  isPaid: boolean;
};

const MyOrdersPage = () => {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders: Orders[] = [
        {
          id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "Patna", state: "Bihar", country: "India" },
          orderItems: [
            {
              name: "Product1",
              image: "https://picsum.photos/200?random=16",
            },
          ],
          totalPrice: 1000,
          isPaid: true,
        },
        {
          id: "23456",
          createdAt: new Date(),
          shippingAddress: { city: "Patna", state: "Bihar", country: "India" },
          orderItems: [
            {
              name: "Product2",
              image: "https://picsum.photos/200?random=17",
            },
          ],
          totalPrice: 1000,
          isPaid: true,
        },
        {
          id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "Patna", state: "Bihar", country: "India" },
          orderItems: [
            {
              name: "Product3",
              image: "https://picsum.photos/200?random=18",
            },
          ],
          totalPrice: 1000,
          isPaid: false,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-med text-gray-900 whitespace-nowrap">
                    #{order.id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city},${order.shippingAddress.state},${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {FormatCurrency(order.totalPrice)}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You Have No Orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
