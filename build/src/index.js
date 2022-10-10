"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPPaymentToToketIntegration = void 0;
const mercadopago_1 = require("./mercadopago");
const toket_1 = require("./toket");
const MPPaymentToToketIntegration = async (req, res) => {
    // For a general use case, some middleware should be here to verify that the request is a redirect from mercadopago
    console.log(req.query);
    if (!req.query.payment_id) {
        res.redirect(process.env.FALLBACK_URL);
        return;
    }
    console.log(req.query.payment_id);
    let email;
    try {
        email = await (0, mercadopago_1.getEmailFromPaymentId)(req.query.payment_id);
    }
    catch (error) {
        res.redirect(process.env.FALLBACK_URL);
        return;
    }
    // console.log(email);
    try {
        await (0, toket_1.postTicketRequest)(email);
    }
    catch (error) {
        res.redirect(process.env.FALLBACK_URL);
        return;
    }
    res.redirect(process.env.REDIRECT_URL);
};
exports.MPPaymentToToketIntegration = MPPaymentToToketIntegration;
//# sourceMappingURL=index.js.map