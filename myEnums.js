//Enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 13] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var mbSeat = SeatChoice.AISLE;
