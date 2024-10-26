import Coffee from "../Components/coffee";
import Hero from "../Components/Hero";

const Home = () => {
    return (
        <div className="h-full bg-[#dad0e8] bg-opacity-85 pt-24">  
            <Hero />
            <Coffee  />
        </div>
    );
};

export default Home;
