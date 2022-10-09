import { useEffect, useState } from 'react';

type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export default function useBodyOverflowStyle() {
  const [bodyOverflow, setBodyOverflow] = useState<Overflow>('visible');

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  return setBodyOverflow;
}
