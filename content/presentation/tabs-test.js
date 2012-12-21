Foxtrick.modules["TabsTest"]={
	MODULE_CATEGORY : Foxtrick.moduleCategories.PRESENTATION,
	PAGES : ['all'],
	OPTIONS: ['Tabify'],
	NICE: 50,
	CSS: [ Foxtrick.InternalPath + "resources/css/tabs.css" ],

	run : function(doc) {
		if(!Foxtrick.util.tabs.hasTabSupport(doc))
			return;
		Foxtrick.util.tabs.initialize(doc);

		var h1 = doc.getElementsByTagName("h1")[0].textContent;
		
		//Foxtrick.util.tabs.addHandle(doc, h1, { alt: h1, title: h1, src: "/Img/Icons/cross_small.png"}, "tab-main");
		var main_handle = Foxtrick.util.tabs.addHandle(doc, h1, null, "tab-main");
		if(main_handle)
			Foxtrick.addClass(main_handle, "tab-hattrick");

		if (FoxtrickPrefs.isModuleOptionEnabled("TabsTest", "Tabify"))
			Foxtrick.util.tabs.tabify(doc);
		var ft_handle = Foxtrick.util.tabs.addHandle(doc, "New prefs page!", null , "ft-tab-readme");
		if(ft_handle)
			Foxtrick.addClass(ft_handle, "ft-tab-foxtrick");

		var div = doc.createElement("div");
		var header = doc.createElement("h2");
		header.textContent = "New prefs page!";
		var list = doc.createElement("ul");
		var addEntry = function(list, text){
			var entry = doc.createElement("li");
			var text = doc.createTextNode(text);
			entry.appendChild(text);
			list.appendChild(entry);
		}

		addEntry(list, "We worked on the preference page:");
		addEntry(list, "");
		addEntry(list, "Some of the new features are:");
		addEntry(list, "- Autosave, you will not have to manually save after applying changes");
		addEntry(list, "- Added a search bar, you can now search/filter for a specific entry");
		addEntry(list, "- Changed the design a bit, but that's just a placeholder, no idea how it will end up eventually");
		addEntry(list, "");
		addEntry(list, "Please report when you find something odd.");
		addEntry(list, "");
		addEntry(list, "Team Foxtrick");
		
		div.appendChild(header);
		div.appendChild(list);
		Foxtrick.addClass(div, "ft-tab-custom");

		doc.getElementsByTagName("h1")[0].parentNode.appendChild(div);
		Foxtrick.util.tabs.addElementToTab(doc, div, "ft-tab-readme");

		var container = doc.getElementsByTagName("h1")[0].parentNode;
		Foxtrick.log("addMutationEventListener");
		//match report
		Foxtrick.addMutationEventListener(container, "DOMNodeInserted", function(){
			Foxtrick.util.tabs.initialize(doc);
			if (FoxtrickPrefs.isModuleOptionEnabled("TabsTest", "Tabify"))
				Foxtrick.util.tabs.tabify(doc);
		}, false);

		Foxtrick.util.tabs.show(doc, "tab-main");
	}
}