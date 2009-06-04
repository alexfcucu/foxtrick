/**
 * leaguenewsfilter.js
 * filters to league news
 * @author convinced 
 */

var FoxtrickLeagueNewsFilter = {
	
    MODULE_NAME : "LeagueNewsFilter",
    MODULE_CATEGORY : Foxtrick.moduleCategories.PRESENTATION,
	DEFAULT_ENABLED : false,
	NEW_AFTER_VERSION: "0.4.7.5",
	LASTEST_CHANGE:"Fixed problems with ShortPAs and repeated useage",
	RADIO_OPTIONS:new Array('all','friendlies','transfers','lineup_changes','PAs'),
	
    init : function() {
	Foxtrick.registerPageHandler( 'league', this);
    },

    run : function( page, doc ) { 
	var newsfeed = doc.getElementById('ctl00_CPMain_repLLUFeed');
	
	var selectdiv=doc.createElement('div');
	selectdiv.setAttribute('style','display:block');
	selectdiv.appendChild(doc.createTextNode(Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.Filter")));
	selectdiv.appendChild(doc.createTextNode(' '));
	var select=doc.createElement('select');
	select.setAttribute("id","ft_ownselectboxID");
	select.addEventListener('change',this.SelectClick,false);
	FoxtrickLeagueNewsFilter.ShowHide.doc=doc;
		
	var option=doc.createElement('option');
	option.setAttribute('value','0');
	option.innerHTML=Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.all");
	select.appendChild(option);
	var option=doc.createElement('option');
	option.setAttribute('value','1');
	option.innerHTML=Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.friendlies");
	select.appendChild(option);
	var option=doc.createElement('option');
	option.setAttribute('value','2');
	option.innerHTML=Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.transfers");
	select.appendChild(option);
	var option=doc.createElement('option');
	option.setAttribute('value','3');
	option.innerHTML=Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.lineup_changes");
	select.appendChild(option);
	var option=doc.createElement('option');
	option.setAttribute('value','4');
	option.innerHTML=Foxtrickl10n.getString("foxtrick.LeagueNewsFilter.PAs");
	select.appendChild(option);
	newsfeed.insertBefore(selectdiv,newsfeed.firstChild);
	select.value=FoxtrickPrefs.getInt("module." + this.MODULE_NAME + ".value"); 
	selectdiv.appendChild(select);

	var newsfeed = doc.getElementById('ctl00_CPMain_repLLUFeed');

	var item=null;
	var items = newsfeed.getElementsByTagName('div');
	for (var i=0;i<items.length;++i) {
		item=items[i];
		if (item.className!='feedItem' && item.className!='feedItem user') continue;

		var as=item.getElementsByTagName('a');
		if (item.className=='feedItem user') { // 4 = PAs, className = 'feedItem user'
			item.setAttribute('ft_news','4');
		}
		else if (as.length==1 && item.className!='feedItem user') {  // 1 = friendlies, not above & one link
			item.setAttribute('ft_news','1');
		}
		else if (as.length==2) {		// two links for transfers and lineup	
		
			var is_transfer= (as[0].href.search('PlayerID=')!=-1 ||		// is_transfer	= one link in a player link 
								as[1].href.search('PlayerID=')!=-1 );
			
			if (is_transfer ) {
				item.setAttribute('ft_news','2');
			}
			else if (as[1].href.search('javascript')==-1 ) {	// 3 = lineup changes, 2 links, second link not ShortPA link,not above
				item.setAttribute('ft_news','3');
			}
		}
	}
	
	this.ShowHide();
	},
	
	ShowHide:function() {
	try {
	var doc=FoxtrickLeagueNewsFilter.ShowHide.doc;
	var newsfeed = doc.getElementById('ctl00_CPMain_repLLUFeed');
	var selected=doc.getElementById('ft_ownselectboxID').value;

	var feed_count=0;
	var last_feed=null;
	var item=null;
	var items = newsfeed.getElementsByTagName('div');
	for (var i=0;i<items.length;++i) {
		item=items[i];
		if (item.className!='feedItem' && item.className!='feedItem user') continue;
		
		// show last date if there was an entry shown for that date
		if (item.previousSibling.previousSibling.className=='feed') {
			if (last_feed) {
				if (feed_count==0) last_feed.style.display='none';
				else last_feed.style.display='block';
			}
			last_feed=item.previousSibling.previousSibling;
			feed_count=0;
		}
		// show selected
		if (selected==0 || item.getAttribute('ft_news')==selected) { 
			item.style.display='block';
			++feed_count;		
		}
		else item.style.display='none';										
	}
	// show very last date if there was an entry shown for that date		
	if (last_feed) {
		if (feed_count==0) last_feed.style.display='none';
		else last_feed.style.display='block';
	}
	
	}catch(e){dump('FoxtrickLeagueNewsFilter: '+e+'\n');} 
	},
	
	change : function( page, doc ) {	
	},
	
	SelectClick : function(evt) {
		try {
			FoxtrickLeagueNewsFilter.ShowHide();		
		} catch (e) {dump("FoxtrickLeagueNewsFilter_Select: "+e+'\n');}
	},
};




/**
 * leaguenewsfilter.js
 * short press anouncements
 * @author convinced 
 */

var FoxtrickShortPAs = {
	
    MODULE_NAME : "ShortPAs",
    MODULE_CATEGORY : Foxtrick.moduleCategories.PRESENTATION,
	DEFAULT_ENABLED : false,
	NEW_AFTER_VERSION: "0.4.8.1",
	LASTEST_CHANGE:"Fox for PAs with horizontal lines",
	
    init : function() {
	Foxtrick.registerPageHandler( 'league', this);
    },
		
	run : function( page, doc ) {	
	var newsfeed = doc.getElementById('ctl00_CPMain_repLLUFeed');
	
	var items = newsfeed.getElementsByTagName('div');
	for (var i=0;i<items.length;++i) {
		var item=items[i];
		if (item.className!='feedItem user') continue;
		var body=item.innerHTML.replace(/.+<\/b>/,'');  //dump(body+'\n');
		item.innerHTML=item.innerHTML.match(/.+<\/b>/); //dump(item.innerHTML+'\n');
		var newdiv=doc.createElement('div');		
		newdiv.innerHTML=body;
		newdiv.style.display='none';
		item.appendChild(newdiv);
		var morediv=doc.createElement('div');
		var margin=10;
		if (Foxtrick.isStandardLayout(doc)) margin=27;
		var dir='right';
		if (Foxtrick.isRTLLayout(doc)) dir='left';		
		morediv.setAttribute('style',"position:absolute; display:inline; "+dir+": "+margin+"px;");
		var a=doc.createElement('a');
		a.innerHTML=Foxtrickl10n.getString("foxtrick.ShortPAs.more");
		a.href='javascript:void(0);';
		a.addEventListener('click',this.showfull,true);		
		morediv.appendChild(a);
		var b=item.getElementsByTagName('b')[0];
		b.parentNode.insertBefore(morediv,b.nextSibling);
		
	}
	},
	
	change : function( page, doc ) {	
	},

	showfull : function(ev) {
		ev.target.parentNode.nextSibling.style.display='block';
		ev.target.parentNode.style.display='none';	
	}
};

