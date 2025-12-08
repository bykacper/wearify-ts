import type { ReactNode } from "react";
import styles from "./ProductDetails.module.css";

type AccordionProps = {
    title: ReactNode,
    children: ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
    return (
        <details className={styles.dropDown}>
            <summary>{title}</summary>
            <div className={styles.dropDownContent}>
                {children}
            </div>
        </details>
    );
};

export default Accordion;
