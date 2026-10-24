import { FaComment } from "react-icons/fa";
import { FiClock} from "react-icons/fi";
import { RiMapPin2Fill } from "react-icons/ri";

const WHATSAPP_URL = "https://wa.me/920000000000";  

const branches = [
  {
    name: "Bahria Town, Lahore",
    address: "Sector C, Bahria Town, Lahore",
    hours: "12:00 PM – 8:30 PM",
  },
  {
    name: "Celebration, Florida",
    address: "Market Street, Celebration,",
    hours: "12:00 PM – 8:30 PM",
  },
  {
    name: "The Woodlands, Texas",
    address: "Market Street, The Woodlands,",
    hours: "12:00 PM – 8:30 PM",
  },
];

const SideContacts = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* WhatsApp card */}
      <div className="flex flex-col items-start gap-4 rounded-4xl bg-brand-from p-6 text-primary-foreground ">
        <FaComment size={44} strokeWidth={1.5} aria-hidden="true" />

        <h3 className="text-2xl font-semibold">Prefer to chat?</h3>

        <p className="leading-relaxed">
          Message us on WhatsApp for the fastest reply — usually within minutes
          during opening hours.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl bg-primary-foreground py-2.5 text-center font-medium text-primary transition-opacity hover:opacity-90"
        >
          Open WhatsApp
        </a>
      </div>

      {/* Opening hours card */}
      <div className="flex flex-col gap-3 rounded-3xl border-2 border-primary p-5 bg-primary-foreground">
        <div className="flex items-center gap-2 text-primary">
          <FiClock size={24} aria-hidden="true" />
          <h3 className="text-xl">Opening hours</h3>
        </div>

        <p className="border-b border-primary/20 pb-3  font-medium text-primary">
          Monday – Sunday 12:00 PM – 8:30 PM
        </p>

        <p className="leading-relaxed opacity-70">
          Timings may vary on public holidays. WhatsApp us to confirm.
        </p>
      </div>

      {/* Branches card */}
      <div className="flex flex-col gap-4 rounded-3xl border-2 border-primary p-5 bg-primary-foreground">
        <div className="flex items-center gap-2 text-primary">
          <RiMapPin2Fill size={24} aria-hidden="true" />
          <h3 className="text-xl">Our branches</h3>
        </div>

        <ul className="flex flex-col gap-4">
          {branches.map((branch) => (
            <li key={branch.name} className="flex flex-col gap-0.5">
              <span className="font-medium text-primary">
                {branch.name}
              </span>
              <span className="text-sm opacity-70">{branch.address}</span>
              <span className="text-sm opacity-70">{branch.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideContacts;