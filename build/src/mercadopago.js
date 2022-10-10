"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailFromPaymentId = void 0;
const node_fetch_1 = require("node-fetch");
const getEmailFromPaymentId = async (paymentId) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.MP_API_TOKEN}`,
        },
    };
    try {
        const res = await (0, node_fetch_1.default)(`https://api.mercadopago.com/v1/payments/${paymentId}`, config);
        const data = await res.json();
        console.log(data);
        return data.payer.email;
    }
    catch (error) {
        console.error(error);
        throw Error('Error with MercadoPago integration');
    }
};
exports.getEmailFromPaymentId = getEmailFromPaymentId;
//# sourceMappingURL=mercadopago.js.map