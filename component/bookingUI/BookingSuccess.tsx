import { BookableService } from "@/Data/types";
import { money } from "@/Data/utils";
import { useEffect, useRef } from "react";


const BookingSuccess = ({
  location,
  date,
  time,
  phone,
  chosen,
  total,
  onClose,
}: {
  location: string;
  date: Date | null;
  time: string;
  phone: string;
  chosen: BookableService[];
  total: number;
  onClose: () => void;
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Escape se band ho, background scroll lock ho, focus button pe jaye
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    btnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-success-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-primary/40 bg-white p-8 text-center shadow-2xl"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-2xl text-white">
          ✓
        </div>

        <h2
          id="booking-success-title"
          className="mt-4 font-yester text-5xl text-primary"
        >
          You&apos;re booked!
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll call {phone} to confirm your appointment.
        </p>

        <div className="mt-6 rounded-2xl border border-dashed border-primary/40 p-4 text-left text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-neutral-500">Location</span>
            <span className="text-right">{location}</span>
          </div>
          <div className="mt-2 flex justify-between gap-3">
            <span className="text-neutral-500">When</span>
            <span className="text-right">
              {date?.toLocaleDateString("en", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
              , {time}
            </span>
          </div>

          <div className="my-3 border-t border-dashed border-primary/40" />

          <ul className="flex flex-col gap-1.5">
            {chosen.map((s) => (
              <li key={s.id} className="flex justify-between gap-3">
                <span>{s.name}</span>
                <span className="shrink-0">{s.price}</span>
              </li>
            ))}
          </ul>

          <div className="my-3 border-t border-dashed border-primary/40" />

          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span className="text-primary">{money(total)}</span>
          </div>
        </div>

        <button
          ref={btnRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-primary px-8 py-3 text-white transition hover:opacity-90"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;