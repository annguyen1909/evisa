import { useState } from "react";
import { cn } from "@/lib/utils";

interface CustomAccordionProps {
  items: {
    id: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
  }[];
  className?: string;
}

export default function CustomAccordion({ items, className }: CustomAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  // Calculate which row the selected item is in
  const getSelectedRow = (index: number) => Math.floor(index / 4) + 1;

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="contents">
          {/* Trigger */}
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-all",
              openId === item.id && "ring-2 ring-primary"
            )}
          >
            {item.trigger}
          </button>

          {/* Content */}
          {openId === item.id && (
            <div 
              className="col-span-full mt-4 mb-4"
              style={{
                gridColumn: "1 / -1",
                gridRow: `${getSelectedRow(index) + 1}`
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 