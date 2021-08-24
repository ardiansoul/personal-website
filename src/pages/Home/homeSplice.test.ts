import * as homeSplice from "./homeSplice"
// @ponicode
describe("homeSplice.getTitle", () => {
    test("0", () => {
        let result: any = homeSplice.getTitle("foo bar")
        expect(result).toBe("foo bar")
    })

    test("1", () => {
        let result: any = homeSplice.getTitle("Hello, world!")
        expect(result).toBe("Hello, world!")
    })
})
