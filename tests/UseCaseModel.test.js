// UseCaseModel.test.js
import UseCaseModel from "../src/models/UseCaseModel.js";

describe("UseCaseModel", () => {
  it("can be instantiated with attributes", () => {
    const model = new UseCaseModel({
      title: "Test",
      description: "Just testing",
    });

    expect(model.get("title")).toBe("Test");
    expect(model.get("description")).toBe("Just testing");
  });

  it("can change attributes", () => {
    const model = new UseCaseModel({ title: "Initial" });
    model.set("title", "Updated");

    expect(model.get("title")).toBe("Updated");
  });
});
