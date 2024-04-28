"use client"
import React, { useState, useEffect } from 'react';
import dateformat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';

const Page = ({ params }) => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [submitted ,setSubmitted]=useState(false);
  const [submitting ,setSubmitting]=useState(false);
  const campaigns = useSelector((state) => state.campaign);
  

  useEffect(() => {
    // Fetch the ID from the first campaign with the matching slug
    console.log('campaigns', campaigns);
    console.log('params.slug', params.slug);
    const matchingCampaign = campaigns.find(campaign => campaign.slug === params.slug);
    console.log('matchingCampaign', matchingCampaign);
  
    if (matchingCampaign) {
      const { id } = matchingCampaign;
      console.log('save id', id);
      setId(id);
    }
  }, [campaigns, params.slug]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify({ email: email, campaign: id }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    setSubmitting(true);
    fetch('http://127.0.0.1:8000/api/subscribers', options)
      .then((response) => response.json())
      .then((data) => {
setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
        setSubmitting(false);
      });
  };

  return (
    <div>
      hii {params.slug}
      {campaigns
        .filter((campaign) => campaign.slug === params.slug)
        .map((campaign) => (
          <div key={campaign.id}>
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p>{dateformat(new Date(campaign.created_at), 'dddd, mmmm , dS , yyyy , h:MM:ss TT')}</p>
          </div>
        ))}
      <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
        <div className="flex flex-col items-center">
          <span className="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">
            117+ people joined this week
          </span>
          <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
            Want actionable SEO advice from me? Then join this newsletter
          </h3>
          {!submitted ? 
            <form
            onSubmit={handleSubmit}
            action=""
            className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
              placeholder="Email Address"
              required
            />
            <button
              type="submit" 
              className="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
            >
                {submitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>  : <div>thanks </div>}
        </div>
      </div>
    </div>
  );
};

export default Page;
