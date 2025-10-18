import { useEffect, useState } from "react";

export default function LocationIdentifier() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setLocation(data))
      .catch(err => console.error(err));
  }, []);

  if (!location) return <div>Loading approximate location...</div>;

  return (
    <div>
      You appear to be in {location.city}, {location.region}, {location.country_name}.
    </div>
  );
}
