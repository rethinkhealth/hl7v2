import { QueryError } from "../src/errors";

describe(QueryError, () => {
  it("carries its code, path, and name", () => {
    const error = new QueryError("PADDED_PATH", { path: " PID" });
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("QueryError");
    expect(error.code).toBe("PADDED_PATH");
    expect(error.path).toBe(" PID");
    expect(error.message).toBe(
      "Path ` PID` starts or ends with whitespace; a path holds no spaces."
    );
  });

  it("carries the position and limit of a position past the limit", () => {
    const error = new QueryError("POSITION_TOO_LARGE", {
      limit: 1000,
      path: "PID.1001",
      position: 1001,
    });
    expect(error.position).toBe(1001);
    expect(error.limit).toBe(1000);
  });

  it("suggests the path written with `.` for a path written with `-`", () => {
    expect(new QueryError("DASH_SEPARATOR", { path: "PID-5.1" }).message).toBe(
      "Path `PID-5.1` separates its steps with `-`; a path separates segment groups, the segment, and its field with `.`, as in `PID.5.1`."
    );
  });
});
