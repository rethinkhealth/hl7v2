import { QueryError } from "../src/errors";

describe(QueryError, () => {
  it("carries its code, path, and name", () => {
    const error = new QueryError("INVALID_PATH", { path: "PID-5" });
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("QueryError");
    expect(error.code).toBe("INVALID_PATH");
    expect(error.path).toBe("PID-5");
    expect(error.message).toBe(
      "Path `PID-5` does not follow the path grammar; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`."
    );
  });
});
