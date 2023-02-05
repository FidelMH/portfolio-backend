const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main()

function main(){
    mongoose.connect(process.env.DB_LINK)
    const  articleSchema = new Schema({
        title: { required :true ,type: String},
        description: { required :true ,type: String},
        overviews:[String] ,
        labels : [String]
        
        
    },
    // Methods
    {
        methods: {
            convertUrlToFull(cb){
                console.log(this.overviews)
                this.overviews = this.overviews.map((link) => {
                    return process.env.HOSTNAME+'/images/'+link
                })
            }
        }
    }
    )
    module.exports  = mongoose.model('Article',articleSchema);
    
}
