import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState = [{
    id:0,
    title:"soham",
    description:"sohamdes",
    slug:"sohamslug",
    created_at:"2021-09-26T09:44:22.000000Z",
    updated_at:"2021-09-26T09:44:22.000000Z",
    logo:"/image/upload/v1705666606/eehkbxbjg7bagryslmtg.jpg"


}];

const campaignSlice = createSlice({
    name: "campaign",
    initialState,
    reducers: {
     
      setCampaigns(state, action) {
        const newCampaigns = action.payload.filter(
          (newCampaign) =>
            !state.some((existingCampaign) => existingCampaign.id === newCampaign.id)
        );
  
        return [...state, ...newCampaigns];
      },
    },
  });

export const {addCampaign,deleteCampaign,setCampaigns}=campaignSlice.actions;

export default campaignSlice.reducer;