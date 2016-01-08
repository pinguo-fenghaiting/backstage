/**
 *  实例化路由器
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

var AppAction = require('./AppAction.js');

var MainAction = require('./MainAction.js').MainAction;

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

        defaultRoute(page);
    },

    defaultRoute = function(page){
        MainAction.setPage(page);
        AppAction.setPage(page);
    },

    AppRoute = Router({
        "page_:page" : pageRoute
    });

module.exports = {
    AppRoute:AppRoute,
    defaultRoute:defaultRoute
};