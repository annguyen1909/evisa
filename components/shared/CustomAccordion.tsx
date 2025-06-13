import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks";

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
  const isMobile1 = useMediaQuery("(max-width: 639px)");
  const isMobile2 = useMediaQuery("(min-width: 640px) and (max-width: 763px)");
  const isDesktop = useMediaQuery("(min-width: 764px)");

  // Calculate which row the selected item is in
  const getSelectedRow1 = (index: number) => Math.floor(index) + 1;
  const getSelectedRow2 = (index: number) => Math.floor(index / 2) + 1;
  const getSelectedRow4 = (index: number) => Math.floor(index / 4) + 1;


  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="contents">
          {/* Trigger */}
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-300",
              "hover:border-[#16610E] hover:scale-[1.02]",
              openId === item.id && "ring-2 ring-[#16610E] border-[#16610E] shadow-lg"
            )}
          >
            {item.trigger}
          </button>

          {/* Content */}
          {openId === item.id && (
            <div
              className="col-span-full mt-4 mb-4 bg-white rounded-lg shadow-lg border border-gray-200 p-6"
              style={{
                gridColumn: "1 / -1",
                gridRow: `${isMobile1
                    ? getSelectedRow1(index)
                    : isMobile2
                      ? getSelectedRow2(index)
                      : getSelectedRow4(index)
                  } + 1`

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