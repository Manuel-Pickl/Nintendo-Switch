import { makeVar } from '@apollo/client';
import { Id } from './Id';

export const selectedId = makeVar<Id>(Id.none);
