// import { Component } from "react";
import React from "react";
import "./ProfileCard.css";

export const ShowProfileCard = () => {
    return (
        <div className="container">
            <div className="box-card">
                <div className="box-card--head">
                    <div className="avatar">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar"/>
                    </div>
                </div>
                <div className="box-card--body">
                    <h2 className="card--name">Que Tran</h2>
                    <p className="card--des">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button>Follow Me</button>
                </div>
            </div>
        </div>
    );
};

