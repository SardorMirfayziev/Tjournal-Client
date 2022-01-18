import { render } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import MainHeader from "../MainHeader"



describe("rendering a component", () => {
    it("render", () => {
        const wrap = shallow(<MainHeader />)
        console.log(wrap)
    })
})


export { }