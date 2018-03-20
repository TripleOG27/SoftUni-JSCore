function move(command) {
    let aTownsList = $("#available-towns")
    let sSelectedTowns = $("#selected-towns")
    let output = $("#output")
    if(command==='right'){
        sSelectedTowns.append(aTownsList.find(':selected'))
    }else if(command==='left'){
        aTownsList.append(sSelectedTowns.find(':selected'))
    }else {
        output.empty()
        let result = sSelectedTowns.find('option').toArray().map(el => el.textContent).join('; ')
        output.append(result)
    }
}
//move('right')