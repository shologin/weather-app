import { BadgeSecondary } from "./BadgeSecondary";

export const ForecastBadgesContainer = () => {
  return <div className="forecast-badges-container border-[1px] rounded-3xl border-slate-800 flex gap-2 w-fit max-w-[90%] mt-5 p-2 overflow-x-auto overflow-y-hidden">
    <BadgeSecondary />
    <BadgeSecondary />
    <BadgeSecondary />
    <BadgeSecondary />
    <BadgeSecondary /> 
    <BadgeSecondary /> 
    <BadgeSecondary /> 
    
   
  </div>;
};
