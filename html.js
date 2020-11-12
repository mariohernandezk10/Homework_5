function html() {
    for (var i = 0; i < time.length; i++) {
  
      // var a = $('<div>').addClass('row');
      var a = document.createElement("div");
      a.setAttribute("class", "row");
  
      // div time
      // var b = $('<div>').addClass('col-2').attr('id', `time${time[i]}`);
      var b = document.createElement("div");
      b.setAttribute("id", `time${time[i]}`);
      b.setAttribute("class", "col-2");
  
      //div schedule value
      // var c = $('<div>').addClass('col-8').attr('id', `col${time[i]}`);
      var c = document.createElement("div");
      c.setAttribute("id", `col${time[i]}`);
      c.setAttribute("class", "col-8");
  
      //div button
      // var e = $('<button>').addClass(`col-2 saveBtn${time[i]}`).text('Delete');
      var d = document.createElement("div");
      d.setAttribute("class", "col-2");
      var e = document.createElement("button");
      e.setAttribute("class", `saveBtn${time[i]}`);
      var icon = document.createElement("i");
      icon.setAttribute("class", "fas fa-save fa-lg w-auto")
      e.append(icon);
  
      d.append(e);
      a.append(b);
      a.append(c);
      a.append(e);
      container.append(a);
    }
    calendar();
    getFromLocalStorage();
    setToLocalStorage();
  }
  html();