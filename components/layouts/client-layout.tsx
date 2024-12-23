"use client";

import { useEffect } from "react";
import AOS from "aos";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
}