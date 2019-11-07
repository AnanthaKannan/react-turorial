function currection(id, word){
    console.log('id', id, 'word', word);
    let element = document.getElementById(id);
    element.classList.remove("txt_sel", "toolTip");
    element.innerHTML = word;

    var inputText = document.getElementById("text_content");
    var innerHTML = inputText.innerHTML;
    let find = `<span class="" id="${id}">${word}</span>`
    innerHTML.replace(find, word);
    // inputText.innerHTML = innerHTML;

    console.log('element.innerHTML', innerHTML, find);
}