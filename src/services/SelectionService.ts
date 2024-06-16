import { useReactiveVar } from "@apollo/client";
import { selectedIdVar } from "../types/globalVariables";
import { Id } from "../types/Id";

export const useSelectionService = () => {
    const selectedId = useReactiveVar(selectedIdVar);
    
    const isSelected = (id: Id): boolean => {
        const isSelected: boolean = selectedId == id;
        return isSelected;
    };

    const select = (id: Id) => {
        selectedIdVar(id);
    };

    return { isSelected, select };
};
