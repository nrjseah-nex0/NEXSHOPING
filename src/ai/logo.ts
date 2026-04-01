export async function generateLogo(prompt: string) {
  const res = await fetch("/api/logo", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  return res.json();
}
