/**
 *
 * Companies component
 */

const logos = [
  { image: "logos/shopify.png", title: "Shopify" },
  { image: "logos/coinbase.png", title: "Coinbase" },
  { image: "logos/dropbox.png", title: "Dropbox" },
  { image: "logos/intercom.png", title: "Intercom" },
  { image: "logos/marvel.png", title: "Marvel" },
  { image: "logos/automatic.png", title: "Automattic" },
];

const Companies = () => {
  return (
    <div className="mt-8 w-full flex flex-col items-center p-2">
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <section className="flex justify-between w-full gap-5 items-center p-2 mt-4 h-[50px] overflow-x-scroll">
        {logos.map((logo, idx) => (
          <div key={idx} className="">
            <img
              src={logo.image}
              title={logos.title}
              //   style={{ width: "calc(100% * 1. * 50px / 100px)" }}
              className=" object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Companies;
