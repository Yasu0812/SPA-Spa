const particles = Array.from({ length: 20 }, (_, i) => i);

export function SteamEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((id) => (
        <span
          key={id}
          className="absolute bottom-8 h-7 w-7 rounded-full bg-onsen-steam/70 blur-sm animate-steam"
          style={{
            left: `${10 + (id * 4.2) % 85}%`,
            animationDelay: `${(id % 7) * 0.5}s`,
            animationDuration: `${3.5 + (id % 4) * 0.9}s`,
          }}
        />
      ))}
    </div>
  );
}
