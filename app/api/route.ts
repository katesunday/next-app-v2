export function GET(req: Request, res: Response) {
  console.log(req);
  return new Response('test');
}
