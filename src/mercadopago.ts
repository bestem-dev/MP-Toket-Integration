import fetch from 'node-fetch';

export const getEmailFromPaymentId = async (paymentId: string) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.MP_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      config
    );
    const data = await res.json();
    console.log(data);
    return data.payer.email;
  } catch (error) {
    console.error(error);
    throw Error('Error with MercadoPago integration');
  }
};
