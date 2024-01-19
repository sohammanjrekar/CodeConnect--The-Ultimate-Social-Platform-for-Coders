import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState = [{
    id:1,
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
      addCampaign(state, action) {
        const { title, description, logo } = action.payload;
        state.push({ title, description, logo });
      },
      deleteCampaign(state, action) {
        const { id } = action.payload;
        return state.filter((campaign) => campaign.id !== id);
      },
      setCampaigns(state, action) {
        return action.payload;
      },
    },
  });

export const {addCampaign,deleteCampaign,setCampaigns}=campaignSlice.actions;

export default campaignSlice.reducer;