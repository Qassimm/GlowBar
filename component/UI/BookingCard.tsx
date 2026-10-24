import React from "react";

const BookingCard = ({
    title,
    hint,
    children
}:{
    title: string,
    hint?: string,
    children?: React.ReactNode;
}) => {
  return (
    <section className="rounded-3xl border border-primary bg-primary-foreground p-5 sm:p-6">
    <div className="mb-4">
      <h2 className="font-yester text-3xl text-primary">{title}</h2>
      {hint && <p className="text-lg text-neutral-500">{hint}</p>}
    </div>
    {children}
  </section>
  );
};

export default BookingCard;