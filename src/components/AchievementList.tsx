import { useOnsenStore } from '../store';

export function AchievementList() {
  const { achievements } = useOnsenStore();

  return (
    <section className="rounded-2xl border border-amber-100/40 bg-black/20 p-4">
      <h2 className="text-lg font-semibold">Achievements</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {achievements.map((item) => (
          <li key={item.id} className="rounded-lg bg-white/5 px-3 py-2">
            <span className="mr-2">{item.unlocked ? '✅' : '⬜'}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
