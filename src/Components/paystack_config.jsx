export const getPaystackConfig = (cartProducts) => {
  return {
    reference: new Date().getTime().toString(),
    email: "olabodehope7@gmail.com",
    amount:
      (cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0) +
        202000 +
        202000) *
      100, // Amount in the lowest currency unit
    publicKey: "pk_test_184aa0a58783d73da69dda258a8cc1e7d3711c4e",
    /* metadata: {
      custom_fields: cartProducts.map((product) => ({
        Name: product.name,
        Price: `${product.price}`,
        Quantity: `${product.quantity}`,
      })),
    }, */
  };
};
