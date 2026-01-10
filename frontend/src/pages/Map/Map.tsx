import React, { useState } from "react";
import styles from "./Map.module.css";
import { useAdmin } from "../../context/AdminContext";

const VisitedCountriesMap: React.FC = () => {
    const { isAdmin } = useAdmin();

    const [countries, setCountries] = useState<string[]>([
        "AT", "BE", "BS", "CA", "CN", "CO", "CZ", "DE", "ES", "FR", "GB", "GR", "HK",
        "IT", "JP", "KR", "MX", "NL", "PR", "PT", "TH", "TW", "US", "CL"
    ]);

    const [input, setInput] = useState("");

    const handleAddCountry = () => {
        const code = input.trim().toUpperCase();
        if (code && !countries.includes(code)) {
            setCountries([...countries, code]);
            setInput("");
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
            <div className={styles.visitedMapControls}>

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
            </div>

            <div className={styles.visitedMapIframeWrapper}>
                <iframe src={iframeSrc} frameBorder={0} scrolling="no"></iframe>
            </div>
        </div>
    );
};

export default VisitedCountriesMap;
