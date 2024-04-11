import { useReactiveVar } from "@apollo/client";
import { selectedId } from "../types/globalVariables";
import { Id } from "../types/Id";

export const useSelectionService = () => {
    const selectedIdValue = useReactiveVar(selectedId);
    
    const isSelected = (id: Id): boolean => {
        const isSelected: boolean = selectedIdValue == id;
        return isSelected;
    };

    const select = (id: Id) => {
        selectedId(id);
    };

    return { isSelected, select };
};
