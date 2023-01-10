import { FunctionComponent } from "react";

export interface HomeProps{

}

const Home:FunctionComponent<HomeProps> = (props)=>{
    return <h1>
        This is a heading
    </h1>
}

export default Home;