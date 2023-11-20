import rain_strong from "../assets/icons/rain_strong.png";

export const BadgeSecondary = () => {
  return (
    <div className="badge-secondary glass-effect flex-center flex-col border-[1px] border-slate-500 border-opacity-50 rounded-lg p-2 min-w-fit text-sm text-autumn">
      <div className="badgeSecondary-date">14.08</div>
      <div className="badgeSecondary-icon">
        <img src={rain_strong} alt="icon" width="48px" />
      </div>
      <div className="text-sm">Rainy</div>
      <h3 className="text-xl">+4 &deg;C</h3>
    </div>
  );
};
