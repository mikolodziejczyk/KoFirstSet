import { Repository } from "./repository";

describe("Testing repository methods", function () {

    let repository: Repository = new Repository();

    it("getText resolves when expected", function (done) {
        repository.getText("John", false).then((value) => {
            expect(value).toBe("John");
            done();
        }).catch(() => {
            fail("Shouldn't fail here.");
            done();
        });
    });

    it("getText fails when expected", function (done) {
        repository.getText("John", true).then((value) => {
            fail("Shouldn't resolve here.");
            done();
        }).catch(() => {
            done();
        });
    });

    it("getLength resolves when expected", function (done) {
        repository.getLength("John", false).then((value) => {
            expect(value).toBe(4);
            done();
        }).catch(() => {
            fail("Shouldn't fail here.");
            done();
        });
    });

    it("getLength fails when expected", function (done) {
        repository.getText("John", true).then((value) => {
            fail("Shouldn't resolve here.");
            done();
        }).catch(() => {
            done();
        });
    });

});
