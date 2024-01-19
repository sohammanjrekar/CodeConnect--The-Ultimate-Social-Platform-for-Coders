"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCampaigns,addCampaign,deleteCampaign } from "../../redux/Slices/campaignslice"; // Fix the import

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
          <h3>{campaign.title}</h3>
          <p>{campaign.description}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default CampaignComponent;
