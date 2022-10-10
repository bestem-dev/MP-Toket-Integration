import fetch from 'node-fetch';

export const postTicketRequest = async (email: string) => {
  const data = JSON.stringify({
    email: email,
    eventId: process.env.TOKET_EVENT_ID,
    ticketId: process.env.TOKET_TICKET_ID,
  });

  const config = {
    method: 'POST',
    headers: {
      'x-public-key': process.env.TOKET_PUB_KEY as string,
      'x-api-key': process.env.TOKET_API_KEY as string,
      'Content-Type': 'application/json',
    },
    body: data,
  };

  console.log(config);

  try {
    const res = await fetch(`${process.env.TOKET_API_URL}/v0/orders`, config);
    const data = await res.json();
    console.log(data);
    if (data.error) {
      throw Error('Toket Error');
    }
    return;
  } catch (error) {
    console.error(error);
    console.log('Email:', email);
    throw Error('Error with Toket Integration');
  }
};
