class PaymentManager{
    constructor(title){
        this.title = title
        this.element = null
        this.tableBody = null
    }

    render(id){
        let target = $(`#${id}`)
    let table = $('<table>')
        let caption = $(`<caption>${this.title} Payment Manager</caption>`)
        let thead = $('<thead><tr><th class="name">Name</th><th class="category">Category</th><th class="price">Price</th><th>Actions</th></tr></thead>')
        this.tableBody = $('<tbody class="payments"></tbody>')
        this.element = $('<tfoot class="input-data"><tr><td><input name="name" type="text"></td><td><input name="category" type="text">' +
            '</td><td><input name="price" type="number"></td></tr></tfoot>')
        //let addBtn = $('<button>Add</button>').on('click',this._addStock.bind(this))
        $(this.element).find('tr').append($('<td>').append($('<button>Add</button>').on('click', this._addStock.bind(this))))
        $(table).append(caption).append(thead).append(this.tableBody).append(this.element)
        target.append(table)



    }
    _addStock() {
        let name = $(this.element).find('input[name="name"]').val()
        let category = $(this.element).find('input[name="category"]').val()
        let price = Number($(this.element).find('input[name="price"]').val())
        if(name && category && price) {
            let tbodyRow = $(`<tr><td>${name}</td><td>${category}</td><td>${price}</td></tr>`)
            $(tbodyRow).append($('<td>').append($('<button>Delete</button>').on('click', function () {
                $(this).closest('tr').remove();
            })))
            this.tableBody.append(tbodyRow)
            $(this.element).find('input[name="name"]').val('')
            $(this.element).find('input[name="category"]').val('')
            $(this.element).find('input[name="price"]').val('')
        }
}

}