export const ink = () =>({type:'INK' });//функия action creator(созадёт действие)
export const dec = () =>({type: 'DEC'});
export const rnd = () =>{
    return {
        type:'RND', 
        value: Math.floor(Math.random() * 10)
    }
};