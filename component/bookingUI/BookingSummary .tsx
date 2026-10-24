import { BookableService } from "@/Data/types";
import { money } from "@/Data/utils";

const Divider = () => (
  <div className="my-4 border-t border-dashed border-primary/40" />
);

const BookingSummary = ({
  location,
  date,
  time,
  chosen,
  total,
}: {
  location: string;
  date: Date | null;
  time: string;
  chosen: BookableService[];
  total: number;
}) => {
  return (
    <aside className="rounded-3xl border border-primary bg-primary-foreground p-5 lg:sticky lg:top-25">
      <h2 className="font-yester text-3xl text-primary">Booking Summary</h2>
      <dl className="mt-3 flex flex-col gap-2">
        <div className="flex justify-between gap-3">
          <dt className="text-neutral-500 text-lg">Location</dt>
          <dd className="text-right text-lg">{location || "—"}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-neutral-500 text-lg">Date/Time</dt>
          <dd className="text-right text-lg">
            {date && time
              ? `${date.toLocaleDateString("en", {
                  day: "numeric",
                  month: "short",
                })}, ${time}`
              : "—"}
          </dd>
        </div>
      </dl>

      <Divider/>

      {chosen.length === 0 ? (
        <p className="text-lg">No services selected yet.</p>
      ): (
        <ul className="flex flex-col gap-2">
            {chosen.map((s) => (
                <li key={s.id} className="flex justify-between text-lg gap-3">
                   ‣ {s.name}
                </li>
            ))}
        </ul>
      )}

      <Divider />
 
    <div className="flex justify-between font-medium text-lg">
      <span >Subtotal</span>
      <span className="text-primary">{money(total)}</span>
    </div>
    </aside>
  );
};

export default BookingSummary;
