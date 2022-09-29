import React, { ReactNode } from "react";

export default function Button({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
