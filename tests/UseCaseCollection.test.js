// UseCaseCollection.test.js
import UseCaseCollection from "../src/collections/UseCaseCollection.js";

describe("UseCaseCollection", () => {
  it("can be instantiated with models", () => {
    const collection = new UseCaseCollection([
      { title: "One" },
      { title: "Two" },
    ]);

    expect(collection.length).toBe(2);
    expect(collection.at(0).get("title")).toBe("One");
  });

  it("can add a new model", () => {
    const collection = new UseCaseCollection();
    collection.add({ title: "New" });

    expect(collection.length).toBe(1);
    expect(collection.at(0).get("title")).toBe("New");
  });
});
