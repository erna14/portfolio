export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  const res = await fetch("http://localhost:4000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to send message");
  }

  return data;
}
