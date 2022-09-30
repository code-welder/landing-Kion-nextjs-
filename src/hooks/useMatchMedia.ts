import { useEffect, useState } from 'react';

export default function useMatchMedia(query: string) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleMatches = (event: MediaQueryListEvent) =>
      setMatch(event.matches);

    setMatch(matchMedia.matches);

    matchMedia.addEventListener('change', handleMatches);

    return () => matchMedia.removeEventListener('change', handleMatches);
  }, [query]);

  return match;
}
