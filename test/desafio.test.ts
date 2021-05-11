import { delay, retry } from "rxjs/operators";
import { example } from "../src/desafio";

jest.mock("rxjs/operators", () => {
  const operators = jest.requireActual("rxjs/operators");
  operators.delay = jest.fn(() => (s) => s); // <= mock delay
  operators.retry = jest.fn(() => (s) => s); // <= mock trye
  return operators;
});

describe("delay", () => {
  it("should delay one second", () => {
    const spy = jest.fn();
    example.subscribe(spy);

    expect(delay).toHaveBeenCalledWith;
  });
});
