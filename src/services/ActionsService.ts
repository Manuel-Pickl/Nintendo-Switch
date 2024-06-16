import { useReactiveVar } from "@apollo/client";
import { selectedIdVar } from "../types/globalVariables";
import { Id } from "../types/Id";
import { ActionData } from "../types/ActionData";
import { useLocation, useNavigate } from "react-router-dom";
// import leftClickImage from "../../assets/icons/leftclick.png"
// import rightClickImage from "../../assets/icons/rightclick.png"
// import touchImage from "../../assets/icons/touch.png"
// import holdImage from "../../assets/icons/hold.png"
import aImage from "../assets/images/icons/a.png"
import bImage from "../assets/images/icons/b.png"
import plusMinusImage from "../assets/images/icons/+-.png"

export const useActionsService = () => {
    const selectedId = useReactiveVar(selectedIdVar);
    const navigate = useNavigate();
    
    const games: Id[] = [
        Id.zeldaBreathOfTheWild,
        Id.marioKart8Deluxe,
        Id.animalCrossingNewHorizons,
        Id.humanFallFlat,
        Id.superSmashBrothersUltimate,
        Id.gangBeasts,
        Id.darkSouls,
        Id.donkeyKongCountryTropicalFreeze,
        Id.marioPartySuperstars,
        Id.minecraft,
        Id.pikmin3,
        Id.pokemonLetsGoPikachu,
    ];
    const users: Id[] = [
        Id.user1,
        Id.user2,
    ];
    const systemApps: Id[] = [
        Id.news,
        Id.eShop,
        Id.album,
        Id.controller,
        Id.settings,
        Id.standby,
        Id.allAppsButton,
    ];

    const actions = (): ActionData[] => {
        const location = useLocation();

        let actions: ActionData[] = [];

        switch (location.pathname) {
            case "/home":
                actions = getHomeActions();
                break;
        
            case "/allGames":
                actions = getAllGamesActions();
                break;

            default:
                break;
        }
        
        return actions;
    }
    
    function getHomeActions(): ActionData[] {
        const isGameSelected: boolean = games.includes(selectedId);
        const isUserSelected: boolean = users.includes(selectedId)
        const isSystemAppSelected: boolean = systemApps.includes(selectedId)

        const actions: ActionData[] = [];

        if (isGameSelected) {
            actions.push(new ActionData("Options", plusMinusImage));
            actions.push(new ActionData("Start", aImage));
        }
        else if (isUserSelected || isSystemAppSelected) {
            actions.push(new ActionData("Ok", aImage));
        }

        return actions;
    }

    function getAllGamesActions(): ActionData[] {
        const isGameSelected: boolean = games.includes(selectedId);
        // const redownloadButtonSelected: boolean = selectedIdValue == Id.;

        const actions: ActionData[] = [];

        if (isGameSelected) {
            actions.push(new ActionData("Options", plusMinusImage));
            actions.push(new ActionData("Zurück", bImage, () => navigate("/home")));
            actions.push(new ActionData("Start", aImage));
        }
        // else if (redownloadButtonSelected) {
        //     actions.push(new ActionData("Zurück", bImage));
        //     actions.push(new ActionData("Ok", aImage));
        // }
        else {
            actions.push(new ActionData("Zurück", bImage, () => navigate("/home")));
        }

        return actions;
    }

    return { actions };
};
