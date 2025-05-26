import AppView from "../src/views/AppView.js";
import UseCaseModel from "../src/models/UseCaseModel.js";

describe("AppView", () => {
  let view;

  beforeEach(() => {
    $("#app").empty(); // Clear app container
    view = new AppView(); // Create a new instance (not singleton)
  });

  it("renders with empty collection initially", () => {
    view.render();
    expect($("#app .card").length).toBe(0);
    expect($("#app .container").length).toBe(1);
  });

  it("renders one use case when added to the collection", () => {
    view.collection.add(
      new UseCaseModel({
        title: "Test Case",
        description: "This is a test description.",
        link: "https://example.com",
      })
    );

    // render() is triggered by the `add` event
    const card = $("#app .card");
    expect(card.length).toBe(1);
    expect(card.find(".card-title").text()).toBe("Test Case");
    expect(card.find("a").attr("href")).toBe("https://example.com");
  });

  it("renders multiple use cases with reset", () => {
    view.collection.reset([
      {
        title: "Case 1",
        description: "Description 1",
      },
      {
        title: "Case 2",
        description: "Description 2",
        link: "https://link.com",
      },
    ]);

    const cards = $("#app .card");
    expect(cards.length).toBe(2);
    expect(cards.eq(1).find("a").attr("href")).toBe("https://link.com");
  });
});
