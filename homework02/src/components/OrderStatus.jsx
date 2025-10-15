function OrderStatus({ orderId, status }) {
  return (
    <div>
      <h4>
        Order # {orderId}: {status}
      </h4>
    </div>
  );
}

export default OrderStatus;
