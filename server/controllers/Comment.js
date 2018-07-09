let messages = [];
let id = 0;
module.exports = {
    create : (req,res) =>{
        const {text} = req.body;
        JSON.stringify(text)
        messages.push({text,id});
        id++;
        res.status(200).send(messages)
    },
    read: (req,res) =>{
        res.status(200).send(messages)
    },
    update:(req,res) =>{
        console.log(req.body);
        const {text} = req.body;
        const {id} = req.params;
        messages = messages.map((e) => {
            if(e.id === parseInt(id)){
                e = {
                    text:text || e.text,
                    id:parseInt(id) 
                    
                }
                    
            }
            return e
        })
        console.log(messages);
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