/**
 *  实例化路由器
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

$.ns('c360.route');

var AppAction = Reflux.createActions(['setPageTemplate']);

var AppStore = Reflux.createStore({

    listenables:[AppAction],

    /**
     *  得到当前页面View功能
     *  @param  string page 表示页面名称
     *  @return 无
     */
    onSetPageTemplate: function(page) {
        var request = c360.utils.getQueryString(),
            value = request['value'] || "模版配置",
            TemplateView = eval("c360."+page);
        ReactDOM.render(React.createElement(TemplateView, {value: value}), document.getElementById("page"+page+"View"));
    }

});

/**
 *  处理页面路由
 *  @param  string  page 表示页面对应的名字
 *  @return 无
 */
var pageRoute = function (page) {
        var index = page.indexOf('?');

        if(index != -1){
            page = page.substring(0,index);
        }

        DefaultRoute(page);
    },

    DefaultRoute = function(page){
        AppAction.setPageTemplate(page);
        $(document.body).trigger('page',page);
    },

    AppRoute = Router({
        "page_:page" : pageRoute
    });

c360.route = {
    defaultRoute:DefaultRoute,
    AppRoute:AppRoute
}