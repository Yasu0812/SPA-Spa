import { create } from 'zustand';

type BathState = 'dressing room' | 'washing area' | 'bathing' | 'overheated' | 'relaxing';
type Mood = 'relaxed' | 'sleepy' | 'overheated' | 'enlightened';

interface Achievement {
  id: string;
  label: string;
  unlocked: boolean;
}

interface OnsenStore {
  bathState: BathState;
  mood: Mood;
  temperature: number;
  inBath: boolean;
  milkScore: number;
  milkCount: number;
  bathStart: number | null;
  zen: {
    water: boolean;
    shishiOdoshi: boolean;
    birds: boolean;
  };
  achievements: Achievement[];
  setBathState: (value: BathState) => void;
  setTemperature: (value: number) => void;
  enterBath: () => void;
  leaveBath: () => void;
  toggleZen: (key: 'water' | 'shishiOdoshi' | 'birds') => void;
  chugMilk: () => void;
  unlockAchievement: (id: string) => void;
}

const initialAchievements: Achievement[] = [
  { id: 'hot48', label: 'Survived 48°C water', unlocked: false },
  { id: 'milk5', label: 'Drank 5 milk bottles', unlocked: false },
  { id: 'bath10', label: 'Stayed in bath for 10 minutes', unlocked: false },
  { id: 'satori', label: 'Reached ととのう enlightenment', unlocked: false },
];

export const useOnsenStore = create<OnsenStore>((set, get) => ({
  bathState: 'dressing room',
  mood: 'relaxed',
  temperature: 40,
  inBath: false,
  milkScore: 0,
  milkCount: 0,
  bathStart: null,
  zen: { water: true, shishiOdoshi: false, birds: true },
  achievements: initialAchievements,
  setBathState: (value) => set({ bathState: value }),
  setTemperature: (value) => {
    let mood: Mood = 'relaxed';
    let bathState: BathState = get().bathState;

    if (value > 45) {
      mood = 'overheated';
      bathState = 'overheated';
    } else if (value >= 40 && value <= 42) {
      mood = 'enlightened';
      if (get().inBath) {
        bathState = 'relaxing';
      }
      get().unlockAchievement('satori');
    } else if (value < 38) {
      mood = 'sleepy';
    }

    if (value >= 48) {
      get().unlockAchievement('hot48');
    }

    set({ temperature: value, mood, bathState });
  },
  enterBath: () => {
    console.log('♨ You are now bathing in React');
    set({ inBath: true, bathState: 'bathing', bathStart: Date.now() });
  },
  leaveBath: () => {
    const started = get().bathStart;
    if (started && Date.now() - started >= 10 * 60 * 1000) {
      get().unlockAchievement('bath10');
    }
    set({ inBath: false, bathState: 'relaxing', bathStart: null });
  },
  toggleZen: (key) => set((state) => ({ zen: { ...state.zen, [key]: !state.zen[key] } })),
  chugMilk: () => {
    const nextScore = get().milkScore + 1;
    set({ milkScore: nextScore });

    if (nextScore % 25 === 0) {
      const milkCount = get().milkCount + 1;
      set({ milkCount, milkScore: 0 });
      if (milkCount >= 5) {
        get().unlockAchievement('milk5');
      }
    }
  },
  unlockAchievement: (id) =>
    set((state) => ({
      achievements: state.achievements.map((item) =>
        item.id === id ? { ...item, unlocked: true } : item,
      ),
    })),
}));
