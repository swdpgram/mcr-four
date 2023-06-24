import { Header } from "./Components/Header";
import { AsideLeft } from "./Components/AsideLeft";
import { MainHome } from "./MainHome";
import { AsideRight } from "./Components/AsideRight";

export function Home() { 
    return(
        <>
        <div className="home-container" > 
        <Header />

        <div className="homefeed-alignment"> 
        <AsideLeft />
        <MainHome />  
        <AsideRight />

        </div>
  </div> 
        
        </>
    );
}