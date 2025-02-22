import React from "react";

function Hero() {
    return (
        <section className="container-fluid mb-5" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="" style={{textDecoration:"none"}}>Track Tickets</a>
            </div>
            <div className="row p-5 mx-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="eg. how do i activate F&O, why is my order getting rejected..." style={{borderRadius:""}}/>
                    <a href="" className="ml-5">Track account</a>
                    <a href="">opening Track</a>
                    <a href="">segment activation</a>
                    <a href="">Intraday margins Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol type="number">
                        <li><a href="">Rights Entitlements listing in February 2025</a></li>
                        <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
                
            </div>
        </section>
    )
};
export default Hero
