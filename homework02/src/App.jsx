import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  const items = ["Milch", "Apfel", "Brot", "Wurst", "Gurken"];
  const orders = [
    { orderId: 101, status: "Accepted" },
    { orderId: 102, status: "in Transit" },
    { orderId: 103, status: "Delivered" },
    { orderId: 111, status: "Rejected" },
  ];
  return (
    <div>
      <Greeting name="Yevhen" />
      <ShoppingList items={items} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
