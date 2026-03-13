import { useOnsenStore } from '../store';

export function TemperatureControl() {
  const { temperature, setTemperature } = useOnsenStore();

  const message =
    temperature < 38 ? 'ぬるい...' : temperature <= 42 ? '最高' : temperature > 45 ? '熱すぎ' : '良い感じ';

  if (temperature > 45) {
    console.warn('Warning: bath temperature exceeds safe hydration levels.');
  }

  return (
    <section className="rounded-2xl border border-amber-100/40 bg-black/20 p-4">
      <h2 className="text-lg font-semibold">Temperature Control</h2>
      <p className="mt-1 text-sm text-slate-300">{temperature}°C · {message}</p>
      <input
        className="mt-3 w-full accent-cyan-400"
        type="range"
        min={35}
        max={50}
        value={temperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
      />
    </section>
  );
}
