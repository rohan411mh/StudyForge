import { z } from 'zod';

// ─── Health ───────────────────────────────────────────────────────────────────

export const healthResponseSchema = z.object({
  status: z.literal('ok'),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
