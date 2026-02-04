import { useEffect, useRef } from "react";

export function useDebouncedChange<T extends HTMLInputElement | HTMLTextAreaElement>(
  onChange?: (e: React.ChangeEvent<T>) => void,
  debounceMs?: number
) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (event: React.ChangeEvent<T>) => {
    if (!onChange) return;

    if (!debounceMs || debounceMs <= 0) {
      onChange(event);
      return;
    }

    if (typeof event.persist === "function") {
      event.persist();
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      onChange(event);
    }, debounceMs);
  };
}
