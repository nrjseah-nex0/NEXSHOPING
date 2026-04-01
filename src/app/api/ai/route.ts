export async function POST(req: Request) {
  const { message } = await req.json();

  return new Response(JSON.stringify({
    reply: "AI says: " + message
  }));
}
