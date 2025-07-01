import React from 'react'



export default function OrderHistory() {
  const orders = [
    {
      orderDate: "Jan 15, 2023",
      orderId: "001",
      itemsOrdered: [
        { name: "Blue Jeans", quantity: 5, }
      ],
      totalPrice: "₦88,000",
    },
    {
      orderDate: "Jan 15, 2023",
      orderId: "002",
      itemsOrdered: [
        { name: "Custom Hoodies", quantity: 15,  },
        { name: "Custom Caps", quantity: 20, }
      ],
      totalPrice: "₦120,000",
    },
    {
      orderDate: "Jan 15, 2023",
      orderId: "003",
      itemsOrdered: [
        { name: "White Polo Shirts", quantity: 20,  },
        { name: "Grey Sweatpants", quantity: 10,  }
      ],
      totalPrice: "₦140,500",
    },
  ];
  
  return(
    <div className="overflow-x-auto  mt-[192px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Order Date</th>
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Item Name</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <React.Fragment key={index}>
              {order.itemsOrdered.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {idx === 0 && (
                    <>
                      <td
                        className="border border-gray-300 px-4 py-2"
                        rowSpan={order.itemsOrdered.length}
                      >
                        {order.orderDate}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2"
                        rowSpan={order.itemsOrdered.length}
                      >
                        {order.orderId}
                      </td>
                    </>
                  )}
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                  {idx === 0 && (
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan={order.itemsOrdered.length}
                    >
                      {order.totalPrice}
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}