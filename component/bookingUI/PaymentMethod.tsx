import { PaymentType } from "@/Data/types";
import BookingCard from "../UI/BookingCard";
import { optionCls } from "@/Data/utils";

const OPTIONS : [PaymentType, string][] = [
    ["salon" , "Pay at Salon"],
    ["online" , "Pay online"]
]

const PaymentMethod = ({
    value,
    onChange
}: {
    value: string;
    onChange: (v: PaymentType) => void;
}) => {
  return (
    <BookingCard title="Payment">
        <div className="flex flex-col gap-3 ">
        {OPTIONS.map(([v, label]) => (
            <label key={v} className={optionCls(value === v)} >
                <input 
                type="radio"
                name="payment"
                className="accent-primary"
                checked={value === v}
                onChange={() => onChange(v)}
                />
                {label}
            </label>
        ))}
        </div>
    </BookingCard>
  );
};

export default PaymentMethod;