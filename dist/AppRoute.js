/**
 *  实例化路由器
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

$.ns('c360.route');

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
            TemplateView = eval("c360."+page);
        ReactDOM.render(<TemplateView value={value} />, document.getElementById("page"+page+"View"));
    }

});

var MainAction = Reflux.createActions(['setPage']);

var MainStore = Reflux.createStore({

    listenables:[MainAction],

    getInitialState:function(){

        return this.menuObject = {
            page:"SceneTemplate"
        };
    },

    onSetPage:function(page){
        this.menuObject.page = page;
        this.trigger(this.menuObject);
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
        MainAction.setPage(page);
        AppAction.setPage(page);
    },

    AppRoute = Router({
        "page_:page" : pageRoute
    });

c360.route = {
    defaultRoute:DefaultRoute,
    AppRoute:AppRoute
}