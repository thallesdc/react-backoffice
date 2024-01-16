

function pad(str, length){

}

function formatPhoneNumber(areaCode, number){
    if(number == undefined) { return ""; }
    let numberStr = number.toString()
    return "("+areaCode+") " + numberStr.substring(0,1) + " " + numberStr.substring(1,5) + "-" + numberStr.substring(5)
}

function formatDate(date){
    if(date == undefined) { return ""; }
    let dateStr = date.toString()
    return dateStr.substring(8,10) + "/" + dateStr.substring(5,7) + "/" + dateStr.substring(0,4)
}

function formatPrice(price){
    if(price == undefined) { return ""; }
    return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

export { pad, formatDate, formatPhoneNumber, formatPrice }