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

  it("formats milliseconds that are zero", () => {
    const d = new Date(2026, 2, 7, 14, 30, 45, 0);
    const ts = Timestamp.from(d, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260307143045.0");
  });

  it("formats milliseconds that are a multiple of 100", () => {
    const d = new Date(2026, 2, 7, 14, 30, 45, 500);
    const ts = Timestamp.from(d, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260307143045.5");
  });

  it("formats milliseconds that are a multiple of 10", () => {
    const d = new Date(2026, 2, 7, 14, 30, 45, 120);
    const ts = Timestamp.from(d, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260307143045.12");
  });

  it("pads single-digit values", () => {
    const d = new Date(2026, 0, 5, 3, 7, 9, 1);
    const ts = Timestamp.from(d, { precision: Precision.Millisecond });
    expect(ts.toString()).toBe("20260105030709.001");
  });

  it("appends UTC timezone offset (+0000)", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(0);
    // UTC offset 0: local 14:30 = UTC 14:30
    const d = new Date(Date.UTC(2026, 2, 7, 14, 30, 0));
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000+0000");
  });

  it("appends positive timezone offset (-0500 = EST)", () => {
    // getTimezoneOffset() returns 300 for UTC-5
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);
    // EST offset: local 14:30 = UTC 19:30
    const d = new Date(Date.UTC(2026, 2, 7, 19, 30, 0));
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000-0500");
  });

  it("appends negative timezone offset (+0530 = IST)", () => {
    // getTimezoneOffset() returns -330 for UTC+5:30
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(-330);
    // IST offset: local 14:30 = UTC 09:00
    const d = new Date(Date.UTC(2026, 2, 7, 9, 0, 0));
    const ts = Timestamp.from(d, { timezone: true });
    expect(ts.toString()).toBe("20260307143000+0530");
  });

  it("appends timezone with millisecond precision", () => {
    vi.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);
    // EST offset: local 14:30:45.123 = UTC 19:30:45.123
    const d = new Date(Date.UTC(2026, 2, 7, 19, 30, 45, 123));
    const ts = Timestamp.from(d, {
      precision: Precision.Millisecond,
      timezone: true,
    });
    expect(ts.toString()).toBe("20260307143045.123-0500");
  });

  it("does not append timezone for day precision or coarser", () => {
    const ts = Timestamp.from(date, {
      precision: Precision.Day,
      timezone: true,
    });
    expect(ts.toString()).toBe("20260307");
  });

  it("does not append timezone for year precision", () => {
    const ts = Timestamp.from(date, {
      precision: Precision.Year,
      timezone: true,
    });
    expect(ts.toString()).toBe("2026");
  });

  it("does not append timezone for month precision", () => {
    const ts = Timestamp.from(date, {
      precision: Precision.Month,
      timezone: true,
    });
    expect(ts.toString()).toBe("202603");
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
    expect(() => Timestamp.from(new Date("invalid"))).toThrow(
      "Invalid Date provided to Timestamp.from",
    );
  });
});
