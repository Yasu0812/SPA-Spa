import { useMemo, useState } from 'react';
import { AchievementList } from './components/AchievementList';
import { MilkGame } from './components/MilkGame';
import { MoodMeter } from './components/MoodMeter';
import { OnsenBath } from './components/OnsenBath';
import { TemperatureControl } from './components/TemperatureControl';
import { ZenSoundPanel } from './components/ZenSoundPanel';
import { onsenFacts } from './data/facts';
import { useOnsenStore } from './store';

export default function App() {
  const [showHmrBath, setShowHmrBath] = useState(false);
  const bathState = useOnsenStore((s) => s.bathState);

  const randomFact = useMemo(
    () => onsenFacts[Math.floor(Math.random() * onsenFacts.length)],
    [bathState],
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1d2f2e] via-[#263f3d] to-[#101b1a] text-slate-100">
      <div className="mx-auto max-w-6xl p-6">
        <header className="mb-6 rounded-2xl border border-amber-100/30 bg-black/20 p-5">
          <h1 className="text-3xl font-bold tracking-tight">React SPA Onsen</h1>
          <p className="text-sm text-cyan-100/80">A hot spring simulator built with React.</p>
          <p className="mt-2 text-xs text-cyan-100/60">Towel physics status: spiritually simulated.</p>
          <button
            onClick={() => setShowHmrBath((v) => !v)}
            className="mt-3 rounded-md border border-cyan-200/40 px-3 py-1 text-xs"
          >
            Hot Module Replacement Bath
          </button>
          {showHmrBath && <p className="mt-2 text-xs text-amber-100">HMR soaked. Components now 12% more serene.</p>}
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <OnsenBath />
            <TemperatureControl />
          </div>
          <div className="space-y-4">
            <MoodMeter />
            <ZenSoundPanel />
            <MilkGame />
            <AchievementList />
          </div>
        </div>

        <footer className="mt-6 rounded-2xl border border-amber-100/30 bg-black/20 p-4 text-sm">
          <p>Random onsen fact: {randomFact}</p>
          {bathState === 'relaxing' && <p className="mt-2 text-amber-100">ととのう: Enlightenment screen unlocked in your heart.</p>}
        </footer>
      </div>
    </main>
  );
}
