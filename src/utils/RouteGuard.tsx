"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface RouteGuardProps {
  children: React.ReactNode;
}

export default function RouteGuard({ children }: RouteGuardProps) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      if (!user || user.role !== "ADMIN") {
        router.push("/");
      }
    }
  }, [pathname, user, router]);

  return <>{children}</>;
}
