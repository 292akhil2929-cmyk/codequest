import { useCallback, useRef } from 'react';

export default function useSound(url) {
  const audioRef = useRef(null);

  const play = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.volume = 0.5;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch (e) {}
  }, [url]);

  return play;
}
