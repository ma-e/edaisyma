import React, { useState, useEffect } from "react";
import styles from "./Map.module.css";
import { useAdmin } from "../../context/AdminContext";

const BACKEND_URL = "https://edaisymanosql.onrender.com/countries"; // replace with your backend URL

const VisitedCountriesMap: React.FC = () => {
  const { isAdmin } = useAdmin();

  const [countries, setCountries] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Fetch countries from backend on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(BACKEND_URL);
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data: string[] = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCountries();
  }, []);

  const handleAddCountry = async () => {
    const code = input.trim().toUpperCase();
    if (!code || countries.includes(code)) return;

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to add country");
      }

      // Update state
      setCountries([...countries, code]);
      setInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const now = new Date();
  const currentYear = now.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[now.getMonth()];

  const iframeSrc = `https://www.fla-shop.com/visited-countries/embed/?st=${countries.join(
    ","
  )}&vc=F2A1A1&uc=B3C3CA&hc=40bfa6&bc=ffffff`;

  return (
    <div className={styles.visitedMapContainer}>
      <h1 className={styles.visitedMapTitle}>
        Visited Countries ({currentYear}, {currentMonthName}) : {countries.length}
      </h1>

      {isAdmin && (
        <div className={styles.visitedMapInput}>
          <input
            type="text"
            placeholder="Enter country code (e.g., US)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddCountry}>Add Country</button>
        </div>
      )}

      <div className={styles.visitedMapIframeWrapper}>
        <iframe src={iframeSrc} frameBorder={0} scrolling="no"></iframe>
      </div>
    </div>
  );
};

export default VisitedCountriesMap;
