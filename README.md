# cumulio-pollution-landingpage
Landing Page for the Demo Cumul.io Pollution Plugin 

This repository accompanies the tutorial to [create a basic plugin from an open API](https://blog.cumul.io/2020/10/07/create-a-cumul-io-api-plugin-with-air-visuals-data/).

To run and see this accompanying landing page:

1. `npm install`
2. Create a file called ‘.env’ in the root directory. Here, fill the CUMULIO_API_KEY and CUMULIO_API_TOKEN fields with the ones from your Cumul.io profile. If you don’t have any yet, you can create them in the API Tokens tab in your profile:
`CUMULIO_API_KEY=XXX`
`CUMULIO_API_TOKEN=XXX`
3. Replace dashboardId in public/js/app.js and server.js with your own dashboard ID which you can find on the dashboard editor in Cumul.io.
4. `npm run start` or `node index.js`