import { useEffect, useState } from "react";
import "./styles.css";

const orderStatus1 = [
  {
    id: 1,
    code: -1
  },
  {
    id: 2,
    code: 0
  },
  {
    id: 3,
    code: 1
  }
];

const orderStatus2 = [
  {
    id: 2,
    code: -1
  },
  {
    id: 3,
    code: 0
  },
  {
    id: 4,
    code: 1
  }
];

const orderStatus3 = [
  {
    id: 2,
    code: -1
  },
  {
    id: 4,
    code: 0
  },
  {
    id: 5,
    code: 1
  }
];

export default function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderStatus1);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const updatedOrder = orderStatus2.map((order) => {
        orders.map((item) => {
          if (item.id === order.id) {
            if (item.code > order.code) {
              item.code = order.code;
            }
          }
        });
        return order;
      });
      const existingOrder = orders.filter(
        (order) => !updatedOrder.some((item) => order.id === item.id)
      );
      setOrders([...existingOrder, ...updatedOrder]);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const updatedOrder = orderStatus3.map((order) => {
        orders.map((item) => {
          if (item.id === order.id) {
            if (item.code > order.code) {
              item.code = order.code;
            }
          }
        });
        return order;
      });
      const existingOrder = orders.filter(
        (order) => !updatedOrder.some((item) => order.id === item.id)
      );
      setOrders([...existingOrder, ...updatedOrder]);
    }, 7000);
  }, []);

  console.log(orders);

  return (
    <div className="App">
      {orders.map(
        (order) =>
          order.code === 1 && (
            <div>
              <p>New</p>
              <p>{order.id}</p>
            </div>
          )
      )}
      <br />
      {orders.map(
        (order) =>
          order.code === 0 && (
            <div>
              <p>Preparing</p>
              <p>{order.id}</p>
            </div>
          )
      )}
      <br />
      {orders.map(
        (order) =>
          order.code === -1 && (
            <div>
              <p>Past</p>
              <p>{order.id}</p>
            </div>
          )
      )}
    </div>
  );
}
