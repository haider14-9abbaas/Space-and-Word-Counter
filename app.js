function countSpacesAndWords() {
    var inputText = document.getElementById("inputBox").value;
    var spaceCount = 0;
    var wordCount = 0;
    var lastCharWasSpace = true; 
    
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
            spaceCount++;
            lastCharWasSpace = true;
        } else {
            if (lastCharWasSpace) {
                wordCount++;
                lastCharWasSpace = false;
            }
        }
    }

    document.getElementById("spaceCount").textContent = spaceCount;
    
    document.getElementById("wordCount").textContent = wordCount;
}