import { useMutation } from "@tanstack/react-query";
const API = import.meta.env.VITE_API_URL; 

export function useSendMail() {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await fetch(`${API}/send`, {
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
