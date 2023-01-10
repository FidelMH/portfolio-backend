const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main()

function main(){
    mongoose.connect(process.env.DB_LINK)
    const  articleSchema = new Schema({
        title: { required :true ,type: String},
        description: { required :true ,type: String},
        overviews:[String] 
    
    }
    )
    // musicSchema
    // articleSchema.methods.show= function show(){
    //     console.log('Titre     : ',this.title)
    //     console.log('Artist    : ',this.artist)
    //     console.log('Serie     : ',this.serie)
    //     console.log('Voix      : ',this.voice?'oui':'non')
    //     console.log('Langue    : ',this.lang)
    //     console.log('Catégorie : ',this.cat)
    // }
    // articleSchema.query.byName = function(name){
    //     return this.or([{title: {$regex:name,$options:'i'}},{artist: {$regex:name,$options:'i'}},{serie: {$regex:name,$options:'i'}}])
    // }
    // const Music = mongoose.model('Music',musicSchema);
    // const maria = new Music({title: 'Bakamitai',artist:'Kiryuu', serie:'Yakuza 0' , voice:true ,lang:'japonais',cat:'game'})
    // Music.find().byName('ku').exec((err,musics) =>{
    //     if(err) return console.log(err);
    //     musics.forEach(music => {
            
    //         console.log(music.show())
    //     });
    // })
    module.exports = mongoose.model('Article',articleSchema);
    
    // console.log(sambo.show())
    // await maria.save()
}
