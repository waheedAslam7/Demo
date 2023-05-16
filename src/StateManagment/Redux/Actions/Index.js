export const user_Profile = "user_Profile";
export const user_Session = "user_Session";
export const isloader = "isloader";
export const isConfirm = "isConfirm";
export const isrepairOrder = "isrepairOrder";
export const user_forms = "user_forms";








export const User = payload => ({
  type: user_Profile,
  payload: payload
});

export const session = payload => ({
  type: user_Session,
  payload: payload
});

export const loader = payload => ({
  type: isloader,
  payload: payload
});
export const onConfirmedAction = payload => ({
  type: isConfirm,
  payload: payload
});
export const RepairOrder = payload => ({
  type: isrepairOrder,
  payload: payload
});
export const emp_form_data = payload => ({
  type: user_forms,
  payload: payload
});