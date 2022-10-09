import { useEffect } from 'react';

const defaultTarget = typeof window !== 'undefined' ? window : null;

export default function useKeyPress(
  keyFilter: string | string[],
  callback: Function,
  target: any = defaultTarget
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (typeof keyFilter === 'string' && keyFilter === key) {
        callback();
      }

      if (Array.isArray(keyFilter)) {
        const isKeyPressed = keyFilter.some((k) => k === key);

        if (isKeyPressed) callback();
      }
    };

    if (target) {
      target.addEventListener('keydown', handler);
    }

    return () => target.removeEventListener('keydown', handler);
  });
}
