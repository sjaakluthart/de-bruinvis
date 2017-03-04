import { LANGUAGE_SET } from '../actions';

const INITIAL_STATE = {
  data: 'nl'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LANGUAGE_SET: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: return state;
  }
}
