import { TIME_SLOTS } from "@/Data/Constant";


const TimeSlots = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (t: string) => void;
}) => (
  <div>
    <p className="mb-2 font-medium">Time</p>
    <div className="grid max-h-80 grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-1">
      {TIME_SLOTS.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          className={`rounded-lg border px-3 py-1.5 transition ${
            value === t
              ? "border-primary bg-primary text-white"
              : "border-primary/50 hover:border-primary"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  </div>
);

export default TimeSlots;