const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROPTOBEUSEDON = "UPDATE_PROPTOBEUSEDON";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS1 = "UPDATE_ADDRESS1";
const UPDATE_ADDRESS2 = "UPDATE_ADDRESS2";
const UPDATE_ADDRESS3 = "UPDATE_ADDRESS3";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";

const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loanType: action.payload });
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_PROPTOBEUSEDON:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });
    case UPDATE_FOUND:
      return Object.assign({}, state, { found: action.payload });
    case UPDATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload });
    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload });
    case UPDATE_DOWNPAYMENT:
      return Object.assign({}, state, { downPayment: action.payload });
    case UPDATE_CREDIT:
      return Object.assign({}, state, { credit: action.payload });
    case UPDATE_HISTORY:
      return Object.assign({}, state, { history: action.payload });
    case UPDATE_ADDRESS1:
      return Object.assign({}, state, { addressOne: action.payload });
    case UPDATE_ADDRESS2:
      return Object.assign({}, state, { addressTwo: action.payload });
    case UPDATE_ADDRESS3:
      return Object.assign({}, state, { addressThree: action.payload });
    case UPDATE_FIRST:
      return Object.assign({}, state, { firstName: action.payload });
    case UPDATE_LAST:
      return Object.assign({}, state, { lastName: action.payload });
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
}

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
}

export function updatePropertyType(propertyType) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: propertyType
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updatePropToBeUsedOn(propToBeUsedOn) {
  return {
    type: UPDATE_PROPTOBEUSEDON,
    payload: propToBeUsedOn
  };
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}

export function updateAgent(agent) {
  return {
    type: UPDATE_AGENT,
    payload: agent
  };
}

export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}

export function updateDownPayment(downPayment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: downPayment
  };
}

export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}

export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}

export function updateAddress1(address) {
  return {
    type: UPDATE_ADDRESS1,
    payload: address
  };
}
export function updateAddress2(address) {
  return {
    type: UPDATE_ADDRESS2,
    payload: address
  };
}
export function updateAddress3(address) {
  return {
    type: UPDATE_ADDRESS3,
    payload: address
  };
}

export function updateFirstName(name) {
  return {
    type: UPDATE_FIRST,
    payload: name
  };
}
export function updateLastName(name) {
  return {
    type: UPDATE_LAST,
    payload: name
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export default reducer;
