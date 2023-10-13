import React from "react";
import "./reviewscontent.css";
import { Reviewbg } from "../assets/import";
import ReviewCard from "./ReviewCard";

const ReviewsContent = () => {
  const dataReview = [
    {
      id: 1,
      title: "Wali Khan",
      review:
        "The cheapest Sugar Wax Brazilian you can get in the Atlanta area! The location is also very convenient in the Publix shopping center. No need to worry about parking! Both times, I had Tina, who was great! I have also gotten my eyebrows & upper lip threaded here. You truly can’t beat the service and price. I also recommend their sugar scrubs. It’s all organic & homemade. My favorite is the peach scrub. The wait time is also not long at all!",
    },
    {
      id: 2,
      title: "Nilofar",
      review:
        "This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!",
    },
    {
      id: 3,
      title: "Yasmeen",
      review:
        "This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!",
    },
    {
      id: 4,
      title: "Sadia",
      review:
        "Prompt, professional and precise. Everything you want in eyebrow threading! I was impressed with Tina, I got my eyebrows tinted for the first time and it looks AWESOME! I then added upper lip to the threading services. Since everything was going so well, I got a henna tattoo by Aarzoo to cover up some surgical scars on my foot.",
    },
    {
      id: 5,
      title: "Shabana",
      review:
        "Unique does a wonderful job with threading of eye brows and lips. I refuse to go elsewhere. Tina always does a wonderful job, exactly what i want!! Tina also does a 5/5 job for sugaring /Brazilian. It was my first time, and she was very professional and comforting.",
    },
    {
      id: 6,
      title: "Muskaan",
      review:
        "So the first woman who serviced me was Sonya, who is now on medical leave. Since Sonya is out, Tina was more than accommodating and really cared to make me comfortable while performing services. These girls are the best!",
    },
  ];

  return (
    <div className="reviews-content">
      <img src={Reviewbg} alt="img" />
      <div className="reviews-main">
        <div className="reviews-container">
          {dataReview.map((item) => (
            <ReviewCard item={item} key={item.id} />
          ))}
        </div>
        <div className="reviews-divider" />
        <div className="write-review">
          <h4>Write Review</h4>
          <div className="reviews-input">
            <input type="text" placeholder="Name" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Review" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsContent;
