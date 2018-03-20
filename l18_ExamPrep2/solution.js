class Dialog{
    constructor(message,callback){
        this.message = message
        this.callback = callback
        this.inputs = []
        this.element = null

    }
    addInput(label,name,type){
        this.inputs.push({label,name,type})
    }

    render(){
        this.element = $('<div class="overlay">')
        let innerDiv = $('<div class="dialog">')
        innerDiv.append(`<p>${this.message}</p>`)
        for (let obj of this.inputs) {
            innerDiv.append(`<label>${obj.label}</label>`)
            innerDiv.append(`<input name="${obj.name}" type="${obj.type}">`)
        }
        innerDiv.append($('<button>OK</button>').on('click',this._ok.bind(this)))
        innerDiv.append($('<button>Cancel</button>').on('click',this._cancel.bind(this)))
        this.element.append(innerDiv)
        $('body').append(this.element)
    // <div class="overlay">
    //         <div class="dialog">
    //         <p>Dialog, containing message text and input field.</p>
    //     <label>Name</label>
    //     <input name="name" type="text">
    //         <button>OK</button>
    //         <button>Cancel</button>
    //         </div>
    //         </div>
    }
    _cancel(){
    $(this.element).remove()
    }
    _ok(){
        let obj = {}
        let arr = $(this.element).find('input').toArray()
        arr.forEach(i=>obj[$(i).attr('name')]=$(i).val())
        this.callback(obj)
        this._cancel()
    }

}