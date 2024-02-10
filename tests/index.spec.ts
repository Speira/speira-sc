import { assert } from "chai";

import "mocha";

import * as app from "../src/index";

describe("Package", () => {
  it("should be an object", () => {
    assert.isObject(app);
  });

  it("should have a component property", () => {
    assert.property(app, "Styled");
  });
});
