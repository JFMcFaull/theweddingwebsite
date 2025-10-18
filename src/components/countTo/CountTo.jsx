import React from "react";

export default function CountTo({ toDate, className = '' }) {
  const [daysUntil, setDaysUntil] = React.useState(0);

  React.useEffect(() => {
    function updateDays() {
      const now = new Date();
      const difference = new Date(toDate) - now;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysUntil(days);
    }

    updateDays();

    const dayInterval = setInterval(updateDays, 1000 * 60 * 60);

    return () => clearInterval(dayInterval);
  }, [toDate]);

  return (
    <span className={`count-to ${className}`} aria-live="polite">
      {daysUntil}
    </span>
  );
}