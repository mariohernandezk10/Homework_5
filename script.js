// const today = moment().format('dddd MMMM Do YYYY');
// $(".today").text(today);
// currentDay display
var currentDay = document.querySelector("#currentDay");
var m = moment();
var today = m.format("dddd, MMMM Do YYYY");
currentDay.append(today);
// in line 6 i need to add h:mm:ss a using the set interval

// var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var container = document.querySelector(".container");


//calendar function
function calendar() {
  for (let c = 0; c < time.length; c++) {
    let timeX = document.querySelector(`#time${time[c]}`);
    let period = function () {
      if (time[c] >= 12) {
        return "[PM]";
      } else {
        return "[AM]";
      }
    };
    let timeat = m.format(`${time[c]} ${period()}`).toString();
    console.log(timeat);
    timeX.append(timeat);

    var col = document.querySelector(`#col${time[c]}`);
    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("class", `input${time[c]}`);
    if (m.format("H") < time[c]) {
      x.setAttribute("placeholder", "Coming time");
      x.style.backgroundColor = "green";
      col.append(x);
    } else if ([1, 2, 3, 4, 5].includes(time[c]) && m.format("H") > time[c]) {
      x.setAttribute("placeholder", "Coming time");
      x.style.backgroundColor = "green";
      col.append(x);
    } else if (timeat === m.format("H [PM]").toString()) {
      x.setAttribute("placeholder", "Current time");
      x.style.backgroundColor = "red";
      col.append(x);
    } else  {
      x.setAttribute("placeholder", "Passed time");
      x.style.backgroundColor = "silver";
      col.append(x);
    }
  }
}


//get from store
function getFromLocalStorage() {
  for (let t = 0; t < time.length; t++) {
    let period = function () {
      if (time[t] < 5 || time[t] == 12) {
        return "pm";
      } else {
        return "am";
      }
    };
    let savedEvent = localStorage.getItem(`${time[t]}:00${period()}`);
    $(`.input${time[t]}`).attr("value", savedEvent);
  }
}

//set to the store
function setToLocalStorage() {
  for (let t = 0; t < time.length; t++) {
    let period = function () {
      if (time[t] < 5 || time[t] == 12) {
        return "pm";
      } else {
        return "am";
      }
    };
    $(`.saveBtn${time[t]}`).click(function () {
      let event = $(`.input${time[t]}`).val();
      localStorage.setItem(`${time[t]}:00${period()}`, event);
    });
  }
}
// can I use foreach? or can I use break and continue.