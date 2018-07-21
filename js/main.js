
//First of all, I want to have my js optimized. So seperation-of-concern was not applied here...
// Cheers!



//render partials
//window
jQuery('.window').html("<span id='text'><img width = '20' height = '20'"+
"src='https://ih1.redbubble.net/image.428914186.0177/flat,800x800,075,f.u1.jpg'> &nbsp"+ 
"C:Users\\Aj\\Desktop\\costelo01.github.io\\index.html (costelo01.github.io) - Sublime Text (UNREGISTERED)</span>");


//dropdown menu
jQuery('.nav').html('<ul id ="nav">'+
'<li><a>File</a><div class="dropdown-content" id="File">'+
'</div></li><li><a>Edit</a><div class="dropdown-content" id="Edit">'+
'</div></li>'+
'<li><a>Selection</a><div class="dropdown-content" id="Selection">'+
'</div></li>'+
'<li><a>Find</a><div class="dropdown-content" id="Find">'+
'</div></li>'+
'<li><a>View</a><div class="dropdown-content" id="View">'+
'</div></li>'+
'<li><a>Goto</a><div class="dropdown-content" id="Goto">'+
'</div></li>'+
'<li><a>Tools</a><div class="dropdown-content" id="Tools">'+
'</div></li>'+
'<li><a>Project</a><div class="dropdown-content" id="Project">'+
'</div></li>'+
'<li><a>Preferences</a><div class="dropdown-content" id="Preferences">'+
'</div></li>'+
'<li><a>Help</a><div class="dropdown-content" id="Help">'+
'</div></li>'+
'</ul>');

//content
jQuery('.content').html('<div class = "parent">'+
'<div style="position: absolute;'+
'left: 0px;'+
'top: 10px;'+
'color: #b7b7b7;'+
'z-index: -1;"><span class="myfol" style="font-weight: bolder; padding: 15px;'+ 
    'font-family: Trebuchet MS; text-transform: uppercase; font-size: 15px; cursor: context-menu;">Folders</span>'+
'<div class="file-folder" style="z-index: -1;"></div>'+  //file folder
'</div>'+
'<div class = "child">'+
'<div class="tab"><div class="code-content"></div></div>'+
'</div>'+
'</div>');





jQuery('#nav > li > a').on('click focus', function(){
    var period_val = jQuery(this).text();
    jQuery('#'+period_val).css( "display", "block" );

    jQuery('#nav > li ').mouseover(function() {

      jQuery(this).find(" > div").css( "display", "block" );

      }).mouseout(function() {
        jQuery(this).find(" > div").css( "display", "none" );

    });

    jQuery(this).on('dblclick ', function(){
      jQuery('#'+period_val).css( "display", "none" );
      jQuery('#nav > li ').mouseover(function() {
         jQuery(this).find(" > div").css( "display", "none" );
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

//resizable child just like in the Sublime!
jQuery('.child').resizable({
    handles: 'w',
    minWidth: 55,
    maxWidth: window.innerWidth - 65
});

const dropdown_={File:{"New File":"Ctrl+N","Open File...":"Ctrl+O","Open Folder...":"","Open Recent":[],"Reopen with Encoding":[],"New View into File":"",Save:"","Save with Encoding":"","Save As...":"Ctrl+Shift+S","Save All":"","<span class='line'><hr></span>":"","New Window":"Ctrl+Shift+N","Close Window":"Ctrl+Shift+W","<span class='line1'><hr></span>":"","Close File":"Ctrl+W","Revert File":"","Close All Files":"","<span class='line2'><hr></span>":"",Exit:""},Edit:{"Undo Insert Characters":"Ctrl+Z",
"Repeat Insert Character":"Ctrl+Y","Undo Selection":[],"<span class='line'><hr></span>":"",Copy:"",Cut:"",Paste:"","Paste and Indent":"","Paste from History":"","<span class='line1'><hr></span>":"",Line:"",Comment:"",Text:"",Tag:"","Code Folding":"","Convert Case":"",Wrap:"","Show Completions":"Ctrl+Space","<span class='line2'><hr></span>":"","Sort Lines":"","Sort Lines (Case Sensitive)":"","Permute Lines":"","Permute Selections":""},Selection:{"Split into Lines":"Ctrl+Shift+L","Add Previous Line":"Ctrl+Alt+Up",
"Add Next Line":"Ctrl+Alt+Down","Single Selection":"Escape","Invert Selection":"","<span class='line'><hr></span>":"","Select All":"Ctrl+A","Expand Selection to Line":"Ctrl+L","Expand Selection to Word":"Ctrl+D","Expand Selection to Paragraph":"","Expand Selection to Scope":"Ctrl+Shift+Space","Expand Selection to Brackets":"Ctrl+Shift+M","Expand Selection to Indentation":"Ctrl+Shift+J","Expand Selection to Tag":"Ctrl+Shift+A"},Find:{"Find...":"Ctrl+F","Find Next":"F3","Find Previous":"Shift+F3","Incremental Find":"Ctrl+I",
"<span class='line'><hr></span>":"","Replace...":"Ctrl+H","Replace Next":"Ctrl+Shift+N","<span class='line1'><hr></span>":"","Quick Find":"Ctrl+F3","Quick Find All":"Alt+F3","Quick Add Next":"Ctrl+D","Quick Skip Next":"Ctrl+K,Ctrl+D","<span class='line2'><hr></span>":"","Use Selection for Find":"Ctrl+E","Use Selection for Replace":"Ctrl+Shift+E","<span class='line3'><hr></span>":"","Find in Files...":"Ctrl+Shift+F","Find Results":[]},View:{"Side Bar":"","Hide Minimap":"","Hide Tabs":"","Hide Status Bar":"",
"Hide Menu":"","Show Console":"Ctrl+`","<span class='line'><hr></span>":"","Enter Full Screen":"F11","Enter Full Distraction Mode":"Shift+F11","<span class='line1'><hr></span>":"",Layout:"",Groups:"","Focus Groups":"","Move File to Group":"","<span class='line2'><hr></span>":"",Syntax:"",Indentation:"","Line Endings":"","<span class='line3'><hr></span>":"","Word Wrap":"","Word Wrap Column":"",Ruler:"","<span class='line4'><hr></span>":"","Spell Check":"F6","Next Misspelling":"","Previous Misspelling":"",
Dictionary:""},Goto:{"Goto Anything...":"Ctrl+P","<span class='line'><hr></span>":"","Goto Symbol...":"Ctrl+R","Goto Symbol in Project...":"Ctrl+Shift+R","Goto Definition...":"F12","Goto Reference...":"Shift+F12","Goto Line...":"Ctrl+G","<span class='line2'><hr></span>":"","Jump Back":"Alt+-","Jump Foward":"Alt+Shift+-","<span class='line3'><hr></span>":"","Switch File":"","<span class='line4'><hr></span>":"",Scroll:"",Bookmarks:"","<span class='line5'><hr></span>":"","Jump to Matching Bracket":"Ctrl+M"},
Tools:{"Command Palette...":"Ctrl+Shift+P","Snippets...":"","<span class='line'><hr></span>":"","Build System":"",Build:"Ctrl+B","Build With...":"Ctrl+Shift+B","Cancel Build":"Ctrl+Break","Build Results":"","Save All on Build":"","<span class='line2'><hr></span>":"","Record Macro":"Ctrl+Q","Playback Macro":"Ctrl+Shift+Q","Save Macro...":"",Macros:"","<span class='line3'><hr></span>":"",Developer:"","Install Package Control":""},Project:{"Open Project...":"","Switch Project...":"","Quick Switch Project...":"",
"Open Recent":"","<span class='line'><hr></span>":"","Save Project As...":"","Close Project":"","Edit Project":"","<span class='line1'><hr></span>":"","New Workspace for Project":"","Save Workspace As...":"","<span class='line2'><hr></span>":"","Add Folder to Project...":"","Remove all Folders from Project":"","Refresh Folders":""},Preferences:{"Browse Packages":"","<span class='line'><hr></span>":"",Settings:"","Settings\u2013Syntax Specific":"","Settings\u2013Distraction Free":"","<span class='line2'><hr></span>":"",
"Key Bindings":"","<span class='line3'><hr></span>":"","Color Scheme...":"","Theme...":"",Font:""},Help:{Documentation:"",Twitter:"","<span class='line'><hr></span>":"","Indexing Status":"","<span class='line1'><hr></span>":"","Purchase License":"","Enter License":"","<span class='line2'><hr></span>":"","Check for Updates...":"","Changelog...":"","Me":""}};
//tab menu

for(let i in dropdown_){
    const key = [];
    const value = [];

    if (!dropdown_.hasOwnProperty(i)) {
        continue;
    }
    for(let o in dropdown_[i]){
        key.push('<div class="s"><span class="space"></span><span class="key">'+o+'</span>'+
          '<span class="value">'+dropdown_[i][o]+'<span></div>')
        value.push(dropdown_[i][o])
    }
     jQuery('#'+i).html(key)
     
}

const file_icons = {

  php : '<i class="fab fa-php"></i>',
  js : '<i class="fab fa-js"></i>',
  dotfiles : "",
  txtfiles : "",
  image : '<i class="far fa-image"></i>',
  markup : '<i class="fas fa-code"></i>',
  manifest: "",
  folder : '<i class="far fa-folder"></i>'
  
}

const function__ = {
  folder_c : {"New File" : "",
  "Rename...": "",
  "<span class='line'><hr></span>": "",
  "New Folder": "",
  "Delete Folder": "","Find in Folder...": ""},
  file_c : {"Rename...": "","Delete File": "","Open Containing Folder...": ""},
  folder :  function(arg){ 
    const ar = [];

    for(let i in function__.folder_c){
        ar.push('<div class="s"><span class="space"><span class="key">'+i+'</span></div>')
    }

      //Right click function for folders
      jQuery(arg).on('contextmenu', function(){
        $(this).bind("contextmenu",function(event) { 

          //Got the code from this dude: https://stackoverflow.com/questions/4495626/making-custom-right-click-context-menus-for-my-web-app
          $("<div class='custom-menu'></div>").append(ar)

               .appendTo("body")
               .css({top: event.pageY + "px", left: event.pageX + "px"});

          }).bind("click" , function(){

              $('.child').children(".custom-menu").remove();

          })
      })
  },
  file:  function(){




  }
}


let folders_files = {

    "me" : {"school.js": "","achievements.php": "","life.html":""}, 
    "img" : {},
    "css" : {},
    "js" : {}
}

// sort algo: https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
let ksort = function ( src ) {
      var keys = Object.keys( src ),
          target = {};
      keys.sort();

      keys.forEach(function ( key ) {
        target[ key ] = src[ key ];
      });

      return target;
};


jQuery('.file-folder').append('<p class="binded-event mainfolder toggle"> <span class="icoo">'+file_icons.folder+'</span> &nbspcostelo01.github.io</p>'+
  '<div class="accordion-content.default"><p>Lorem ipsum dolor sit amet mauris eu turpis.</p></div>');

for(let i in ksort(folders_files)){
  if (!folders_files.hasOwnProperty(i)) {
          continue;
  }
  jQuery('.file-folder').append('<p class="binded-event toggle">  <span class="icoo">'+file_icons.folder+'</span> &nbsp'+i+'</p>')
  
  for(let o in ksort(folders_files[i])){
      
  }
}

function__.folder('.binded-event')


jQuery('.file-folder').find('.toggle').click(function(){

       //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      // $(".accordion-content").not($(this).next()).slideDown('fast');

    });


// $('.key').on('click', function () {
//     if($(this).text() == 'Exit')
          
// });