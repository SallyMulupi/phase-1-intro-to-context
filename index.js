// Your code here
function createEmployeeRecord(recordArray) {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };


}


const allWagesFor = () => {
    const eligibleDates = this.timeInEvents.map((f) => {
        return f.date
    })

    const payable = eligibleDates.reduce((memo, k) =>

        return memo + wagesEarnedOnDate.call(this, k)

        .bind(this), 0)
}

return payable




function createEmployeeRecords(recsArray) {
    return recsArray.map(rec => createEmployeeRecord(rec));

}

function createTimeInEvent(datestamp) {
    let [date, hour] = datestamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this

}

function createTimeOutEvent(datestamp) {
    let [date, hour] = datestamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this
}

function hoursWorkedOnDate(date) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date);
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === date);
    return ((outEvent.hour - inEvent.hour) / 100)

}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.apply(this, [date]) * this.payPerHour

}

function findEmployeeByFirstName(srcArray, targetName) {
    for (let i = 0; i < srcArray.length; i++) {
        if (srcArray[i].firstName === targetName) {
            return srcArray[i]
        }
    }
}

function calculatePayroll(recsArray) {
    let payroll = []
    recsArray.forEach(element => payroll.push(allWagesFor.call(element)))
    return payroll.reduce((a, b) => { return a + b })

}