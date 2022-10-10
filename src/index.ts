import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {getEmailFromPaymentId} from './mercadopago';
import {postTicketRequest} from './toket';

export const MPPaymentToToketIntegration: HttpFunction = async (req, res) => {
  // For a general use case, some middleware should be here to verify that the request is a redirect from mercadopago
  console.log(req.query);

  if (!req.query.payment_id) {
    res.redirect(process.env.FALLBACK_URL!);
    return;
  }
  console.log(req.query.payment_id);

  let email: string;
  try {
    email = await getEmailFromPaymentId(req.query.payment_id as string);
  } catch (error) {
    res.redirect(process.env.FALLBACK_URL!);
    return;
  }
  // console.log(email);

  try {
    await postTicketRequest(email);
  } catch (error) {
    res.redirect(process.env.FALLBACK_URL!);
    return;
  }

  res.redirect(process.env.REDIRECT_URL!);
};
