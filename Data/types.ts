export type BookableService = {
  id: string; // `${slug}::${category}`
  group: string; // parent service title (e.g. "Hair", "Skin")
  name: string;
  price: string; // original display price
  amount: number; // numeric price for totals
};

export type CustomerInfoData = {
  name: string;
  phone: string;
  email: string;
  notes: string;
};

export type PaymentType = "salon" | "online";