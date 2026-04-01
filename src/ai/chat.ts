export async function askAI(message: string) {
  const res = await fetch("/api/ai", {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  return res.json();
}
