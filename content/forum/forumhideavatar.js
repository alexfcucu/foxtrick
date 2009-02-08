/**
 * forumhideavatar.js
 * Foxtrick Hide Manager Avatar module
 * @author larsw84
 */

var FoxtrickHideManagerAvatar = {
	
    MODULE_NAME : "HideManagerAvatar",
	MODULE_CATEGORY : Foxtrick.moduleCategories.FORUM,
	DEFAULT_ENABLED : false,

    init : function() {
            Foxtrick.registerPageHandler( 'forumViewThread',
                                          FoxtrickHideManagerAvatar );
    },

    run : function( page, doc ) { return;
		var elems = doc.getElementsByTagName("div");
		for(var i=0; i < elems.length; i++) {
			if(elems[i].getAttribute("class")=="faceCard") {
                              //  dump( "hiding\n" );
				elems[i].parentNode.removeChild(elems[i]);
			}
		}
	},
	
	change : function( page, doc ) {
	
	}
};