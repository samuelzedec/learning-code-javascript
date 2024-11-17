import { defineStore } from "pinia";

export const useAlertsStore = defineStore("alerts", {
    state: () => ({
        activeAlertSuccess: false,
        activeAlertError: false,
        alertMessage: "",
    }),
    actions: {
        setAlert(information: string, message: string) {
            if (information === "success") {
                this.activeAlertSuccess = true;
                this.alertMessage = message;
                setTimeout(() => {
                    this.activeAlertSuccess = false;
                }, 3000);
            }
        
            if (information === "error") {
                this.activeAlertError = true;
                this.alertMessage = message;
                setTimeout(() => {
                    this.activeAlertError = false;
                }, 3000);
            }
        }
    }
});