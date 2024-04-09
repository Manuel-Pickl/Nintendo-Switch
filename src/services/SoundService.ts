import { Sound } from "../types/Sound";
import { soundMapping } from "../types/SoundMapping";

export class SoundService {
  private static audioRefs: Partial<Record<Sound, HTMLAudioElement>> = {};

  public static preloadSounds() {
    for (const sound of Object.values(Sound)) {
      const path = soundMapping[sound];
      if (!path) {
        return;
      }

      const audio = new Audio(path);
      audio.load();
      this.audioRefs[sound] = audio;
    }
  }

  public static playSound(sound: Sound) {
    const audio = this.audioRefs[sound];
    audio?.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
  }
}