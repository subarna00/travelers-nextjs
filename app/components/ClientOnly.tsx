"use client";
import React, { FC, ReactNode, useState, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export const ClientOnly: FC<Props> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
};
