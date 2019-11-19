async function spellCheck(_this, text){
    let { allSuggesion } = _this.state;
    // text = "some Ths is added same fo"
    console.log("text", text);
    let response = await fetch('http://localhost:4000/spellCheck', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token")
        },
        body: JSON.stringify({content: text})
      });
      
      response = await response.json();
    let saveAllSug = response.concat(allSuggesion);
    _this.state.allSuggesion = saveAllSug 
    console.log('response', saveAllSug);
    _this.onSearch();
    // return response;
}

async function passiveVoice(_this, text){
  // const text = "The ball is hit by Anna.A letter is written by me";
  var n = text.match(/\s(is|are|was|were|be|been|being)\s([a-z]{2,30})\b(\sby\b)?/gi );
  if(!n) return;
  const response = n.map(s => {
      return {
          actual:s,
          pgm:"passive",
      }
  });
  console.log(response);
  let { allSuggesion } = _this.state;
  let saveAllSug = response.concat(allSuggesion);
  _this.state.allSuggesion = saveAllSug 

    // let response = [ {actual: "is hit", pgm: 'passive', expected:[]},
    //  {  actual: "is filled", pgm: 'passive', expected:[]} ];
    //  let { allSuggesion } = _this.state;
    //  let saveAllSug = response.concat(allSuggesion);
    //  _this.state.allSuggesion = saveAllSug 
}



export {
    spellCheck,
    passiveVoice
}