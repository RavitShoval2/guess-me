'use strict';
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  createQuestsTree();
}

function onStartGuessing() {
  $('.game-start').hide();
  $('.game-start h2').hide();
  renderQuest();
}

function renderQuest() {
  showQstToggle();
  $('.quest h2').text(`${gCurrQuest.txt}`) ;
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  if (isChildless(getCurrQuest()) ||(gCurrQuest[res]===null)) {
    if (res === 'yes') {
      $('.quest').html(`${gCurrQuest.txt}, I knew it!`);
    } else {
      gLastRes = res;
      showQstToggle()
      var $elNewQuest = $('.new-quest');
      $elNewQuest.toggle('slow')
    }
  } else {
    gLastRes = res;
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  addGuess(newGuess, newQuest, gLastRes);
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  gLastRes = null;
  gCurrQuest = gQuestsTree;
}

function showQstToggle() {
  var $elquest = $('.quest');
  $elquest.toggle(300);
}

