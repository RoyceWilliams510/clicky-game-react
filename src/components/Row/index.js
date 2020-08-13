import React from "react";
import Card from "../Card";

function Rows(prop){
    return(
        <div className ="container">
            <div className = "row">
                <Card
                    imageUrl = {prop.characters[0].imageUrl} 
                    click = {prop.click}
                    name = {prop.characters[0].name} 
                />
                <Card
                    imageUrl = {prop.characters[1].imageUrl} 
                    click = {prop.click}
                    name = {prop.characters[1].name} 
                />
                <Card
                    imageUrl = {prop.characters[2].imageUrl} 
                    click = {prop.click}
                    name = {prop.characters[2].name} 
                />
                <Card
                    imageUrl = {prop.characters[3].imageUrl} 
                    click = {prop.click}
                    name = {prop.characters[3].name} 
                />

            </div>
            <br></br>
            <div className = "row">
            <Card
                imageUrl = {prop.characters[4].imageUrl} 
                click = {prop.click}
                name = {prop.characters[4].name} 
            />
            <Card
                imageUrl = {prop.characters[5].imageUrl} 
                click = {prop.click}
                name = {prop.characters[5].name} 
            />
            <Card
                imageUrl = {prop.characters[6].imageUrl} 
                click = {prop.click}
                name = {prop.characters[6].name} 
            />
            <Card
                imageUrl = {prop.characters[7].imageUrl} 
                click = {prop.click}
                name = {prop.characters[7].name} 
            />

            </div>
            <br></br>
            <div className = "row">
            <Card
                imageUrl = {prop.characters[8].imageUrl} 
                click = {prop.click}
                name = {prop.characters[8].name} 
            />
            <Card
                imageUrl = {prop.characters[9].imageUrl} 
                click = {prop.click}
                name = {prop.characters[9].name} 
            />
            <Card
                imageUrl = {prop.characters[10].imageUrl} 
                click = {prop.click}
                name = {prop.characters[10].name} 
            />
            <Card
                imageUrl = {prop.characters[11].imageUrl} 
                click = {prop.click}
                name = {prop.characters[11].name} 
            />

            </div>
        </div>

    );
}


export default Rows;
