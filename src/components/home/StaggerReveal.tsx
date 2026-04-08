import { useEffect, useRef, useState, type ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const StaggerReveal = ({ children, className = "", staggerDelay = 120 }: StaggerRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const children = ref.current.querySelectorAll("[data-stagger]");
    children.forEach((child, i) => {
      const el = child as HTMLElement;
      el.style.animationDelay = `${i * staggerDelay}ms`;
      el.classList.add("animate-fade-in-up");
    });
  }, [visible, staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : <div className="opacity-0">{children}</div>}
    </div>
  );
};

export default StaggerReveal;
