import { useOnsenStore } from '../store';

export function MoodMeter() {
  const { mood } = useOnsenStore();

  const moodEmoji = {
    relaxed: '😌',
    sleepy: '😴',
    overheated: '🥵',
    enlightened: '✨',
  }[mood];

  return (
    <section className="rounded-2xl border border-amber-100/40 bg-black/20 p-4">
      <h2 className="text-lg font-semibold">Mood Meter</h2>
      <p className="mt-2 text-2xl">{moodEmoji} {mood}</p>
    </section>
  );
}
