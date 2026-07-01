import 'dotenv/config';
import express, { Request, Response } from 'express';
import { healthResponseSchema, type HealthResponse } from '@studyforge/shared-types';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());

// ─── Health ───────────────────────────────────────────────────────────────────

app.get('/api/health', (_req: Request, res: Response) => {
  const body: HealthResponse = { status: 'ok' };
  // Runtime validation — ensures the response always matches the shared contract
  healthResponseSchema.parse(body);
  res.json(body);
});

// ─── Start ────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`🚀  API running on http://localhost:${PORT}`);
});

export default app;
