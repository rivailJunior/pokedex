import { z } from 'zod';

/**
 * Your .env variables will be parsed here
 */
const envSchema = z.object({
  WELCOME_MESSAGE: z.string(),
  POKEMON_API_URL: z.string(),
  LOCAL_API_URL: z.string(),
});


export const env = envSchema.parse({
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE,
  POKEMON_API_URL: process.env.POKEMON_API_URL,
  LOCAL_API_URL: process.env.LOCAL_API_URL,
});
