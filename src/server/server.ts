import express from 'express';
import type { Express, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app: Express = express();
const PORT: number | string = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../../dist');

app.use(express.static(distPath));

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'VitalsLog API is live and healthy',
  });
});

app.get('/{*splat}', (req: Request, res: Response) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  
  res.sendFile(path.join(distPath, 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Production-ready test server on http://localhost:${PORT}`);
  });
}

export default app;