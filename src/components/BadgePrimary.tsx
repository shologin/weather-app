import rain_strong_2x from "../assets/icons/rain_strong_2x.png";

export const BadgePrimary = () => {
  return (
    <div className="badge-primary bg-green-700 py-2 px-5">
      <div className="badgePrimary-top flex items-center gap-5">
        <div className="badgePrimary-top-temperature">
          <h3 className="text-4xl">
            4 <span className="text-secondary">&deg;C</span>
          </h3>
          <p className="text-lg">Rainy</p>
        </div>
        <div className="badgePrimary-top-icon">
          <img src={rain_strong_2x} alt="icon" width="96px" />
        </div>
      </div>
      <div className="badgePrimary-city text-2xl">London</div>
    </div>
  );
};
