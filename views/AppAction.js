/**
*  实例化应用视图
*  @author fenghaiting@camera360.com
*  @version 2016-1-8
*/

var TemplateConfigView = require('../modules/pageScene/TemplateConfigView.js');

var TemplateListView = require('../modules/pageScene/TemplateListView.js');

var TemplateParameterView = require('../modules/pageScene/TemplateParameterView.js');

var StickerConfigView = require('../modules/pageDynamic/StickerConfigView.js');

var StickerListView = require('../modules/pageDynamic/StickerListView.js');

var AppAction = Reflux.createActions(['setPage']);

var AppStore = Reflux.createStore({

	listenables:[AppAction],

	/**
     *  得到当前页面View功能
     *  @param  string page 表示页面名称
     *  @return 无
     */
	onSetPage: function(page) {
		var request = c360.utils.getQueryString(),
			value = request['value'] || "模版配置",
			pageDom = document.getElementById("page"+page+"View");
		switch (page) {
			case "SceneTemplateConfig":
				React.render(<TemplateConfigView value={value} />, pageDom);
				break;
			case "SceneTemplateList":
				React.render(<TemplateListView value={value} />, pageDom);
				break;
			case "SceneTemplateParameter":
				React.render(<TemplateParameterView value={value} />, pageDom);
				break;
			case "DynamicStickerConfig":
				React.render(<StickerConfigView value={value} />, pageDom);
				break;
			case "DynamicStickerList":
				React.render(<StickerListView value={value} />, pageDom);
				break;
			default:
				throw new Error('unknown page:' + page);
		}
	}

});

module.exports = AppAction;