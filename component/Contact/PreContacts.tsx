import { PreContactsData } from "@/Data/contact";
import HeadingCenter from "../UI/HeadingCenter";

const PreContacts = () => {
  return (
    <section className="py-20 lg:py-24 px-6 flex justify-center items-center">
      <div className="flex flex-col items-center gap-15">
        <HeadingCenter
          title={"Preferred Contacts"}
          Slogan={
            "Every channel is monitored by real people from the GlowBar team — no bots, no long hold times."
          }
        />

        <div className="flex flex-wrap justify-center gap-15">
          {PreContactsData.map(
            ({ id, icon: Icon, title, description, action }) => (
              <div
                key={id}
                className="shadow-xl shadow-black/20 flex flex-col items-start  bg-primary-foreground border-2 border-primary rounded-2xl text-primary p-4"
              >
                <Icon className="h-10 w-10" />
                <div className="mt-3">
                  <h2 className="text-3xl">{title}</h2>
                  <p className="text-lg text-gray-500 max-w-xs">{description}</p>
                  <span>{action}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PreContacts;