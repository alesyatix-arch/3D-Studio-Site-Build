import { jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
function useInView(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      }
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div"
}) {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ref,
      className: `reveal ${inView ? "reveal-in" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
export {
  Reveal as R,
  useInView as u
};
