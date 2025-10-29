declare namespace NodeJS {
  interface ProcessEnv {
    // MongoDB Credentials
    MONGO_USER: string;
    MONGO_PASSWORD: string;
    MONGO_HOST: string;
    MONGO_DB_NAME: string;

    // Encryption Key
    ENCRYPTION_KEY: string;

    // Email Credentials
    ZEPTOMAIL_HOST_URL: string;
    ZEPTOMAIL_API_KEY: string;
    ZEPTOMAIL_FROM_EMAIL: string;
  }
}
