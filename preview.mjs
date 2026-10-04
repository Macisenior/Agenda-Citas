import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const page = new URL('./index.html', import.meta.url);

createServer(async (_request, response) => {
  try {
    const html = await readFile(fileURLToPath(page));
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(html);
  } catch {
    response.writeHead(500);
    response.end('No se pudo cargar el prototipo.');
  }
}).listen(4173, '127.0.0.1', () => {
  console.log('Agenda disponible en http://127.0.0.1:4173');
});
