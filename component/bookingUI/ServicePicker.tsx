import { useMemo, useState } from "react";
import BookingCard from "../UI/BookingCard";
import { FaCheck } from "react-icons/fa";
import { BookableService } from "@/Data/types";

const ServicePicker = ({
  services,
  selected,
  onToggle,
}: {
  services: BookableService[];
  selected: string[];
  onToggle: (v: string) => void;
}) => {
  const [filter, setFilter] = useState("All");

  const groups = useMemo(
    () => ["All", ...Array.from(new Set(services.map((s) => s.group)))],
    [services],
  );

  const visible = services.filter((s) => filter === "All" || s.group === filter);

  return (
    <BookingCard
      title="Select Services"
      hint="Tap to add or remove, pick as many as you like"
    >
      <div className="flex flex-wrap gap-2">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setFilter(g)}
            className={`rounded-full border px-4 py-1 text-lg transition ${
              filter === g
                ? "border-primary bg-primary text-white"
                : "border-primary/40 text-primary hover:bg-primary/10"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {visible.map((s) => {
          const on = selected.includes(s.id);
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(s.id)}
              className={`flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 text-left transition ${
                on
                  ? "border-primary bg-primary/20"
                  : "border-primary/30 hover:border-primary"
              }`}
            >
              <span>
                <span className="block text-lg font-medium">{s.name}</span>
                <span className="block  font-medium">{s.price}</span>
              </span>
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] ${
                  on
                    ? "border-primary bg-primary text-white"
                    : "border-primary/50"
                }`}
              >
                {on && <FaCheck />}
              </span>
            </button>
          );
        })}
      </div>
    </BookingCard>
  );
};

export default ServicePicker;
