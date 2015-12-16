define(function(require, exports, module) {
"use strict";

console.log("require");
console.log(require);
console.log(exports);
console.log(module);
var glUserId="";
var glGroupId="";
var USS=function ()
{
//	alert("USS");

	this.count=0;
	this.version="";
	this.USSScript="";
	//this.USSBrowserDetail_()
//include system level javascripts
//	this.USSIncludeLinks_("xml.js")
	//this.USSField_()
	this.resourcesPath="";
}

USS.prototype.USSGetScript_= function(script)
{
  USS.version += script;
}

USS.prototype.initCapWord=function (s)
{
    return s[0].toUpperCase() + s.slice(1); //need to fix  thru excpection ####
    return s;
}
USS.prototype.initCap=function (s)
{

	 var new_str = s.split(' '),
        i,
        arr = [];
    for (i = 0; i < new_str.length; i++) {
        arr +=this.initCapWord(new_str[i]);
    }
    return arr;
	
   // return s[0].toUpperCase() + s.slice(1);
}



USS.prototype.USSSetScript_= function()
{
return  USS.version;
}

USS.prototype.USSBrowserDetail_= function()
{
  this.browserIE     = false;
  this.rowserFirefox = false;
  this.browserSafari = false;
  this.location =  ""+  window.location;


	//alert(navigator.userAgent);

  if (navigator.userAgent.indexOf("MSIE") > -1) {
    this.browserIE = true;
  } else if ((navigator.userAgent.indexOf("Firefox/") > -1)) {
    this.browserFirefox = true;
    if ((navigator.userAgent.indexOf("Firefox/1.0.") > -1)) {
      this.browserFirefox10 = true;
    } else {
      this.browserFirefox10 = false;
    }
  } else if (navigator.userAgent.indexOf("Safari") > -1) {
    this.browserSafari = true;
    if (navigator.userAgent.indexOf("Version/") > -1) {
      this.browserSafari3OrHigher = true;
    }
  }
	
}
USS.prototype.USSIncludeScript_=function(filename)
{
//	alert("Include 001");
	try
	{
		if(arguments.length< 1)
		{
			alert('SYS:USSIncludeScript_:Argument is must for this function');
			return false;
		}
		else if (filename.length== 0)
		{
			alert('SYS:USSIncludeScript_: filename is can be null');
		}

		var el = document.createElement('script');
	//	el.src = this.resourcesPath + "/javascript/" + filename;
		el.src =  "../javascript/" + filename;
		//el.href = filename;
	//	alert(" filename= <" +  filename + ">");
		el.type = 'javascrupt';
	//	el.rel = 'stylesheet';
		document.getElementsByTagName('head').item(0).appendChild(el);
	}
	catch(e)
	{
		alert("APPUINLException:"+ e);
	}

//	alert("Include 002");
}


USS.prototype.USSIncludeLinks_=function(filename)
{
//	alert("Include 001");
	try
	{
		if(arguments.length< 1)
		{
			alert('SYS:USSIncludeLinks_:Argument is must for this function');
			return false;
		}
		else if (filename.length== 0)
		{
			alert('SYS:USSIncludeLinks_: filename is can be null');
		}

		var el = document.createElement('link');
		//el.href = this.resourcesPath + "styles/" + filename;
		el.href = filename;
		//alert(" filename= <" +  filename + ">");
		el.type = 'text/css';
		el.rel = 'stylesheet';
		document.getElementsByTagName('head').item(0).appendChild(el);
	}
	catch(e)
	{
		alert("APPUINLException:"+ e);
	}

	//alert("Include 002");
}

USS.prototype.USSField_=function()
{

this.group      = 'USS', /*it has been chabged by durai on 02-Feb-2010*/
this.name       = '',
this.label      = '',
this.task       = 'NONE',
this.desc       = '',
this.htmlType   = 'text', /* newly introduced in USS05*/
this.entitle    = 'READONLY'; // Editable /Readonly
this.enttlname  = ''; //Entitle name to db
this.mndf       = 'N',
this.dataType   = 'VARCHAR',  // NUMBER/VARCHAR/DATE/EMAIL/AMOUNT/LIST/DIV/
this.cclass     = 'ctable',   //
this.parent     = '',
this.validate   = '',
this.dflt       = '',
this.min        = '0',
this.max        = '60',
this.tips       = '',
this.onkeyup    = 'onKeyUp(this);',
this.onchange   = 'onChange(this);',
this.onkeydown  = 'onKeyDown(this);',
this.onkeypress = 'onKeyPress(this);',
this.onclick    = 'onClick(this);',
this.onblure    = 'onBlure(this);',
this.listVal    = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY',
this.help       = 'N',
this.helpLink   = 'helpload',
this.xml        = 'Y',
this.xmlname    = '',
this.Xpath      = '/' ,
this.maxCol     = '1',
this.col        = '0'
	
}
USS.prototype.USSCreareTab_=function()
{
	
  this.searchResultsEl                = document.createElement("div");
  this.searchResultsEl.id             = 'searchAsYouTypeResults1';
  this.searchResultsEl.className      = 'searchResults';
 // this.searchResultsEl.style.display  = 'none'; 
 //this.searchResultsEl.style.position = 'absolute'; 
 //this.searchResultsEl.onclick        = 'event.cancelBubble = true;';
  this.searchResultsEl.tabIndex       = -1;

	
}



USS.prototype.USSCreateContainer=function()
{
	//alert('In USSCreateContainer ');
  this.El                = document.createElement("div");
  this.El.id             = '';
  this.El.className      = 'bcontainer';
 // this.El.style.display  = 'none'; 
 // this.El.style.position = 'absolute'; 
 // this.El.onclick        = 'event.cancelBubble = true;';
  this.El.tabIndex       = -1;
  return this.El;
	
}


USS.prototype.USSCreateHeader=function(title)
{
	
  this.El                = document.createElement("div");
  this.El.id             = '';
  this.El.className      = 'bheader';
//this.El.style.display  = 'none'; 
//this.El.style.position = 'absolute'; 
//this.El.onclick        = 'event.cancelBubble = true;';
  this.El.tabIndex       = -1;
  this.ElA               = document.createElement("a");
  this.newContent = document.createTextNode(title);
  this.ElA.appendChild(this.newContent );
  this.El.appendChild(this.ElA );
  return this.El;
	
}


USS.prototype.USSCreateHeader=function(title, action,name)
{
	
  this.El                = document.createElement("div");
  this.El.id             = '';
  this.El.className      = 'bheader';
//this.El.style.display  = 'none'; 
//this.El.style.position = 'absolute'; 
//this.El.onclick        = 'event.cancelBubble = true;';
  this.El.tabIndex       = -1;
  this.ElA               = document.createElement("a");
  this.newContent = document.createTextNode(title);
  this.ElA.appendChild(this.newContent );
  
  if(action.indexOf("E")!= -1)
  {


   this.ElEditButtonE                 = document.createElement("a");
   this.ElEditButtonE.className       = "bheaderButton";
   this.ElEditButtonE.value           = "EDIT" ;
   this.ButtonLabelE 				  = document.createTextNode("EDIT");
   //this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
  // this.ElEditButtonE.setAttribute("href","#"+name +"/USSEdit");
   this.ElEditButtonE.setAttribute("ng-click","basicDetEditSave()");
   
  // this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
   this.ElEditButtonE.appendChild(this.ButtonLabelE);
   this.El.appendChild(this.ElEditButtonE );
}


if(action.indexOf("A")!=-1)
  {

//<a href="#" class="delete btn btn-danger btn-small">delete</a>
   this.ElEditButton                 = document.createElement("a");
   this.ElEditButton.className       = "bheaderButton btn ";
   this.ElEditButton.value          = "DELETE" ;
  // this.ElEditButton.setAttribute("href","#notes/delete");
   this.ElEditButton.setAttribute("href","#"+name +"/USSAdd");
   this.ButtonLabel 				= document.createTextNode("ADD");
   this.ElEditButton.appendChild(this.ButtonLabel);
   this.El.appendChild(this.ElEditButton );
}
 



//<a href="#" class="delete btn btn-danger btn-small">delete</a>
   this.ElEditButton                 = document.createElement("a");
   this.ElEditButton.className       = "bheaderButton btn ";
   this.ElEditButton.value          = "CANCEL" ;
  // this.ElEditButton.setAttribute("href","#notes/delete");
   this.ElEditButton.setAttribute("href","#/dashboard/");
   this.ButtonLabel 				= document.createTextNode("CANCEL");
   this.ElEditButton.appendChild(this.ButtonLabel);
   this.El.appendChild(this.ElEditButton );


  this.El.appendChild(this.ElA );
  
  return this.El;
	
}


USS.prototype.USSCreateHeader=function(title, action,name, mode)
{
	
  this.El                = document.createElement("div");
  this.El.id             = '';
  this.El.className      = 'bheader';
//this.El.style.display  = 'none'; 
//this.El.style.position = 'absolute'; 
//this.El.onclick        = 'event.cancelBubble = true;';
  this.El.tabIndex       = -1;
  this.ElA               = document.createElement("a");
  this.newContent = document.createTextNode(title);
  this.ElA.appendChild(this.newContent );

  if( mode =="EDIT" || mode == "FULL")
  {
  
  	if(action.indexOf("E")!= -1)
  	{


   this.ElEditButtonE                 = document.createElement("a");
   this.ElEditButtonE.className       = "bheaderButton";
   this.ElEditButtonE.value           = "EDIT" ;
   this.ButtonLabelE 				  = document.createTextNode("EDIT");
   //this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
   this.ElEditButtonE.setAttribute("href","#"+name +"/USSEdit");
   
  // this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
   this.ElEditButtonE.appendChild(this.ButtonLabelE);
   this.El.appendChild(this.ElEditButtonE );
}

}


 if( mode =="SAVE")
  {
  
  	if(action.indexOf("E")!= -1)
  	{


   this.ElEditButtonE                 = document.createElement("a");
   this.ElEditButtonE.className       = "bheaderButton";
   this.ElEditButtonE.value          = "SAVE" ;
   this.ButtonLabelE 				= document.createTextNode("SAVE");
   //this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
  // this.ElEditButtonE.setAttribute("href","#"+name +"/USSEdit");

  this.ElEditButtonE.setAttribute('ng-click', name+'EditSave()');
   
  // this.ElEditButtonE.setAttribute("href","#notes/USSEdit");
   this.ElEditButtonE.appendChild(this.ButtonLabelE);
   this.El.appendChild(this.ElEditButtonE );
}

}

if(mode =="ADD" || mode== "FULL")
{

if(action.indexOf("A")!=-1)
  {

//<a href="#" class="delete btn btn-danger btn-small">delete</a>
   this.ElEditButton                 = document.createElement("a");
   this.ElEditButton.className       = "bheaderButton btn ";
   this.ElEditButton.value          = "DELETE" ;
  // this.ElEditButton.setAttribute("href","#notes/delete");
   this.ElEditButton.setAttribute("href","#"+name +"/USSAdd");
   this.ButtonLabel 				= document.createTextNode("ADD");
   this.ElEditButton.appendChild(this.ButtonLabel);
   this.El.appendChild(this.ElEditButton );
}
 
 }


if( mode == "ADD" || mode =="EDIT" || mode == "SAVE")
{

//<a href="#" class="delete btn btn-danger btn-small">delete</a>
   this.ElEditButton                 = document.createElement("a");
   this.ElEditButton.className       = "bheaderButton btn ";
   this.ElEditButton.value          = "CANCEL" ;
  // this.ElEditButton.setAttribute("href","#notes/delete");
   this.ElEditButton.setAttribute("href","#/dashboard/");
   this.ButtonLabel 				= document.createTextNode("CANCEL");
   this.ElEditButton.appendChild(this.ButtonLabel);
   this.El.appendChild(this.ElEditButton );
}





  this.El.appendChild(this.ElA );
 

  return this.El;
	
}


USS.prototype.USSCreateSession =function()
{
	
  this.El                = document.createElement("div");
  this.El.id             = '';
  this.El.className      = 'bsession';
  //this.El.style.display  = 'none'; 
  //this.El.style.position = 'absolute'; 
  //this.El.onclick        = 'event.cancelBubble = true;';
  this.El.tabIndex       = -1;
  
  return this.El;
	
}




//alert("import USS end");

USS.prototype.USSCreateTable_=function()
{
	
  this.ussTable = document.createElement("div");
  this.ussTable.id = 'mainTable';
  this.ussTable.className = 'container';
  this.ussTable.border=0;
 // this.ussTable.style.display  = 'none'; 
 // this.ussTable.style.position = 'absolute'; 
 // this.ussTable.onclick = 'event.cancelBubble = true;';
 // this.ussTable.tabIndex = -1;

return this.ussTable;
	
}


USS.prototype.USSAppendTableRow=function(USSTableRow,USSTable)
{

USSTable.appendChild(USSTableRow);

return USSTable;
	
}

USS.prototype.USSAppendTableField=function(USSTableRow,USSTable)
{

USSTable.appendChild(USSTableRow);

return USSTable;
	
}



USS.prototype.USSCreateTableRow_=function()
{
	
  this.ussTableRow = document.createElement("div");
  this.ussTableRow.className = 'row';
  this.ussTableRow.border=1;
 // this.ussTableRow.onclick = 'event.cancelBubble = true;';
  this.ussTableRow.tabIndex = -1;

return this.ussTableRow;
	
}

//accordion

USS.prototype.USSCreateAccordion=function(id)
{

this.ussTableAccordion    = document.createElement("div");
this.ussTableAccordion.id = "accordion" + id;
return this.ussTableAccordion;
	
}


USS.prototype.USSAccordionCreateDflt=function()
{
	this.ussTableAccordionD= document.createElement("div");
	this.ussTableAccordionD.className ="panel panel-default" ;

	return this.ussTableAccordionD;
}


USS.prototype.USSAppendAccordionDflt=function(obj,dflt)
{
	this.ussTableAccordion=obj;
	this.ussTableAccordion.appendChild(dflt);

	return this.ussTableAccordion;
	
}


USS.prototype.USSAppendAccordionHeader=function(obj,title)
{
this.ussTableAccordion=obj; 
this.ussTableAccordionH= document.createElement("div");
this.ussTableAccordionH.className ="panel-heading" ;
this.ussTableAccordionH4= document.createElement("H4");
this.ussTableAccordionH4.className ="panel-title" ;
this.ussTableAccordionH4.border=1;
this.ussTableAccordionA= document.createElement("a");
//this.ussTableAccordionA.setAttribute("data-toggle", "collapse" ); -- collapse
this.ussTableAccordionA.setAttribute("href", "#collapse1" );
this.newContent = document.createTextNode(title);
this.ussTableAccordionA.appendChild(this.newContent);
//this.ussTableAccordionA.setAttribute("data-toggle","collapse");
this.ussTableAccordionA.setAttribute("data-parent","container1");
this.ussTableAccordionH4.appendChild(this.ussTableAccordionA);
this.ussTableAccordionH.appendChild(this.ussTableAccordionH4);
this.ussTableAccordion.appendChild(this.ussTableAccordionH);
return this.ussTableAccordion;
}

USS.prototype.USSAppendAccordionHeader=function(obj,title,pid,cid)
{
this.ussTableAccordion=obj; 
this.ussTableAccordionH= document.createElement("div");
this.ussTableAccordionH.className ="panel-heading" ;
this.ussTableAccordionH4= document.createElement("H4");
this.ussTableAccordionH4.className ="panel-title" ;
this.ussTableAccordionH4.border=1;
this.ussTableAccordionA= document.createElement("a");
//this.ussTableAccordionA.setAttribute("data-toggle", "collapse" );
this.ussTableAccordionA.setAttribute("href", "#collapse"+cid );
this.newContent = document.createTextNode(title);
this.ussTableAccordionA.appendChild(this.newContent);
//this.ussTableAccordionA.setAttribute("data-toggle","collapse");
this.ussTableAccordionA.setAttribute("data-parent","#accordion"+pid);
this.ussTableAccordionH4.appendChild(this.ussTableAccordionA);
this.ussTableAccordionH.appendChild(this.ussTableAccordionH4);
this.ussTableAccordion.appendChild(this.ussTableAccordionH);
return this.ussTableAccordion;
}

USS.prototype.USSAppendAccordionSection=function(obj ,table)
{

this.ussTableAccordion= obj; //document.createElement("div");
this.ussTableAccordionDiv=document.createElement("div");
//this.ussTableAccordionDiv.className ="panel-collapse collapse" ;
this.ussTableAccordionDiv.id="collapse1";
this.ussTableAccordionBody=document.createElement("div");
this.ussTableAccordionBody.className ="panel-body" ;
this.ussTableAccordionBody.innerHTML=table.outerHTML;
this.ussTableAccordionDiv.appendChild(this.ussTableAccordionBody);
this.ussTableAccordion.appendChild(this.ussTableAccordionDiv);

return this.ussTableAccordion;
}


USS.prototype.USSAppendAccordionSection=function(obj ,table,pid,cid)
{

this.ussTableAccordion= obj; //document.createElement("div");
this.ussTableAccordionDiv=document.createElement("div");
//this.ussTableAccordionDiv.className ="panel-collapse collapse" ;
this.ussTableAccordionDiv.id="collapse"+cid;
this.ussTableAccordionBody=document.createElement("div");
this.ussTableAccordionBody.className ="panel-body" ;
this.ussTableAccordionBody.innerHTML=table.outerHTML;
this.ussTableAccordionDiv.appendChild(this.ussTableAccordionBody);
this.ussTableAccordion.appendChild(this.ussTableAccordionDiv);

return this.ussTableAccordion;
}

USS.prototype.USSAppendAccordion=function(obj,title,table)
{
	

  this.ussTableAccordion=obj;  
this.ussTableAccordionH= document.createElement("div");


 this.ussTableAccordionH.className ="headline" ;


this.ussTableAccordionSpan= document.createElement("span");
 this.newContent = document.createTextNode(title);
 this.ussTableAccordionDiv=document.createElement("div");
this.ussTableAccordionDiv.className ="section" ;
 

this.ussTableAccordionDiv.innerHTML=table.outerHTML;

this.ussTableAccordionH.appendChild(this.ussTableAccordionSpan);
this.ussTableAccordionH.appendChild(this.newContent);

this.ussTableAccordion.appendChild(this.ussTableAccordionH);
this.ussTableAccordion.appendChild(this.ussTableAccordionDiv);



return this.ussTableAccordion;
	
}
USS.prototype.USSAppendAccordionExapnd=function(obj)
{
	

this.ussTableAccordion=obj;  // --document.createElement("div");
this.ussTableAccordionExpand= document.createElement("div");
this.ussTableAccordionExpand.id="expand";
this.ussTableAccordionExpand.appendChild(document.createTextNode("Collapse All"));

this.ussTableAccordion.appendChild(this.ussTableAccordionExpand);

return this.ussTableAccordion;

}

USS.prototype.isContainer=function(fieldObj)
{

	if(fieldObj.dataType=="CONTAINER")
	{
		return true;
	}
	else
	{
		return false;
	}
}


USS.prototype.hasChild=function(fieldObj)
{
	//console.log(fieldObj);

	if( Array.isArray(fieldObj.childs))
	{

		if( fieldObj.childs.length == 0 )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		return false;
	}

	
}
USS.prototype.CreateField=function (fieldObj,USSTableRow)
{
	var rtString = "";
	var fldStr="";	
	var jsfunc="";

try
{
pre_cust_CreateField(fieldObj,USSTableRow)
}
catch(e)
{
}
 
	try
	{
		if (fieldObj.htmlType == "" )
		{
			alert("[" +fieldObj.name +"] " + FLDFCF00001);
	
			return false;
		}
		else if (fieldObj.dataType == "" ) 
		{
			alert(FLDFCF00002);
			return false;
	
		}
		else  if  (fieldObj.groupId == "" ) 
		{
			alert(FLDFCF00003);
			return false;
	
		}
		else 
		{

		

				this.tableBodyElmntDesc=document.createElement("span");
				this.tableBodyElmntScript=document.createElement("script");
                                this.tableBodyTr=document.createElement("div");
                                this.tableBodyTr.className="row";
				this.tableBodyTd=document.createElement("div");
				this.tableBodyTd.id="td";
				this.tableBodyTd.className = 'col-sm-' + 12/4;

				this.tableBodyTd2=document.createElement("div");
				this.tableBodyTd2.id ="td";
				this.tableBodyTd2.className = 'col-sm-'+ 12/4;
		
				if((fieldObj.dataType =='HIDDEN')||(fieldObj.dataType == 'XMLCONTAINER')||(fieldObj.dataType =='BUTTON'))
				{
				//don't include the lable for hidden
					;
				}
				else
				{


					this.tableBodyLabel=document.createElement("label");
					this.tableBodyLabel.className = 'clabel';
					this.tableBodyLabel.setAttribute("for",fieldObj.name);
//					this.tableBodyLabelContent = document.createTextNode(fieldObj.label.toLowerCase());
					this.tableBodyLabelContent = document.createTextNode(fieldObj.label);
					this.tableBodyMndf=document.createElement("span");
					this.tableBodyMndf.id="mndf";
					this.tableBodyMndf.className = 'mandatory';
					this.tableBodyLabelContentMndf = document.createTextNode("*");
					this.tableBodyMndf.appendChild(this.tableBodyLabelContentMndf);
					this.tableBodyLabel.appendChild( this.tableBodyLabelContent);
					if ( fieldObj.mndf == 'Y' )
					{
						this.tableBodyLabel.appendChild(this.tableBodyMndf);
					}
			
				}
				if (fieldObj.htmlType == 'LIST') 
				{

					this.tableBodySelect=document.createElement("select");
					this.tableBodySelect.className = 'clabel';
					this.tableBodySelect.name=fieldObj.name ;
					this.tableBodySelect.for = fieldObj.name; 
					var inpStrArr= fieldObj.listVal.split('|');
					for(var i=0 ; i< inpStrArr.length;i+=2)
					{
						if( fieldObj.dflt == inpStrArr[i])
						{
							this.tableBodyOption=document.createElement("option");
							this.tableBodyOption.value=inpStrArr[i];
							this.tableBodyOption.setAttribute('selected', 'true');
							this.tableBodyOption.appendChild(document.createTextNode(inpStrArr[i+1]));
							this.tableBodyOption.id="option";
			
						}
						else
						{
							this.tableBodyOption=document.createElement("option");
							this.tableBodyOption.value=inpStrArr[i];
							this.tableBodyOption.appendChild(document.createTextNode(inpStrArr[i+1]));
							this.tableBodyOption.id="option";

						}
						this.tableBodySelect.appendChild(this.tableBodyOption);

					}
					this.tableBodyElmnt=this.tableBodySelect;

				}
				else if(fieldObj.htmlType =='DIV')
				{
					this.tableBodyElmnt=document.createElement("div");
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = '';
				//<img src="../img/loading.gif">
					this.tableBodyElmntImg=document.createElement("img");
					this.tableBodyElmntImg.src="../img/loading.gif";
					this.tableBodyElmnt.appendChild(this.tableBodyElmntImg);
				}
				else if(fieldObj.htmlType =='BUTTON')
				{
					this.tableBodyElmnt=document.createElement("button");
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
					this.tableBodyElmnt.appendChild(document.createTextNode(fieldObj.dflt));
				}		
				else if(fieldObj.htmlType =='LOB')
				{
					this.tableBodyElmnt=document.createElement("textarea");
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
				}
				else if(fieldObj.htmlType =='HIDDEN')
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="hidden";
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
				}
				else if(fieldObj.htmlType =='LABEL')
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="text";
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'clabel';
					this.tableBodyElmnt.readonly=true;
					this.tableBodyElmnt.setAttribute('readonly','true');
				}
				else if(fieldObj.htmlType =='PASSWORD')
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="password";
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
				}
				else if (fieldObj.htmlType == 'OPTION') 
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="hidden";
					this.tableBodyElmnt.setAttribute("readonly","true");

					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
					var inpStrArr= fieldObj.listVal.split('|');
					var fldStr="";
					var rtString="";
					for(var i=0 ; i< inpStrArr.length;i+=2)
					{
						if (fieldObj.entitle == 'READONLY') 
						{
							if (fieldObj.dflt ==inpStrArr[i] ) 
							{
							
								fldStr='<div class="col-sm-6" > <input disabled="true" type="radio" checked=true dataType="'+fieldObj.dataType+'" htmlType="'+fieldObj.htmlType+'"    xmlname="'+fieldObj.name+'" name="'+fieldObj.name+'"  parent="'+fieldObj.parent+'" id="'+fieldObj.name+'"  value="'+inpStrArr[i]+'"  > <label class="clabel" >'+ inpStrArr[i+1]  + '</label > </div>';
							}
							else
							{
								fldStr='<div class="col-sm-6" >  <input disabled="true"   type="radio" dataType="'+fieldObj.dataType+'"   xmlname="'+fieldObj.name+'" htmlType="'+fieldObj.htmlType+'"   name="'+fieldObj.name+'"  parent="'+fieldObj.parent+'" id="'+fieldObj.name+'"  value="'+inpStrArr[i]+'"  >  <label class="clabel" >'+ inpStrArr[i+1]  + '</label >  </div>' ;
							}
						}
						else
						{
							if (fieldObj.dflt ==inpStrArr[i] ) 
							{
							
								fldStr=' <div class="col-sm-6" >  <input  type="radio" checked=true dataType="'+fieldObj.dataType+'" htmlType="'+fieldObj.htmlType+'"    xmlname="'+fieldObj.name+'" name="'+fieldObj.name+'"  parent="'+fieldObj.parent+'" id="'+fieldObj.name+'"  value="'+inpStrArr[i]+'"   >  <label class="clabel" >'+ inpStrArr[i+1]  + '</label >  </div>';
							}
							else
							{
								fldStr='<div class="col-sm-6" >  <input  type="radio" dataType="'+fieldObj.dataType+'"   xmlname="'+fieldObj.name+'" htmlType="'+fieldObj.htmlType+'"              name="'+fieldObj.name+'"  parent="'+fieldObj.parent+'" id="'+fieldObj.name+'"  value="'+inpStrArr[i]+'"  >  <label class="clabel" >'+ inpStrArr[i+1]  + '</label >  </div>';
							}

						}
						
						rtString+=fldStr;
						}
						this.tableBodyElmntRadio=document.createElement("div");
						this.tableBodyElmntRadio.innerHTML=rtString;
					}
				else if (fieldObj.htmlType == 'XMLCONTAINER' ||fieldObj.htmlType == 'PAGE'  ||  fieldObj.htmlType == 'hidden') 
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="hidden";
					this.tableBodyElmnt.name=fieldObj.name ;
					this.tableBodyElmnt.className = 'ctable';
				}
				else
				{
					this.tableBodyElmnt=document.createElement("input");
					this.tableBodyElmnt.type="input";
					this.tableBodyElmnt.name=fieldObj.group+'_'+fieldObj.name ;
					this.tableBodyElmnt.className = 'ctext';
					var fldStr="";
					var rtString="";
					if(fieldObj.help=='Y')
					{
						fldStr='<a id=link   HREF="javascript:onClickLink(\''+fieldObj.name+'\',\'' +this.helpLink+' \',\'calender\');"> <img src="../img/'+this.helpLink+'.png" width="20px" height="20px" />  </a>';
						rtString+=fldStr;
					}
					if(fieldObj.desc=='Y')
					{
						fldStr='<input type="text"  readonly class="label" name="'+fieldObj.name+'Desc"     xmlname="'+fieldObj.name+'Desc" id="'+fieldObj.name+'Desc" xml="'+fieldObj.xml+'"  parent="'+fieldObj.parent+'" dataType="LABEL" value=""  label="'+fieldObj.label+'"  >';
						rtString+=fldStr;
					}
					this.tableBodyElmntDesc.innerHTML=rtString;
				}


				
			}
	}
	catch(e)
	{
			alert("CFCException :" +e);
	}
	this.tableErrorBox=document.createElement("div");
	this.tableErrorBox.id= fieldObj.name +"ErrorBox";

	//this.tableErrorBox.className="ui-state-highlight";
//	this.tableErrorBox.appendChild(document.createTextNode(""));

  	//this.tableBodyElmnt.className = 'ctext';  ### fixd for div tag on 27/dec/2014

	if( fieldObj.htmlType != 'DIV' )
	{
		this.tableBodyElmnt.className = 'ctext';  
	}
	this.tableBodyElmnt.setAttribute("xml",fieldObj.xml);
	this.tableBodyElmnt.setAttribute("mndf",fieldObj.mndf);
	this.tableBodyElmnt.setAttribute("dataType",fieldObj.dataType);
	this.tableBodyElmnt.setAttribute("htmlType",fieldObj.htmlType);

	if  ( fieldObj.dataType == 'DATE' )
	{
		this.tableBodyElmnt.setAttribute("placeholder","DD-MON-YYYY");
	}
	else if ( fieldObj.dataType == 'AMOUNT' )
	{
		this.tableBodyElmnt.setAttribute("placeholder","999999999999999.99");
	}

	this.tableBodyElmnt.id  =fieldObj.name;
	this.tableBodyElmnt.setAttribute( "ng-model" ,fieldObj.name); // added for angular js
	this.tableBodyElmnt.setAttribute( "maxlength" ,fieldObj.max);
	this.tableBodyElmnt.setAttribute("min" , fieldObj.min);
	this.tableBodyElmnt.value=fieldObj.dflt;
	
	this.tableBodyElmnt.setAttribute("value"   ,fieldObj.dflt);
	this.tableBodyElmnt.setAttribute("maxCol"  ,fieldObj.maxCol);
	this.tableBodyElmnt.setAttribute("col"     ,fieldObj.col);
	this.tableBodyElmnt.setAttribute("dflt"    ,fieldObj.dflt);
	this.tableBodyElmnt.setAttribute("ErrorBox",fieldObj.name +"ErrorBox");
	this.tableBodyElmnt.setAttribute("label"   ,fieldObj.label);
	this.tableBodyElmnt.setAttribute("title"   ,fieldObj.tips);
	this.tableBodyElmnt.setAttribute("Xpath"   ,fieldObj.Xpath);
	this.tableBodyElmnt.onchange=fieldObj.onchange;
	/*this.tableBodyElmnt.setAttribute("onclick",fieldObj.onclick);
	this.tableBodyElmnt.setAttribute("onblure",fieldObj.onblure);
	this.tableBodyElmnt.setAttribute("onkeydown",fieldObj.onkeydown);
	this.tableBodyElmnt.setAttribute("onkeyup",fieldObj.onkeyup);
	this.tableBodyElmnt.setAttribute("onkeypress",fieldObj.onkeypress); */
	this.tableBodyElmnt.setAttribute("task",fieldObj.task);
	if (fieldObj.dataType == 'PAGE')
	{
		this.tableBodyElmnt.setAttribute("parent","/");
		//this.tableBodyElmnt.setAttribute("type","hidden");
	}
	else
	{
		this.tableBodyElmnt.setAttribute("parent",fieldObj.parent);
	}

	this.tableBodyElmnt.setAttribute("xmlname",fieldObj.name);


	
	if (fieldObj.dataType == 'CONTAINER' || fieldObj.dataType == 'PAGE' || fieldObj.dataType == 'TAP' ||fieldObj.dataType == 'COLLECTION'  )
	{
		this.tableBodyElmnt.setAttribute("container","Y");
	}
	else
	{
		this.tableBodyElmnt.setAttribute("container","N");
	}

	if (fieldObj.entitle == 'READONLY') 
	{
		this.tableBodyElmnt.className = 'clabel';
		this.tableBodyElmnt.setAttribute('readonly','true');
		if (fieldObj.htmlType == 'LIST') 
		{
			this.tableBodyElmnt.setAttribute('disabled','true');
			
		}

	}

	if((fieldObj.dataType =='PAGE')||(fieldObj.dataType =='HIDDEN')||(fieldObj.dataType == 'XMLCONTAINER')||(fieldObj.dataType =='BUTTON'))
	{
	}
	else
	{
	this.tableBodyTd.appendChild(this.tableBodyLabel);
	USSTableRow.appendChild(this.tableBodyTd);
	}
	this.tableBodyTd2.appendChild(this.tableBodyElmnt);
	this.tableBodyTd2.appendChild(this.tableBodyElmntDesc);

	if ( fieldObj.htmlType == 'OPTION' )
	{
		this.tableBodyTd2.appendChild(this.tableBodyElmntRadio);
	}

	this.tableBodyTd2.appendChild(this.tableErrorBox);

	if( fieldObj.htmlType == 'DIV')
	{


jsfunc =  "	 div='" + fieldObj.name +"';";
//jsfunc += "	 url='getMotherTongue.php';";
// str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase(); 
//jsfunc += "	 url='get"+ fieldObj.name.substring(0,1)+ fieldObj.name.substring(1,fieldObj.name.length) +".php';";
jsfunc += "	 url='../service/"+ fieldObj.name.substring(0,1).toUpperCase() + fieldObj.name.substring(1,fieldObj.name.length) +"';";
//jsfunc += "	 json={USRID:glUserId, GROUPID:glGroupId ,class:'ctext' ,name:'Religion'  ,class:'ctext' ,xml:'N' ,mndf:'N' ,datatype:'VARCHAR' ,htmltype:'DIV' ,id : 'religion' ,errorbox :'religionErrorBox' ,label : 'Religion' ,title :'' ,onchange :'onChange(this)' ,onclick :'onClick(this)' ,onblure :'onBlure(this)' ,onkeydown : 'onKeyDown(this)' ,onkeyup :'onKeyUp(this)' ,onkeypress :'onKeyPress(this)' ,task : 'NONE' };";

var jsonObj= {
USRID      :glUserId, 
GROUPID    :glGroupId 
,name      :fieldObj.name        
,label     :fieldObj.label       
,task      :fieldObj.task        
,desc      :fieldObj.desc        
,htmlType  :fieldObj.htmlType    
,entitle   :fieldObj.entitle     
,enttlname :fieldObj.enttlname   
,mndf      :fieldObj.mndf        
,dataType  :fieldObj.dataType    
,cclass    :fieldObj.cclass      
,parent    :fieldObj.parent      
,validate  :fieldObj.validate    
,dflt      :fieldObj.dflt        
,min       :fieldObj.min         
,max       :fieldObj.max         
,tips      :fieldObj.tips        
,onkeyup   :fieldObj.onkeyup     
,onchange  :fieldObj.onchange    
,onkeydown :fieldObj.onkeydown   
,onkeypress:fieldObj.onkeypress  
,onclick   :fieldObj.onclick     
,listVal   :fieldObj.listVal     
,help      :fieldObj.help        
,helpLink  :fieldObj.helpLink    
,xml       :fieldObj.xml         
,xmlname   :fieldObj.xmlname 
,Xpath     :fieldObj.Xpath 
};

jsfunc += "json =" +JSON.stringify(jsonObj) +";";
jsfunc += "	onPostReq(url,json,div,'DIV');";



//this.USSScript +=  jsfunc;
//var scriptElmnt= document.createElement("script");



//scriptElmnt.appendChild(document.createTextNode(jsfunc));

//USS.USSSetScript_(jsfunc);

//document.getElementById('middleid').appendChild(scriptElmnt);
/*[
this.jsfunc =  " div='" + fieldObj.name+"';";
//url='get"+ fieldObj.name.substring(0,1)+ fieldObj.name.substring(1,str.length).toLowerCase() +".php';

//this.jsfunc+="url='get" +  fieldObj.name + ".php;";
this.jsfunc+="url='../service/" +  fieldObj.name + ";";
this.jsfunc+="json={USRID:glUserId, GROUPID:glGroupId }; onPostReq(url,json,div,'DIV');";

		this.tableBodyElmntScript.appendChild( document.createTextNode(this.jsfunc) );
//	document.header.
*/
	}

	this.tableBodyElmntScript.text=jsfunc;

	this.tableBodyTd2.appendChild(this.tableBodyElmntScript);


	USSTableRow.appendChild(this.tableBodyTd2);

try
{
post_cust_CreateField(fieldObj,USSTableRow);
}
catch(e)
{
}

	return USSTableRow;
}

/*
USS.prototype.debug= function(obj)
{
	console.log("this is debug");
}
*/

//var ussObj=new USS();
exports.USS = USS;
/*
exports.USS.USSSetScript_				=ussObj.USSSetScript_				;
exports.USS.USSBrowserDetail_			=ussObj.USSBrowserDetail_			;
exports.USS.USSIncludeScript_			=ussObj.USSIncludeScript_			;
exports.USS.USSIncludeLinks_			=ussObj.USSIncludeLinks_			;
exports.USS.USSField_					=ussObj.USSField_					;
exports.USS.USSCreareTab_				=ussObj.USSCreareTab_				;
exports.USS.USSCreateContainer			=ussObj.USSCreateContainer			;
exports.USS.USSCreateHeader				=ussObj.USSCreateHeader			;
exports.USS.USSCreateSession 			=ussObj.USSCreateSession 			;
exports.USS.USSCreateTableRow_			=ussObj.USSCreateTableRow_			;
exports.USS.USSAppendTableRow			=ussObj.USSAppendTableRow			;
exports.USS.USSAppendTableField			=ussObj.USSAppendTableField		;
exports.USS.USSCreateTableRow_			=ussObj.USSCreateTableRow_			;
exports.USS.USSCreateAccordion			=ussObj.USSCreateAccordion			;
exports.USS.USSAccordionCreateDflt		=ussObj.USSAccordionCreateDflt		;
exports.USS.USSAppendAccordionDflt		=ussObj.USSAppendAccordionDflt		;
exports.USS.USSAppendAccordionHeader	=ussObj.USSAppendAccordionHeader	;
exports.USS.USSAppendAccordionHeader	=ussObj.USSAppendAccordionHeader	;
exports.USS.USSAppendAccordionSection	=ussObj.USSAppendAccordionSection	;
exports.USS.USSAppendAccordionSection	=ussObj.USSAppendAccordionSection	;
exports.USS.USSAppendAccordion          =ussObj.USSAppendAccordion         ;
exports.USS.USSAppendAccordionExapnd    =ussObj.USSAppendAccordionExapnd   ;
exports.USS.isContainer					=ussObj.isContainer				;
exports.USS.hasChild					=ussObj.hasChild					;
exports.USS.CreateField 		        =ussObj.CreateField 	
//exports.USS.debug 		                =ussObj.debug 		        ;

*/

});