/**
 *
 * Review Section here
 */

const ReviewSection = () => {
  return (
    <div className="w-full max-w-screen-xl flex lg:flex-row flex-col justify-between items-center">
      {/* Left container for statement and rating */}
      <div className="w-full flex flex-col gap-8 items-center lg:items-start">
        <img src="logos/shopify.png" alt="" className="lg:self-start" />
        <section>
          {"⭐ "
            .repeat(5)
            .split()
            .map((star, idx) => (
              <p key={idx} className="hover:scale-110 transition ease-in">
                {star}
              </p>
            ))}
        </section>
        <h3 className="text-4xl font-medium lg:pr-12 lg:text-left text-center">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team
        </h3>

        <div className="flex justify-between md:mb-5 lg:mb-0">
          <section className="flex items-center">
            {/* Reviewer's Avatar */}
            <img
              src="images/review_avatar.png"
              alt="Sarah"
              className="hover:saturate-200 hover:scale-125"
            />

            {/* Reviewer's Details */}
            <section>
              <p className="font-bold">Sarah Thompson</p>
              <p className="text-xs">Project Manager, Shopify</p>
            </section>
          </section>

          {/* Direction Buttons for next review */}
          <section className="flex md:gap-3 sm:ml-4">
            <img
              src="icons/arrow_left.png"
              alt="Left"
              className="rounded-full hover:shadow-xl hover:scale-125 scale-75 md:scale-100"
            />
            <img
              src="icons/arrow_right.png"
              alt="Right"
              className="rounded-full hover:shadow-xl hover:scale-110 scale-75 md:scale-100"
            />
          </section>
        </div>
      </div>

      {/* Right container for review picture */}
      <div className="w-full flex flex-col gap-3 items-center justify-center mt-4 md:mt-0 ">
        {/* Top Image Grid */}
        <section className="w-full flex gap-3 justify-center">
          <img
            src="images/review_img1.png"
            alt="Picture"
            className="self-end hover:saturate-200 hover:scale-150 transition ease-out hover:shadow-2xl hover:rounded-xl"
          />
          <img
            src="images/review_img2.png"
            alt="Picture"
            className="self-end hover:saturate-200 hover:scale-150 transition ease-out hover:shadow-2xl hover:rounded-xl"
          />
        </section>

        {/* Bottom Image Grid */}
        <section className="w-full flex gap-3 justify-center flex-wrap sm:flex-nowrap">
          <img
            src="images/review_img3.png"
            alt="Picture"
            className="self-start hover:saturate-200 hover:scale-150 transition ease-out hover:shadow-2xl hover:rounded-xl"
          />
          <img
            src="images/review_img4.png"
            alt="Picture"
            className="self-start hover:saturate-200 hover:scale-150 transition ease-out hover:shadow-2xl hover:rounded-xl"
          />
          <img
            src="images/review_img5.png"
            alt="Picture"
            className="self-start hover:saturate-200 hover:scale-150 transition ease-out hover:shadow-2xl hover:rounded-xl"
          />
        </section>
      </div>
    </div>
  );
};

export default ReviewSection;
