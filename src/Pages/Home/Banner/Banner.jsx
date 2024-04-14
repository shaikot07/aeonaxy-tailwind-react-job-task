
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6 w-1/2">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                    <div className="w-1/2">
                        <p className="py-4 text-1xl font-semibold text-[#75a7e5]">CALENDLY FEATURES</p>
                        <h1 className="text-5xl font-bold">Take the hassle out of <span className="text-[#006CFE]">scheduling</span> </h1>
                        <p className="py-6"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;