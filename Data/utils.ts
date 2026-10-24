export const money = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

export const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

export const optionCls = (active: boolean) =>
  `flex cursor-pointer items-center gap-2 rounded-xl border-2 px-4 py-3 text-xl transition ${
    active
      ? "border-primary bg-primary/20"
      : "border-primary/30 hover:border-primary"
  }`;

export const inputCls =
  "w-full rounded-xl border-2 border-primary/40 bg-white px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";