import {useEffect, useRef} from 'react';

export interface Disposable {
  (): void;
}

const useEffectAfterMount = (callback: Disposable, deps: any): void => {
  const justMounted = useRef(true);
  useEffect(() => {
    if (!justMounted.current) {
      return callback();
    }
    justMounted.current = false;
  }, deps);
};

export default useEffectAfterMount;
