import React from "react";
import { HomeContainer } from './styles';
import { Button } from "../../components";
import { Navbar } from "../navbar";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar />
            <section className="home-section">
                <div className="overlay">
                    <div className="content">
                        <h2>Personalize sua <br /> casa nova sem dor <br />de cabeça</h2>
                        <Button />
                    </div>
                </div>
            </section>
            <span className="highlight-line" />
        </HomeContainer>
    );
}