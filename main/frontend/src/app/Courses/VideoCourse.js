"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setCampaigns,addCampaign,deleteCampaign } from "../../redux/Slices/campaignslice"; // Fix the import
import dateformat from "dateformat";
const CampaignComponent = () => {

  const campaigns = useSelector((state) => state.campaign);
  console.log(campaigns);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/campaigns");
        if (response.ok) {
          const data = await response.json();
          dispatch(setCampaigns(data));
          console.log(data)
        } else {
          console.error("Failed to fetch campaigns");
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchData();
  }, [dispatch]);


  return (
    <div>
      {campaigns.map((campaign) => (
        <div key={campaign.id}>
          <Link href={"/Courses/"+ campaign.slug}>   <h3>{campaign.title}</h3></Link>
       
          <p>{campaign.description}</p>
          <p>{dateformat(new Date(campaign.created_at),"dddd, mmmm , dS , yyyy , h:MM:ss TT")}</p>
        </div>
      ))}


    
    </div>
  );
};

export default CampaignComponent;
