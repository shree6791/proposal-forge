"use client";

export function ObjectivesDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-white text-sm text-gray-500">
          or choose from predefined objectives
        </span>
      </div>
    </div>
  );
}