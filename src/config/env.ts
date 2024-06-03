import { z } from 'zod';

/**
 * Your .env variables will be parsed here
 */
const envSchema = z.object({
  WELCOME_MESSAGE: z.string().min(1),
  POKEMON_API_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
