//render partials
//window
$('.window').html("<span id='text'><img width = '20' height = '20'"+
  "src='https://ih1.redbubble.net/image.428914186.0177/flat,800x800,075,f.u1.jpg'> &nbsp"+ 
  "C:Users\\Aj\\Desktop\\p\\index.html (p) - Sublime Text (UNREGISTERED)</span>");


//dropdown menu
$('.nav').html('<ul id ="nav">'+
        '<li><a>File</a><div class="dropdown-content" id="File">'+
            ' </div></li><li><a>Edit</a><div class="dropdown-content" id="Edit">'+
            ' </div></li>'+
        '<li><a>Selection</a><div class="dropdown-content" id="Selection">'+
            ' </div></li>'+
        '<li><a>Find</a><div class="dropdown-content" id="Find">'+
            ' </div></li>'+
        '<li><a>View</a><div class="dropdown-content" id="View">'+
            ' </div></li>'+
        '<li><a>Goto</a><div class="dropdown-content" id="Goto">'+
            ' </div></li>'+
        '<li><a>Tools</a><div class="dropdown-content" id="Tools">'+
            ' </div></li>'+
        '<li><a>Project</a><div class="dropdown-content" id="Project">'+
            ' </div></li>'+
        '<li><a>Preferences</a><div class="dropdown-content" id="Preferences">'+
            ' </div></li>'+
        '<li><a>Help</a><div class="dropdown-content" id="Help">'+
            ' </div></li>'+
      '</ul>');

//content
$('.content').html('<div class = "parent">'+
       '<div style="position: absolute;'+
          'left: 0px;'+
          'top: 0px;'+
          'color: #b7b7b7;'+
          'z-index: -1;">Folders'+
      
              '<div class="file-folder" style="z-index: -1;">p</div>'+  //file folder


              '</div>'+

      '<div class = "child">'+
           '<div class="tab"><div class="code-content"></div></div>'+
      '</div>'+
    '</div>');




$('#nav > li > a').on('click focus', function(){

  var period_val = $(this).text();

  $('#'+period_val).css( "display", "block" );

  $('#nav > li ').mouseover(function() {
    $(this).find(" > div").css( "display", "block" );
    }).mouseout(function() {
      $(this).find(" > div").css( "display", "none" );


  });

  $(this).on('dblclick ', function(){

    $('#'+period_val).css( "display", "none" );

    $('#nav > li ').mouseover(function() {
       $(this).find(" > div").css( "display", "none" );
    })


  })



  
});



let properties = {
		line : window.innerHeight || document.body.clientHeight,
		column : window.innerWidth || document.body.clientWidth,
		tabs : 4
}

let behaviors = {	

}

let arrayLength = [[],[]]


$('.child').resizable({
    handles: 'w',
    minWidth: 55,
    maxWidth: window.innerWidth - 55
});


//tab menu
for(let i in dropdown_){
    const key = [];
    const value = [];

    if (!dropdown_.hasOwnProperty(i)) {
        continue;
    }
    for(let o in dropdown_[i]){
        key.push('<div id="s"><span class="space"></span><span class="key">'+o+'</span>'+
          '<span class="value">'+dropdown_[i][o]+'<span></div>')
        value.push(dropdown_[i][o])
    }
     $('#'+i).html(key)
     //$('#'+i).css('padding-left','35px')
     
}


// $('.nav-tab').append('<br><span style="font-weight:bold;color:white;font-family:calibri;">FOLDERS</span>');


// $('.key').on('click', function () {
//     if($(this).text() == 'Exit')
          
// });