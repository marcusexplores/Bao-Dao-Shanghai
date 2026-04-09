import type { ComponentProps } from "react";
import { Lightbulb } from "lucide-react";

type TipboxProps = ComponentProps<"div"> & {
  title?: string;
};

export const Tipbox = ({ title = "Tip!", children }: TipboxProps) => {
  return (
    <div
      className="relative ml-8 md:ml-10 my-12 pl-12 pr-6 py-6 rounded-2xl border backdrop-blur-xl shadow-sm"
      style={{
        backgroundColor: "oklch(0.98 0.01 28 / 0.6)",
        borderColor: "oklch(0.55 0.18 28 / 0.15)",
        backgroundImage: "linear-gradient(to bottom right, oklch(0.97 0.03 28 / 0.4), oklch(0.99 0.01 28 / 0.2))",
        boxShadow: "0 4px 20px -5px oklch(0.55 0.18 28 / 0.08)",
      }}
    >
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 md:-left-10">
        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-yellow-100 to-white rounded-2xl rotate-3 shadow-md border-2 border-white">
          <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-yellow-600 fill-yellow-200" />
        </div>
      </div>
      <div className="pl-6 md:pl-10">
        <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-1">
          {title}
        </h4>
        <div className="leading-relaxed font-medium">{children}</div>
      </div>
    </div>
  );
};
