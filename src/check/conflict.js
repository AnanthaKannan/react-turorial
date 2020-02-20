const user_a = [{
    anchorKey: 'ab123',
    text:'ab123 my first text is erhe'
},
{
    anchorKey: 'zyd123',
    text:'zyd123 user_a here'
},
{
    anchorKey:'key22',
    text:'key22 user_a secound text'
}]

const user_b = [{
    anchorKey: 'ab123',
    text:'ab123 my first text is erhe'
},{
    anchorKey:'key22',
    text:'key22 some text'
},
{
    anchorKey:'key23',
    text:'key23 some text here'
}]

export const concatData = () =>{

const first_add = user_b.reduce((arr, obj) =>{
   let anchorKey = obj.anchorKey;
   let data_res = user_a.find((obj) => obj.anchorKey == anchorKey)|| {text:""}
   arr.push({
     anchorKey,
     text_b:obj.text,
     text_a:data_res.text
   });
   return arr
},[]);
// console.log(first_add);

let user_a_update = [];
user_a.forEach((obj) =>{
  const anchorKey = obj.anchorKey;
  if(!first_add.some((obj) => obj.anchorKey == anchorKey)){
    const user_a_indx = user_a.findIndex((obj) => obj.anchorKey == anchorKey);
    const data = user_a[user_a_indx];

      const befor_anchor = user_a[user_a_indx + 1].anchorKey;
      const user_b_index = first_add.findIndex((obj) => obj.anchorKey == befor_anchor);
      first_add.splice(user_b_index,0, {anchorKey:data.anchorKey, text_a:data.text, text_b:''})
    //   console.log(user_b_index, befor_anchor)

    console.log(data)
    // const data = user_a.find(obj => obj.anchorKey == "zyd123");
    // console.log(data)
  }
});
// console.log(first_add);
return first_add;
}