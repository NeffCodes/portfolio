export default function useWindowSize() {
  if (typeof window !== 'undefined') {
    if(window.innerWidth){
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    if (document.documentElement.clientWidth) {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    }

    if (document.body.clientWidth) {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }
    }
  }
}
