import React from "react";

type LoadingContainerProps = {
  children: React.ReactNode;
};

export default function LoadingContainer({ children }: LoadingContainerProps) {
  return (
    <div className="w-full h-[200px] flex items-center justify-center">
      {children}
    </div>
  );
}
