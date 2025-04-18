export const getFlutterwaveConfig = (cartProducts) => {
    return {
      public_key: "FLWPUBK_TEST-8242cc0eab5b4ae39d11ad95bde693b8-X",
      tx_ref: Date.now(),
      amount: 100000,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: "user@gmail.com",
        phone_number: "070********",
        name: "john doe",
      },
      customizations: {
        title: "My Payment Title",
        description: "Payment for items in cart",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
      meta: {
        transaction_breakdown: [
          { description: "Item Total", amount: 80000 },
          { description: "Shipping Fee", amount: 15000 },
          { description: "Tax", amount: 5000 }
        ]
      }
    };
  };
  