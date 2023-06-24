import { AsideLeft } from "./Components/AsideLeft";
import { AsideRight } from "./Components/AsideRight";
import { Header } from "./Components/Header";
import { MainIndividual } from "./MainIndividual";


export function IndividualPost() { 
    return (
        <>
        <div className="home-container" > 
        <Header />

        <div className="homefeed-alignment"> 
        <AsideLeft />
        <MainIndividual />
        <AsideRight />

        </div>
  </div> 
        </>
    );
}