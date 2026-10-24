// import { BookableService, CustomerInfoData, PaymentType } from "@/Data/types";
// import { toISO } from "@/Data/utils";
// import axios from "axios";
// import { useCallback, useMemo, useReducer } from "react";

// type Status = "idle" | "sending" | "done";

// type State = {
//     location: string;
//     selected: string[];
//     date: Date | null;
//     time: string;
//     info: CustomerInfoData;
//     payment: PaymentType;
//     status: Status;
//     error: string;
// };

// type Action =

// | { type: "SET_LOCATION"; value: string}
// | { type: "TOGGLE_SERVICE"; id: string }
// | { type: "SET_DATE"; value: Date }
// | { type: "SET_TIME"; value: string }
// | { type: "SET_FIELD"; field: keyof CustomerInfoData; value: string }
// | { type: "SET_PAYMENT"; value: PaymentType }
// | { type: "SUBMIT_START" }
// | { type: "SUBMIT_SUCCESS" }
// | { type: "FAIL"; message: string };

// const reducer = (state: State, action: Action): State => {
//     switch(action.type){
//         case "SET_LOCATION":
//             return{... state, location:action.value}
//         case "TOGGLE_SERVICE":
//             return{...state, selected:state.selected.includes(action.id)
//                 ? state.selected.filter((x) => x !== action.id) :
//                 [...state.selected, action.id]
//             }
//         case "SET_DATE":
//             return{...state, date:action.value}
//         case "SET_TIME":
//             return{...state, time:action.value}
//         case "SET_FIELD":
//             return{
//                 ...state,
//                 info: {...state.info, [action.field]: action.value},
//             }
//         case "SET_PAYMENT":
//             return{...state, payment:action.value};
//         case "SUBMIT_START":
//             return{...state, status:"sending", error:""};
//         case "SUBMIT_SUCCESS":
//             return{...state, status:"done"};
//         case "FAIL":
//             return{...state, status:"idle", error:action.message}
//         default:
//             return state;    
//     }
// };


// const validation = (s:State): string => {
//     if(!s.location)  return "Please choose location";
//     if(!s.date || !s.time) return "Please pick a date and time.";
//     if(!s.selected.length) return "Please select at least one service.";
//     if(!s.info.name.trim() || !s.info.phone.trim())
//         return "Please enter your name and phone number.";
//     return "";
// }


// // hook

// export const useBookingForm = (
//     service: BookableService[],
//     preselectedId?: string
// ) => {
//      const [state, dispatch] = useReducer(reducer, undefined, (): State => ({
//     location: "",
//     selected:
//       preselectedId && service.some((s) => s.id === preselectedId)
//         ? [preselectedId]
//         : [],
//     date: null,
//     time: "",
//     info: { name: "", phone: "", email: "", notes: ""},
//     payment: "salon",
//     status: "idle",
//     error: "",
//   }));

//   const actions = useMemo(() =>({
//     setLocation: (value: string) => dispatch({type: "SET_LOCATION", value}),
//     toggleService: (id: string) => dispatch({type:"TOGGLE_SERVICE", id}),
//     setDate: (value: Date) =>dispatch({type:"SET_DATE", value}),
//     setTime: (value: string) => dispatch({type:"SET_TIME", value}),
//     setField: (field: keyof CustomerInfoData, value: string) => 
//         dispatch({type: "SET_FIELD", field, value}),
//     setPayment: (value: PaymentType) => dispatch({type:"SET_PAYMENT", value}),
//   }),
//   []
// );

// const chosen = useMemo(
//     () => service.filter((s) => state.selected.includes(s.id)),
//     [service, state.selected]
// );

// const total = useMemo(
//     () => chosen.reduce((sum, s) => sum + s.amount, 0),
//     [chosen]
// );


// const submit = useCallback(async () => {
//   const message = validation(state);
//   if (message) return dispatch({ type: "FAIL", message });

//   dispatch({ type: "SUBMIT_START" });

//   try {
//     const res = await axios.post("/api/bookings", {
//       location: state.location,
//       services: chosen.map(({ id, name, price, amount }) => ({
//         id,
//         name,
//         price,
//         amount,
//       })),
//       date: toISO(state.date!),
//       time: state.time,
//       customer: state.info,
//       payment: state.payment,
//       total,
//     });

//     dispatch({ type: "SUBMIT_SUCCESS" });
//   } catch {
//     dispatch({
//       type: "FAIL",
//       message: "Something went wrong. Please try again.",
//     });
//   }
// }, [state, chosen, total]);

//   return { state, actions, chosen, total, submit };
// };


import { BookableService, CustomerInfoData, PaymentType } from "@/Data/types";
import { toISO } from "@/Data/utils";
import { useCallback, useMemo, useReducer } from "react";

/* ---------------- state ---------------- */

type Status = "idle" | "sending" | "done";

type State = {
  location: string;
  selected: string[];
  date: Date | null;
  time: string;
  info: CustomerInfoData;
  payment: PaymentType;
  status: Status;
  error: string;
};

type Action =
  | { type: "SET_LOCATION"; value: string }
  | { type: "TOGGLE_SERVICE"; id: string }
  | { type: "SET_DATE"; value: Date }
  | { type: "SET_TIME"; value: string }
  | { type: "SET_FIELD"; field: keyof CustomerInfoData; value: string }
  | { type: "SET_PAYMENT"; value: PaymentType }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "RESET" }
  | { type: "FAIL"; message: string };

const emptyState: State = {
  location: "",
  selected: [],
  date: null,
  time: "",
  info: { name: "", phone: "", email: "", notes: "" },
  payment: "salon",
  status: "idle",
  error: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.value };
    case "TOGGLE_SERVICE":
      return {
        ...state,
        selected: state.selected.includes(action.id)
          ? state.selected.filter((x) => x !== action.id)
          : [...state.selected, action.id],
      };
    case "SET_DATE":
      return { ...state, date: action.value };
    case "SET_TIME":
      return { ...state, time: action.value };
    case "SET_FIELD":
      return {
        ...state,
        info: { ...state.info, [action.field]: action.value },
      };
    case "SET_PAYMENT":
      return { ...state, payment: action.value };
    case "SUBMIT_START":
      return { ...state, status: "sending", error: "" };
    case "SUBMIT_SUCCESS":
      return { ...state, status: "done" };
    case "RESET":
      return emptyState;
    case "FAIL":
      return { ...state, status: "idle", error: action.message };
    default:
      return state;
  }
};

const validate = (s: State): string => {
  if (!s.location) return "Please choose a location.";
  if (!s.selected.length) return "Please select at least one service.";
  if (!s.date || !s.time) return "Please pick a date and time.";
  if (!s.info.name.trim() || !s.info.phone.trim() || !s.info.email.trim())
    return "Please enter your name , phone number and email .";
  return "";
};

/* ---------------- hook ---------------- */

export const useBookingForm = (
  services: BookableService[],
  preselectedId?: string
) => {
  const [state, dispatch] = useReducer(reducer, undefined, (): State => ({
    ...emptyState,
    selected:
      preselectedId && services.some((s) => s.id === preselectedId)
        ? [preselectedId]
        : [],
  }));

  // dispatch ki identity stable hoti hai, isliye ye actions kabhi change nahi
  // hote -> React.memo wale components typing pe re-render nahi hote
  const actions = useMemo(
    () => ({
      setLocation: (value: string) => dispatch({ type: "SET_LOCATION", value }),
      toggleService: (id: string) => dispatch({ type: "TOGGLE_SERVICE", id }),
      setDate: (value: Date) => dispatch({ type: "SET_DATE", value }),
      setTime: (value: string) => dispatch({ type: "SET_TIME", value }),
      setField: (field: keyof CustomerInfoData, value: string) =>
        dispatch({ type: "SET_FIELD", field, value }),
      setPayment: (value: PaymentType) =>
        dispatch({ type: "SET_PAYMENT", value }),
      reset: () => dispatch({ type: "RESET" }),
    }),
    []
  );

  const chosen = useMemo(
    () => services.filter((s) => state.selected.includes(s.id)),
    [services, state.selected]
  );
  const total = useMemo(
    () => chosen.reduce((sum, s) => sum + s.amount, 0),
    [chosen]
  );

  const submit = useCallback(async () => {
    const message = validate(state);
    if (message) return dispatch({ type: "FAIL", message });

    dispatch({ type: "SUBMIT_START" });
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: state.location,
          services: chosen.map(({ id, name, price, amount }) => ({
            id,
            name,
            price,
            amount,
          })),
          date: toISO(state.date!),
          time: state.time,
          customer: state.info,
          payment: state.payment,
          total,
        }),
      });
      if (!res.ok) throw new Error();
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch {
      dispatch({
        type: "FAIL",
        message: "Something went wrong. Please try again.",
      });
    }
  }, [state, chosen, total]);

  return { state, actions, chosen, total, submit };
};