const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    debugger
    var node = document.createElement("p");
    var textnode = document.createTextNode(string);
    node.appendChild(textnode);
    htmlElement.appendChild(node);
};

htmlGenerator('Party Time.', partyHeader);