# MP-Toket-Integration
Integration for sending toket NFT Tickets after Payments with MP link

To Deploy use:

```
$ gcloud functions deploy prod-mp-toket-integration \
--gen2 \
--runtime=nodejs16 \
--region=southamerica-east1 \
--source=. \
--entry-point=MPPaymentToToketIntegration \
--trigger-http \
--allow-unauthenticated \
--env-vars-file .env.yaml
```

Your `.env.yaml` file must look like this:
```
TOKET_EVENT_ID: ""
TOKET_TICKET_ID: ""
TOKET_API_URL: ""
TOKET_PUB_KEY: ""
TOKET_API_KEY: ""
MP_API_TOKEN: ""
FALLBACK_URL: ""
REDIRECT_URL: ""
```