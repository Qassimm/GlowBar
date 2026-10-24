import { CustomerInfoData } from "@/Data/types";
import BookingCard from "../UI/BookingCard";
import { inputCls } from "@/Data/utils";


type ChangeEvt = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const CustomerInfo = ({
  info,
  onChange,
}: {
  info: CustomerInfoData;
  onChange: (field: keyof CustomerInfoData, value: string) => void;
}) => {
  const bind = (field: keyof CustomerInfoData) => ({
    value: info[field],
    onChange: (e: ChangeEvt) => onChange(field, e.target.value),
  });

  return (
    <BookingCard title="Your Information">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Full name *
          <input
            className={`${inputCls} mt-1`}
            placeholder="Your name"
            {...bind("name")}
          />
        </label>
        <label className="text-sm">
          Phone number *
          <input
            className={`${inputCls} mt-1`}
            type="tel"
            placeholder="03XX XXXXXXX"
            {...bind("phone")}
          />
        </label>
        <label className="text-sm sm:col-span-2">
          Email (optional)
          <input
            className={`${inputCls} mt-1`}
            type="email"
            placeholder="you@email.com"
            {...bind("email")}
          />
        </label>
        <label className="text-sm sm:col-span-2">
          Additional notes (optional)
          <textarea
            rows={3}
            className={`${inputCls} mt-1 resize-none`}
            placeholder="Allergies, preferred stylist, anything we should know"
            {...bind("notes")}
          />
        </label>
      </div>
    </BookingCard>
  );
};

export default CustomerInfo;