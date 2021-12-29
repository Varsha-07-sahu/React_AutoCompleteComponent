import React, { useState } from "react";
// import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "./AutoComplete";
import CountriesList from "resources/data/country_list.json";
import "./SearchCountry.css";
// import ExternalInfo from "components/ExternalInfo";

const AutocompletePage = () => {
    const [country, setcountry] = useState("");
    return (
        <div className="row">
            <div className="col text-center">
                <h2>Search Country!!!</h2>
                <p>React auto-fill component</p>
                <div className="d-flex justify-content-center mb-3">
                    <div className="search-bar-container">
                        <Autocomplete
                            data={CountriesList}
                            onSelect={country => setcountry(country)}
                        />

                        <FontAwesomeIcon
                            icon="search"
                            className="search-bar-icon"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AutocompletePage;
