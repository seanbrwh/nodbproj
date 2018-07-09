const messages = [];
let id = 0;
module.exports = {
    create : (req,res) =>{
        const {text} = req.body;
        messages.push({id,text});
        id++;
        res.status(200).send(messages)
    },
    read: (req,res) =>{
        res.status(200).send(messages)
    },
    update:(req,res) =>{
        const {text} = req.body;
        const {id} = req.params;
        let new_arr = messages.map((e) => {
            if(e.id === parseInt(id)){
                e.id = id
                e.text = text
                    
            }
        })
        messages.push(new_arr)
        res.status(200).send(messages)
        
        
    },
    delete:(req,res) =>{
        let {id} = req.params;
        messages.forEach((e,i) => {
            if(e.id === Number(id)){
                messages.splice(i,1)
            }
        })
        
        res.status(200).send(messages)
    }
}