import { RefObject, useEffect, useRef } from "react";

interface IUseObserver {
  (
    ref: RefObject<HTMLDivElement>,
    canLoad: boolean,
    isLoading: string,
    callback: () => void
  ): void;
}

const useObserver: IUseObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (isLoading === "loading") return;
    if (observer.current) observer.current?.disconnect();
    const cb = function (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ): void {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    if (ref.current) observer.current.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};

export { useObserver };
