"use client";
import { useState } from "react";
import { askAI } from "../ai/chat";

export default function ChatWidget() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  const send = async () => {
    const res = await askAI(msg);
    setChat([...chat, msg, res.reply]);
  };

  return (
    <div>
      {chat.map((c, i) => <p key={i}>{c}</p>)}
      <input onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
