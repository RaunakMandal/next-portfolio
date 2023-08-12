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
    EMAIL_LOGIN: string;
    EMAIL_PASSWORD: string;
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_RAUNAK: string;
  }
}
