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
    // return response;
}

export {
    spellCheck
}