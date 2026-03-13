import { useState } from 'react';
import { useOnsenStore } from '../store';
import { SteamEffect } from './SteamEffect';

export function OnsenBath() {
  const { inBath, enterBath, leaveBath, temperature, bathState } = useOnsenStore();
  const [splashId, setSplashId] = useState(0);

  const hot = temperature > 45;

  return (
    <section className={`relative rounded-2xl border border-amber-100/40 bg-[#1f2f2d] p-4 ${hot ? 'animate-shake' : ''}`}>
      <h2 className="mb-3 text-xl font-semibold">Onsen Bath Simulator</h2>
      <div className="relative h-72 overflow-hidden rounded-2xl border-4 border-onsen-wood bg-gradient-to-b from-cyan-700/40 to-onsen-deep">
        <SteamEffect />
        <button
          onClick={() => setSplashId((n) => n + 1)}
          className="absolute inset-0"
          aria-label="Splash water"
        />
        {/* Rubber duck + monkey mode: purely comedic and essential for engineering morale. */}
        <div className="absolute left-6 top-8 text-3xl">🦆</div>
        <div className="absolute right-5 top-6 text-3xl">🐒❄️</div>
        <div
          className="absolute left-1/2 -translate-x-1/2 text-6xl transition-all duration-1000"
          style={{ top: inBath ? '56%' : '18%' }}
        >
          {inBath ? '🧘' : '🧍'}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-cyan-400/35" />
        <span
          key={splashId}
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70"
          style={{ animation: splashId ? 'splash 700ms ease-out forwards' : 'none' }}
        />
      </div>

      <p className="mt-4 text-sm text-emerald-100/90">Current area: {bathState}</p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={enterBath}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
          disabled={inBath}
        >
          Enter bath
        </button>
        <button
          onClick={leaveBath}
          className="rounded-lg bg-amber-200 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
          disabled={!inBath}
        >
          Exit bath
        </button>
      </div>
    </section>
  );
}
