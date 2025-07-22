import 'dotenv/config';

export const PORT = process.env.PORT;

// envs para mercado pago en produccion
export const PRODUCTION_MERCADOPAGO_ACCESS_TOKEN = process.env.PRODUCTION_MP_ACCES_TOKEN;
export const PRODUCTION_MERCADOPAGO_PUBLIC_KEY = process.env.PRODUCTION_MP_PUBLIC_KEY;
export const PRODUCTION_MERCADOPAGO_CLIENT_SECRET = process.env.PRODUCTION_MP_CLIENT_SECRET;
export const PRODUCTION_MERCADOPAGO_CLIENT_ID = process.env.PRODUCTION_MP_CLIENT_ID;

// envs para mercado pago en test
export const TEST_MERCADOPAGO_ACCESS_TOKEN = process.env.TEST_MP_ACCES_TOKEN;
export const TEST_MERCADOPAGO_PUBLIC_KEY = process.env.TEST_MP_PUBLIC_KEY;
export const TEST_MERCADOPAGO_CLIENT_SECRET = process.env.TEST_MP_CLIENT_SECRET;
export const TEST_MERCADOPAGO_CLIENT_ID = process.env.TEST_MP_CLIENT_ID;
