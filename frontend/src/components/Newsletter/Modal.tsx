import { useState, type MouseEventHandler, type FormEvent } from "react";
import styles from "./Newsletter.module.css";
import modalImage from "@/assets/images/modalImage.png";
import { useSendMail } from "@/api/useSendMail";

export default function Modal({ onCloseModal }: { onCloseModal: MouseEventHandler }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendMail = useSendMail();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email.trim()) return;

        sendMail.mutate(email, {
            onSuccess: () => {
                setName("");
                setEmail("");
                onCloseModal(e as unknown as React.MouseEvent<HTMLButtonElement>);
            },
        });
    };

    return (
        <section className={styles.modal} role="dialog" aria-modal="true">
            <div className={styles.closeModalWrapper}>
                <button
                    className={styles.closeModalButton}
                    onClick={onCloseModal}
                    aria-label="Zamknij okno"
                >
                    X
                </button>
            </div>

            <div className={styles.modalContent}>
                <img src={modalImage} alt="" />

                <div className={styles.modalForm}>
                    <p>
                        <strong>-10% na pierwsze zamówienie.</strong><br />
                        Zapisz się do newslettera
                    </p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Imię *</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={sendMail.isPending}
                        >
                            {sendMail.isPending ? "Wysyłanie..." : "Prześlij"}
                        </button>

                        {sendMail.isError && (
                            <p className={styles.errorMessage}>
                                Wystąpił błąd. Spróbuj ponownie.
                            </p>
                        )}

                        {sendMail.isSuccess && (
                            <p className={styles.successMessage}>Email wysłany!</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
