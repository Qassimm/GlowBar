import { money } from "@/Data/utils";

const TotalBar = ({
  total,
  sending,
  error,
  onSubmit,
}: {
  total: number;
  sending: boolean;
  error: string;
  onSubmit: (e: React.MouseEvent) => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-3xl border border-primary bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-neutral-500 ">Estimate Total</p>
          <p className="font-yester text-4xl text-primary mt-3">{money(total)}</p>
        </div>
        <button type="button" onClick={onSubmit} disabled={sending}
        className="rounded-full bg-primary px-8 py-3 text-lg text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {sending ? "Booking" : "Confirm booking"}
        </button>
      </div>
      {error && (
        <p role="alert" className="text-lg text-red-600">
          {error}
        </p>
      )}
    </>
  );
};

export default TotalBar;
