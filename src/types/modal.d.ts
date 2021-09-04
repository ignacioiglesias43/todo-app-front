interface ModalState {
  visible: boolean;
  title: string;
  message: string;
  iconColor:
    | "inherit"
    | "disabled"
    | "action"
    | "primary"
    | "secondary"
    | "error";
}

type ModalAction = {
  type: string;
  payload: any;
};

type DispatchModalActionType = (args: ModalAction) => ModalAction;
