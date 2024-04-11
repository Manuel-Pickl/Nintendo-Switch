import { useReactiveVar } from "@apollo/client";
import { selectedId } from "../types/globalVariables";
import { Id } from "../types/Id";
import { ActionData } from "../types/ActionData";

export const useActionsService = () => {
    const selectedIdValue = useReactiveVar(selectedId);
    
    const games: Id[] = [
        Id.zeldaBreathOfTheWild,
        Id.marioKart8Deluxe,
        Id.animalCrossingNewHorizons,
        Id.humanFallFlat,
        Id.superSmashBrothersUltimate,
        Id.gangBeasts,
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
        Id.allApps,
    ];

    const actions = (): ActionData[] => {
        const isGameSelected: boolean = games.includes(selectedIdValue);
        const isUserSelected: boolean = users.includes(selectedIdValue)
        const isSystemAppSelected: boolean = systemApps.includes(selectedIdValue)

        const actions: ActionData[] = [];
        if (isGameSelected) {
            actions.push(new ActionData("Optionen", false));
            actions.push(new ActionData("Starten", true));
        }
        else if (isUserSelected || isSystemAppSelected) {
            actions.push(new ActionData("Ok", true));
        }
        
        return actions;
    }

    return { actions };
};
