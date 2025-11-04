import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css"; //Pastikan Bootstrap diimpor
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <h1 className="text-center mb-4">
                Welcome to the Registration Page
            </h1>
            <RegistrationForm />
        </div>
    );
};

export default App;
