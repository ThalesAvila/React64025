import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore/lite";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

const OrderRow = ({ id, total, buyerName }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {buyerName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {total}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <Link
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg
          border border-transparent text-blue-600 hover:text-blue-800
          disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
          dark:hover:text-blue-400"
          to={`/orders/${id}`}
        >
          See Order
        </Link>
      </td>
    </tr>
  );
};

export default function Orders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (currentUser) {
      (async function () {
        const ordersCollection = collection(db, "orders");

        const q = query(
          ordersCollection,
          where("buyer.id", "==", currentUser?.uid),
          orderBy("createdAt", "asc")
        );

        const ordersSnapshot = await getDocs(q);

        const ordersReponse = ordersSnapshot?.docs?.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setOrders(ordersReponse);
      })();
    }
  }, [currentUser]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        Orders
      </h2>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                  >
                    Buyer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-white uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders?.map(({ id, total, buyer }) => {
                  return (
                    <OrderRow
                      key={id}
                      id={id}
                      total={total}
                      buyerName={buyer.name}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
