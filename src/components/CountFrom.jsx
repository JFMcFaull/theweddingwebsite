import React from "react";

export default function CountFrom({ fromDate, className = '' }) {
  const [daysPassed, setDaysPassed] = React.useState(0);

  React.useEffect(() => {
    function updateDays() {
      const now = new Date();
      const difference = now - new Date(fromDate);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const accuntant = days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDaysPassed(accuntant);
    }

    updateDays();
    // Update every hour so the number increments shortly after midnight local time
    const dayInterval = setInterval(updateDays, 1000 * 60 * 60);

    return () => clearInterval(dayInterval);
  }, [fromDate]);

  // Render a simple inline element so this component can be embedded inside text
  return (
    <span className={`count-from ${className}`} aria-live="polite">
      {daysPassed}
    </span>
  );
}