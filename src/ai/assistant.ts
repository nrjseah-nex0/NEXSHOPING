export async function assistantReply(userId: string, message: string) {
  const res = await fetch("/api/assistant", {
    method: "POST",
    body: JSON.stringify({ userId, message }),
  });

  return res.json();
}
