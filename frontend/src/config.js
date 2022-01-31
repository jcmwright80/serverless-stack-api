const config = {
  STRIPE_KEY: "pk_test_51JXCHaKU1lAVlnYJ25Q9fxdSAGqdG1VoNrsADajQIwBkQ5KbP1DSQKKdKJmZNmJ5AtLFEtor0zf6fcUy0Z3ica2M00WDFlzcEF",
  MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;