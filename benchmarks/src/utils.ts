import { PerformanceObserver } from 'node:perf_hooks';

export function startGCObs() {
  const stats = { count: 0, totalMs: 0 };
  const obs = new PerformanceObserver((list) => {
    for (const e of list.getEntries()) {
      stats.count++;
      stats.totalMs += e.duration;
    }
  });
  obs.observe({ entryTypes: ['gc'] });
  return { stats, stop: () => obs.disconnect() };
}

export function mem() {
  const m = process.memoryUsage();
  return {
    rssMB: +(m.rss / 1e6).toFixed(1),
    heapUsedMB: +(m.heapUsed / 1e6).toFixed(1),
    extMB: +(m.external / 1e6).toFixed(1),
  };
}
