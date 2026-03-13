import { useOnsenStore } from '../store';

export function MilkGame() {
  const { chugMilk, milkScore, milkCount } = useOnsenStore();

  return (
    <section className="rounded-2xl border border-amber-100/40 bg-black/20 p-4">
      <h2 className="text-lg font-semibold">Coffee Milk Mini Game</h2>
      <p className="text-sm text-slate-300">Rapid click challenge. Fill the bottle with 25 clicks.</p>
      <button
        onClick={chugMilk}
        className="mt-3 rounded-xl bg-amber-100 px-4 py-3 text-3xl"
      >
        🥛
      </button>
      <p className="mt-2 text-sm">Chug progress: {milkScore}/25</p>
      <p className="text-sm">風呂上がり最高スコア: {milkCount}</p>
    </section>
  );
}
