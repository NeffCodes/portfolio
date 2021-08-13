export default function useWindowSize() {
  if (typeof window !== 'undefined') {
    return (
      {
        width: window.innerWidth,
        height: window.innerHeight,
      } || {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      } || {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }
    );
  }
}
