import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent} from '@testing-library/react';

import Collapse from "../components/Collapse";
import styles from "../components/Collapse.module.css"

describe("Collapse", () => {
    test("Collapse fermée", () => {
        render(<Collapse titre={"titreTest"} contenu={"contenuTest"}/>);
        const contenu = screen.queryByText("contenuTest");
        expect(contenu).toHaveClass(styles.contentClose);
    })
    test("Collapse ouverte", () => {
        render(<Collapse titre={"titreTest"} contenu={"contenuTest"}/>);
        const title = screen.getByText("titreTest");
        fireEvent.click(title);
        const contenu = screen.getByText("contenuTest");
        expect(contenu).not.toHaveClass(styles.contentClose)
    })
})