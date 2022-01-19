import mount from "@test/mount";

import { Card } from "./index";

describe("Wrapper component testing with enzyme", () => {
    const component = mount(<Card />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
