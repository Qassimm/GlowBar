import { WEEKDAYS } from "@/Data/Constant";
import { toISO } from "@/Data/utils";
import { useMemo, useState } from "react";

const Calendar = ({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (d: Date) => void;
}) => {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [month, setMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,0
  ).getDate();
  const cells: (number | null)[] = [
    ...Array(month.getDay()).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const canGoPrev =
    month.getFullYear() > today.getFullYear() ||
    month.getMonth() > today.getMonth();

  const shift = (n: number) => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1));
  };

  return (
    <div>
      <div className=" mb-3 flex items-center justify-between">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => shift(-1)}
          className="rounded-2xl px-3 py-1 text-primary disabled:opacity-30"
          aria-label="previouse month"
        >
          ‹
        </button>
        <span className="text-lg font-medium">
          {month.toLocaleString("en", { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          onClick={() => shift(1)}
          className="rounded-2xl px-3 py-1 text-primary"
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-lg">
        {WEEKDAYS.map((d, i) => (
          <span key={d} className="py-1 text-neutral-400">
            {d}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const day = new Date(month.getFullYear(), month.getMonth(), d);
          const pastDays = day < today;
          const isSel = selected && toISO(selected) === toISO(day);
          return (
            <button
            key={i}
              type="button"
              disabled={pastDays}
              onClick={() => onSelect(day)}
              className={`p-3 rounded-2xl text-lg transition ${
                isSel
                  ? "bg-primary text-primary-foreground"
                  : pastDays
                    ? "text-neutral-400"
                    : "hover:bg-primary/20"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
