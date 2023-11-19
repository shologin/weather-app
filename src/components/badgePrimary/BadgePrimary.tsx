import "./BadgePrimary.css";
import rain_strong_2x from "../../assets/icons/rain_strong_2x.png";

export const BadgePrimary = () => {
  return (
    <div className="badge-primary glass-effect">
      <div className="badgePrimary-top">
        <div className="badgePrimary-top-temperature">
          <h3>
            4 <span className="text-secondary">&deg;C</span>
          </h3>
          <p>Rainy</p>
        </div>
        <div className="badgePrimary-top-icon">
          <img src={rain_strong_2x} alt="icon" width="96px" />
        </div>
      </div>
      <div className="badgePrimary-city">London</div>
    </div>
  );
};
