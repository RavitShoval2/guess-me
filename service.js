const STORAGE_KEY = 'questionsDB';
var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage(STORAGE_KEY);
    if (!gQuestsTree) {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi?');
    gQuestsTree.no = createQuest('Rita?');
}
gCurrQuest = gQuestsTree;
gPrevQuest = null;
}
function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
gPrevQuest = getCurrQuest();
gCurrQuest = gCurrQuest[res];
renderQuest();
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var wrongGuesTxt = gCurrQuest.txt;
    gCurrQuest.txt = newQuestTxt;
    gCurrQuest['yes'] = createQuest(newGuessTxt);
    gCurrQuest['no'] = createQuest(wrongGuesTxt);
    saveToStorage(STORAGE_KEY, gQuestsTree);
}


function getCurrQuest(){
    return gCurrQuest
}

