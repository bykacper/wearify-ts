import { useMutation } from "@tanstack/react-query";

export function useSendMail() {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      return res.json();
    }
  });
}
