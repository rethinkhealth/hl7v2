import { Precision } from "../src/precision";
import { Timestamp } from "../src/timestamp";

describe("Timestamp.from", () => {
  const date = new Date(2026, 2, 7, 14, 30, 45, 123);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("defaults to second precision", () => {
    const ts = Timestamp.from(date);
    expect(ts.precision).toBe("second");
    expect(ts.toString()).toBe("20260307143045");
  });

  it("formats with year precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Year });
    expect(ts.toString()).toBe("2026");
  });

  it("formats with month precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Month });
    expect(ts.toString()).toBe("202603");
  });

  it("formats with day precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Day });
    expect(ts.toString()).toBe("20260307");
  });

  it("formats with hour precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Hour });
    expect(ts.toString()).toBe("2026030714");
  });

  it("formats with minute precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Minute });
    expect(ts.toString()).toBe("202603071430");
  });

  it("formats with second precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Second });
    expect(ts.toString()).toBe("20260307143045");
  });

  it("formats with millisecond precision", () => {
    const ts = Timestamp.from(date, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260307143045.123");
  });

  it("pads single-digit values", () => {
    const d = new Date(2026, 0, 5, 3, 7, 9, 1);
    const ts = Timestamp.from(d, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260105030709.001");
  });

  it("appends UTC timezone offset (+0000)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(0);
    const d = new Date(2026, 2, 7, 14, 30, 0);
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000+0000");
  });

  it("appends positive timezone offset (-0500 = EST)", () => {
    // getTimezoneOffset() returns 300 for UTC-5
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);
    const d = new Date(2026, 2, 7, 14, 30, 0);
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000-0500");
  });

  it("appends negative timezone offset (+0530 = IST)", () => {
    // getTimezoneOffset() returns -330 for UTC+5:30
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-330);
    const d = new Date(2026, 2, 7, 14, 30, 0);
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000+0530");
  });

  it("does not append timezone for day precision or coarser", () => {
    const ts = Timestamp.from(date, {
      precision: Precision.Day,
      timezone: true,
    });
    expect(ts.toString()).toBe("20260307");
  });

  it("exposes the date via toDate()", () => {
    const ts = Timestamp.from(date);
    expect(ts.toDate().getTime()).toBe(date.getTime());
  });

  it("returns a copy from toDate() — not the original", () => {
    const ts = Timestamp.from(date);
    const d1 = ts.toDate();
    const d2 = ts.toDate();
    expect(d1).not.toBe(d2);
    expect(d1.getTime()).toBe(d2.getTime());
  });

  it("throws on invalid Date", () => {
    expect(() => Timestamp.from(new Date("invalid"))).toThrow("Invalid Date");
  });
});
