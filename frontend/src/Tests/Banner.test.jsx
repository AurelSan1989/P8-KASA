import { describe, expect, test } from "vitest";
import Banner from "../components/Banner";
import { screen, render } from "@testing-library/react";

describe("Banner", () => {
    test("Présence de l'image ?", () => {
        render(<Banner image={'../assets/BannerHome.jpg'}/>);
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })

    test("Présence du titre ?", () => {
        render(<Banner titre={"test"} />)
        const text = screen.getByText('test')
        expect(text).toBeInTheDocument()
    })

    test("Absence du titre ?", () => {
        render(<Banner titre={null}/>)
        const noText = screen.queryByText("test")
        expect(noText).not.toBeInTheDocument()
    })
})