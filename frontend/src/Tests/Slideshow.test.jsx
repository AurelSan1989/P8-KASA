import Slideshow from "../components/Slideshow";

import { describe, test, expect } from "vitest";
import { render, screen, fireEvent} from '@testing-library/react';

describe('Slideshow', () => {
    test("passage à l'image suivante", () => {
        render(
            <Slideshow 
                pictures={ [ "photo1.jpg", "photo2.jpg", "photo3.jpg"] }
                title="Logement test" 
            />);
            const img = screen.getByAltText("Logement test");
            expect(img).toHaveAttribute('src', 'photo1.jpg');
            const nextArrow = screen.getByAltText("Image suivante");
            fireEvent.click(nextArrow);
            expect(img).toHaveAttribute('src', 'photo2.jpg');
    })
    test("Passage à l'image précédente", () => {
        render(
            <Slideshow 
                pictures={ [ "photo1.jpg", "photo2.jpg" ] }
                title="Logement test"
            />
        )
        const img = screen.getByAltText('Logement test');
        const nextArrow = screen.getByAltText('Image suivante');
        const previousArrow = screen.getByAltText('Image précédente');
        expect(img).toHaveAttribute('src', 'photo1.jpg');
        fireEvent.click(nextArrow);
        expect(img).toHaveAttribute('src', 'photo2.jpg');
        fireEvent.click(previousArrow);
        expect(img).toHaveAttribute('src', 'photo1.jpg');
    })
    test("Rebouclage vers la dernière image", () => {
        render(
            <Slideshow 
                pictures={ [ "photo1.jpg", "photo2.jpg", "photo3.jpg"] }
                title="Logement test" 
            />);
            const img = screen.getByAltText("Logement test");
            expect(img).toHaveAttribute('src', 'photo1.jpg');
            const prevArrow = screen.getByAltText('Image précédente');
            fireEvent.click(prevArrow);
            expect(img).toHaveAttribute('src', 'photo3.jpg');
    })
    test("Pas de flèches si une seule image", () => {
        render(
            <Slideshow 
                pictures={ [ "photo1.jpg" ] }
                title="Logement test"
            />            
        )
        const next = screen.queryByAltText("Image suivante");
        const previous = screen.queryByAltText("Image précédente")
        expect(next).not.toBeInTheDocument()
        expect(previous).not.toBeInTheDocument()
    })
    test("Rebouclage vers la première image", () => {
        render(
            <Slideshow 
                pictures={ [ "photo1.jpg", "photo2.jpg" ] }
                title="Logement test"
            />
        )
        const img = screen.getByAltText('Logement test');
        const nextArrow = screen.getByAltText('Image suivante');
        expect(img).toHaveAttribute('src', 'photo1.jpg');
        fireEvent.click(nextArrow);
        expect(img).toHaveAttribute('src', 'photo2.jpg');
        fireEvent.click(nextArrow);
        expect(img).toHaveAttribute('src', 'photo1.jpg');
    });
})
