import { useOnsenStore } from '../store';

export function ZenSoundPanel() {
  const { zen, toggleZen } = useOnsenStore();

  return (
    <section className="rounded-2xl border border-amber-100/40 bg-black/20 p-4">
      <h2 className="text-lg font-semibold">Zen Mode</h2>
      <div className="mt-3 space-y-2 text-sm">
        {(
          [
            ['water', 'Water sound'],
            ['shishiOdoshi', 'Shishi-odoshi'],
            ['birds', 'Birds'],
          ] as const
        ).map(([key, label]) => (
          <label key={key} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span>{label}</span>
            <input type="checkbox" checked={zen[key]} onChange={() => toggleZen(key)} />
          </label>
        ))}
      </div>
    </section>
  );
}
