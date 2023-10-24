import React from 'react'
import "./upcomingservices.css"
import { Cross, DateLogo, InfoCard, TimeLogo, UpLogo } from '../assets/import'
import UpcomingCard from './UpcomingCard';

const UpcomingServices = () => {
  const upcomingData = [
    {
      id: 1,
      image: InfoCard,
      heading: "Waxing | Full Body | 20mins",
      dateLogo: DateLogo,
      dateText: "Mon, Jan, 17, 2023",
      timeLogo: TimeLogo,
      timeText: "6:30 PM",
      btnImage: Cross,
      btnText: "Cancel",
      price: "$25",
    },
    {
      id: 2,
      image: UpLogo,
      heading: "Facial  |  Full  |  20mins",
      dateLogo: DateLogo,
      dateText: "Mon, Feb, 25, 2023",
      timeLogo: TimeLogo,
      timeText: "6:30 PM",
      btnImage: Cross,
      btnText: "Cancel",
      price: "$25",
    },
  ];
  return (
    <div className="upservices-main">
   {upcomingData.map((item) =>( <UpcomingCard item={item} key={item.id}/>) )}
    </div>
  );
}

export default UpcomingServices