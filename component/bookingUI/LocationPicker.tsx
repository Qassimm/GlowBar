import { LOCATIONS } from "@/Data/Constant";
import BookingCard from "../UI/BookingCard";
import { optionCls } from "@/Data/utils";

const LocationPicker = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <BookingCard title="Choose Location" hint="Select your preferred branch">
    <div className="grid gap-3 sm:grid-cols-3">
      {LOCATIONS.map((l) => (
        <label key={l} className={optionCls(value === l)}>
          <input
            type="radio"
            name="location"
            className="accent-primary"
            checked={value === l}
            onChange={() => onChange(l)}
          />
          {l}
        </label>
      ))}
    </div>
  </BookingCard>
);

export default LocationPicker;
