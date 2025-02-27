import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [allCourses, setAllCourses] = useState([]);

    // Fetch courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    };

    // Load courses on component mount
    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = { currency, allCourses };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
