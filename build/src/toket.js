"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTicketRequest = void 0;
const node_fetch_1 = require("node-fetch");
const postTicketRequest = async (email) => {
    const data = JSON.stringify({
        email: email,
        eventId: process.env.TOKET_EVENT_ID,
        ticketId: process.env.TOKET_TICKET_ID,
    });
    const config = {
        method: 'POST',
        headers: {
            'x-public-key': process.env.TOKET_PUB_KEY,
            'x-api-key': process.env.TOKET_API_KEY,
            'Content-Type': 'application/json',
        },
        body: data,
    };
    console.log(config);
    try {
        const res = await (0, node_fetch_1.default)(`${process.env.TOKET_API_URL}/v0/orders`, config);
        const data = await res.json();
        console.log(data);
        if (data.error) {
            throw Error('Toket Error');
        }
        return;
    }
    catch (error) {
        console.error(error);
        console.log('Email:', email);
        throw Error('Error with Toket Integration');
    }
};
exports.postTicketRequest = postTicketRequest;
//# sourceMappingURL=toket.js.map