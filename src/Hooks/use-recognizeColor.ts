import theme from "../Theme/Theme";

const useColorRecognize = (offerType: string) => {
    let color: string;
    if (offerType === "offer") {
        color = theme.palette.activeJob.main;
    }
    if (offerType === "canceled") {
        color = theme.palette.rejectedJob.main;
    }
    if (offerType === "opened") {
        color = theme.palette.pendingJob.main;
    }
    if (offerType === "sended") {
        color = theme.palette.sentJob.main;
    }
    return color
}
export default useColorRecognize;