"use client";

import { BookableService } from "@/Data/types";

import { useBookingForm } from "@/Hooks/useBookingForm";
import LocationPicker from "../bookingUI/LocationPicker";
import ServicePicker from "../bookingUI/ServicePicker";
import DateTimePicker from "../bookingUI/DateTimePicker";
import CustomerInfo from "../bookingUI/CustomerInfo";
import PaymentMethod from "../bookingUI/PaymentMethod";
import TotalBar from "../bookingUI/TotalBar";
import BookingSummary from "../bookingUI/BookingSummary ";
import BookingSuccess from "../bookingUI/BookingSuccess";

const BookingForm = ({
  services,
  preselectedId,
}: {
  services: BookableService[];
  preselectedId?: string;
}) => {
  const { state, actions, chosen, total, submit } = useBookingForm(
    services,
    preselectedId,
  );
  const { location, selected, date, time, info, payment, status, error } =
    state;

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
      <div className="flex flex-col gap-6">
        <LocationPicker value={location} onChange={actions.setLocation} />
        <ServicePicker
          services={services}
          selected={selected}
          onToggle={actions.toggleService}
        />
        <DateTimePicker
          date={date}
          time={time}
          onDateChange={actions.setDate}
          onTimeChange={actions.setTime}
        />
        <CustomerInfo info={info} onChange={actions.setField} />

        <PaymentMethod value={payment} onChange={actions.setPayment} />

        <TotalBar
          total={total}
          sending={status === "sending"}
          error={error}
          onSubmit={submit}
        />
      </div>

      <BookingSummary
        location={location}
        date={date}
        time={time}
        chosen={chosen}
        total={total}
      />

      {status === "done" && (
        <BookingSuccess
          location={location}
          date={date}
          time={time}
          phone={info.phone}
          chosen={chosen}
          total={total}
          onClose={actions.reset}
        />
      )}
    </div>
  );
};

export default BookingForm;
