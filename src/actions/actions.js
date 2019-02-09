// actions are a payload of information that is sent from your application to your store
// they are the only source of information for the store
// yoyu send actions to the store using store.dispatch
// actions are plain javascript objects actions must have a type property that indicates the type of action being performed

//actions
export const Page_Load = "Page_Load";

export const Log_In = "Log_In";

// action creators are functions that return actions
export function onPageLoad(changes) {
  return { type: Page_Load, payload: changes };
}
export function login(changes) {
  return { type: Log_In, payload: changes };
}
