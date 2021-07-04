import { useCallback, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const isRefCallback = x => typeof x === 'function';

const isMutableRefObject = x => typeof x === 'object';

/**
 * Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
 * while receiving a forwared ref.
 *
 * @param refs - the refs and callback refs that should be merged
 * @return a merged callback ref
 * @public
 */
export const useMergedRefs = (...refs) => {
  const refsRef = useRef(refs);

  useIsomorphicLayoutEffect(() => {
    refsRef.current = refs;
  });

  return useCallback((refValue) => {
    const refs = refsRef.current;

    refs.filter(Boolean).forEach((ref) => {
      if (isRefCallback(ref)) {
        ref(refValue);
        return;
      }

      if (isMutableRefObject(ref)) {
        ref.current = refValue;
      }
    });
  }, []);
};
