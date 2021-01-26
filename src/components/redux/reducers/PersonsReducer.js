export default function personReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_PERSON_LIST":
      return [...state, { ...action.personList }];
    default:
      return state;
  }
}
